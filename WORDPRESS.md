# WordPress 運用ガイド

このリポジトリの Next.js サイトを WordPress テーマ化して運用するためのガイドです。

## 構成

```
docker-compose.yml        WordPress + MySQL + phpMyAdmin + WP-CLI
wp/themes/noah/           WordPress テーマ「NOAH Corporate」
scripts/build-wp-theme.mjs  Next.js 静的エクスポート → テーマ生成スクリプト
scripts/wp-theme/         生成用テンプレート素材 (theme.js / home / single / CSS)
```

### コンテンツの管理場所

| コンテンツ | 管理場所 |
|-----------|---------|
| ニュース(お知らせ/プレスリリース) | **WordPress 管理画面**(投稿・カテゴリ・アイキャッチ) |
| ホーム・企業情報・事業紹介などの固定ページ | Next.js ソース (`src/`) → テーマ再生成で反映 |
| デザイン・レイアウト | Next.js ソース (`src/`) → テーマ再生成で反映 |

## セットアップ手順

```bash
# 1. テーマを生成 (Next.js ビルド → wp/themes/noah/ へ変換)
yarn build:wp-theme

# 2. WordPress + MySQL を起動 (既定ポート 8080、.env の WP_PORT で変更可)
docker compose up -d

# 3. WordPress を初期インストール (ブラウザで手動でも、WP-CLI でも可)
docker compose run --rm wpcli core install \
  --url=http://localhost:8080 \
  --title="諾亜建設株式会社" \
  --admin_user=admin --admin_password=admin \
  --admin_email=admin@example.com --skip-email

# 4. テーマを有効化
docker compose run --rm wpcli theme activate noah
```

テーマ有効化時に以下が **自動実行** されます(再有効化しても安全):

- 全固定ページの作成(`/about/history/` などの階層つき)とテンプレート割り当て
- フロントページ/投稿ページ(ニュース)の表示設定
- ニュースカテゴリ(お知らせ・プレスリリース)と初期記事3件の投入
- パーマリンク設定(投稿は `/news/記事スラッグ/`)

| URL | 用途 |
|-----|------|
| http://localhost:8080 | サイト表示 |
| http://localhost:8080/wp-admin/ | WordPress 管理画面 |
| http://localhost:8081 | phpMyAdmin (root / root) |

> ポートが衝突する場合はリポジトリ直下の `.env` に `WP_PORT=8090` のように指定してください(`.env` は gitignore 済み)。

## ニュース記事の追加

管理画面 > 投稿 > 新規追加。以下がテーマに反映されます。

- **タイトル / 本文**: 詳細ページに表示(見出しは H3 推奨)
- **抜粋**: 一覧カードの説明文・詳細ヒーローのリード文
- **カテゴリ**: 「お知らせ」「プレスリリース」(未設定は「お知らせ」表示)
- **アイキャッチ画像**: 一覧・詳細のサムネイル(未設定時は既定画像)

## デザイン・固定ページを変更したとき

固定ページの内容やデザインは Next.js 側 (`src/`) が原本です。変更したら:

```bash
yarn build:wp-theme
```

`wp/themes/noah/` が再生成され、Docker にマウント済みのためリロードで即反映されます。
(手書きファイル `style.css` / `functions.php` / `index.php` / `inc/setup-content.php` は上書きされません)

新しいページを追加した場合は、テーマ再有効化かページ再作成で固定ページ登録を反映します:

```bash
docker compose run --rm wpcli eval 'noah_setup_site_content();'
```

## 制限事項・今後の置き換えポイント

- **お問い合わせ/採用フォーム**: 現状は元サイトと同じ mailto 起動の暫定実装
  (`assets/js/theme.js`)。本送信が必要になったら Contact Form 7 等のプラグインへ
  置き換えてください(フォームの `name` 属性はそのまま移植可能)。
- **検索・コメント**: 未対応(コーポレートサイトのため対象外)。
- **本番デプロイ**: `wp/themes/noah/` を本番 WordPress の `wp-content/themes/` へ
  配置してください。DB のパスワード等は docker-compose の既定値(開発用)から必ず変更すること。
