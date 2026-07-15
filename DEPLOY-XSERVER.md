# エックスサーバー デプロイ手順

`main` への `git push` をトリガーに、GitHub Actions が WordPress テーマ
（`wp/themes/noah`）をビルドし、エックスサーバーのテーマディレクトリへ
rsync で自動同期します。ワークフローは
[.github/workflows/deploy-xserver-theme.yml](.github/workflows/deploy-xserver-theme.yml) 。

## 全体像

```
git push (main)
   └─ GitHub Actions
        ├─ yarn build:wp-theme     # Next.js ビルド → テーマ生成
        ├─ rsync --checksum        # 変更ファイルのみ転送
        └─ (任意) wp eval           # 新規ページ/ニュースを同期
   └─ エックスサーバー /wp-content/themes/noah が更新される
```

初回だけ手動セットアップが必要です。以降は push するたびにテーマが更新されます。

---

## 1. 初回セットアップ（サーバー側・一度だけ）

### 1-1. WordPress を用意する

エックスサーバーの「WordPress簡単インストール」で運用ドメインに WordPress を
インストールします。

### 1-2. テーマを設置して有効化する

テーマを **一度だけ手動で** 設置し、有効化します。有効化した瞬間に
`after_switch_theme` フック（[wp/themes/noah/inc/setup-content.php](wp/themes/noah/inc/setup-content.php)）が走り、
固定ページ階層・ニュース記事・フロントページ設定・パーマリンクが自動生成されます。

いずれかの方法で設置：

- **管理画面**: ローカルで `yarn build:wp-theme` 後、`wp/themes/noah` を zip 化して
  「外観 → テーマ → 新規追加 → テーマのアップロード」。または
- **FTP/ファイルマネージャ**: `wp/themes/noah` を
  `.../public_html/wp-content/themes/noah` へアップロード。

設置後、「外観 → テーマ」で **NOAH テーマを有効化**。トップページやニュースが
表示されれば成功です。

> この手順を踏まないと、以降の自動デプロイは「転送先にテーマが無い」として
> 安全のため停止します（親ディレクトリ誤削除の防止）。

### 1-3. SSH を有効化して公開鍵を登録する

1. サーバーパネル → 「SSH設定」→ **ONにする**
2. 手元でデプロイ用の鍵ペアを生成（パスフレーズなし）:
   ```bash
   ssh-keygen -t ed25519 -f ~/.ssh/noah_xserver_deploy -N "" -C "github-actions-noah"
   ```
3. サーバーパネル →「SSH設定 → 公開鍵登録・設定」で
   `~/.ssh/noah_xserver_deploy.pub` の内容を登録
4. 接続確認（エックスサーバーの SSH ポートは **10022**）:
   ```bash
   ssh -i ~/.ssh/noah_xserver_deploy -p 10022 <アカウントID>@<サーバーホスト>
   ```
   ホスト名はサーバーパネルの「サーバー情報」に記載（例: `svXXXX.xserver.jp`）。

---

## 2. GitHub 側の設定（一度だけ）

リポジトリ → **Settings → Secrets and variables → Actions** で以下を登録。

### Secrets（必須）

| Secret 名 | 値 | 例 |
|---|---|---|
| `XSERVER_SSH_HOST` | サーバーホスト名 | `svXXXX.xserver.jp` |
| `XSERVER_SSH_USER` | アカウントID | `xs123456` |
| `XSERVER_SSH_KEY` | **秘密鍵の全文** | `~/.ssh/noah_xserver_deploy` の中身（`-----BEGIN...END-----` 全体） |
| `XSERVER_THEME_PATH` | テーマの絶対パス | `/home/xs123456/example.com/public_html/wp-content/themes/noah` |

`XSERVER_THEME_PATH` はサーバーに SSH し `pwd` で確認できます。末尾は必ず
`/themes/noah`（有効化済みテーマのディレクトリ）にすること。

### Secrets（任意・WP-CLI 連携する場合のみ）

| Secret 名 | 値 |
|---|---|
| `XSERVER_SSH_PORT` | SSH ポート。未設定なら `10022` を使用 |
| `XSERVER_WP_PATH` | WordPress 本体の絶対パス（`wp-config.php` がある場所） |

### Variables（任意）

| Variable 名 | 値 | 効果 |
|---|---|---|
| `RUN_WP_SETUP` | `true` | デプロイ後に `wp eval 'noah_setup_site_content();'` を実行し、**新規追加した固定ページやニュースをサーバーへ反映**。サーバーに WP-CLI がある場合のみ有効 |

---

## 3. 運用

- **通常の更新**（既存ページの文言・デザイン・画像差し替え）
  → `main` に push するだけ。テーマファイルが上書きされます。

- **新しい事業ページ等を追加したとき**
  テーマファイルは転送されますが、WordPress の固定ページ自体は
  テーマ有効化時にしか自動生成されません。反映方法は次のいずれか：
  1. `RUN_WP_SETUP=true` を設定しておく（WP-CLI 必須。自動で同期）、または
  2. 一度テーマを「無効化 → 再有効化」する、または
  3. サーバーで手動実行:
     ```bash
     cd <WordPress本体パス>
     wp eval 'noah_setup_site_content();'
     ```
  `noah_setup_site_content()` は冪等（既存ページ・記事は再作成しない）なので、
  何度実行しても安全です。

- **手動デプロイ**
  GitHub → Actions →「Deploy WordPress theme to XServer」→ *Run workflow*。

---

## 補足

- 既存の [.github/workflows/deploy.yml](.github/workflows/deploy.yml) は
  GitHub Pages への静的サイト公開用で、本デプロイとは独立して動きます（残して問題なし）。
- 初回の rsync は約 170MB（大半が `assets/img` の画像）を転送します。
  2 回目以降は `--checksum` により変更ファイルのみ転送されるため高速です。
- 転送先の検証（`style.css` の存在確認）に失敗するとデプロイは中断します。
  その場合は「1-2. テーマを設置して有効化」が未完了か、`XSERVER_THEME_PATH`
  の値が誤っています。
