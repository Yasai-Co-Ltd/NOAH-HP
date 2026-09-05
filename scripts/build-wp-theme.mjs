/**
 * Next.js 静的エクスポート (out/) から WordPress テーマ (wp/themes/noah/) を生成する。
 *
 * 前提: `yarn build` 済みで out/ が存在すること (NEXT_PUBLIC_BASE_PATH は未設定)。
 * 実行: `node scripts/build-wp-theme.mjs` または `yarn build:wp-theme`
 *
 * 生成内容:
 *   - front-page.php / 404.php / templates/page-*.php … 各ルートの完全なHTMLをPHP化
 *   - home.php / single.php … ニュース一覧・詳細 (<main> を WP ループへ差し替え)
 *   - assets/css, assets/img, assets/js/theme.js … スタイル・画像・代替ランタイム
 *   - inc/pages-map.php / inc/seed-news.php … 有効化時セットアップ用データ
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "out");
const PUBLIC_ASSETS = path.join(ROOT, "public", "assets");
const TPL_DIR = path.join(ROOT, "scripts", "wp-theme");
const THEME_DIR = path.join(ROOT, "wp", "themes", "noah");

const THEME_URI = `<?php echo esc_url( get_template_directory_uri() ); ?>`;
const ASSETS_PHP = `<?php echo NOAH_ASSETS; ?>`;
const HOME_PHP = `<?php echo esc_url( home_url( '/' ) ); ?>`;

/** ホームの Strengths セクションで CountUp する値 (src/components/sections/Strengths/Strengths.tsx と一致させる)。 */
const COUNTUP_VALUES = [26, 10, 8];

/** ニュース系ルート。静的テンプレート化から除外し、WP の動的テンプレートに任せる。 */
const NEWS_PREFIX = "news";

/** Header.tsx の NAV_LINKS を再現したメガメニュー定義。 */
const MEGA_MENUS = [
  {
    key: "/about/",
    eyebrow: "ABOUT NOAH",
    title: "会社のすがた、<br/>これまでの歩み。",
    lead: "理念、組織、沿革まで。諾亜建設という会社の輪郭をご紹介します。",
    href: "/about/",
    groups: [
      {
        heading: "私たちの考え",
        items: [
          { href: "/about/message/", label: "トップメッセージ" },
          { href: "/about/vision/", label: "企業理念・ビジョン" },
          { href: "/about/standard/", label: "行動基準" },
          { href: "/about/safety-health/", label: "健康経営" },
        ],
      },
      {
        heading: "会社の輪郭",
        items: [
          { href: "/about/outline/", label: "会社概要" },
          { href: "/about/organization/", label: "グループ・組織図" },
          { href: "/about/history/", label: "沿革" },
        ],
      },
    ],
    feature: {
      image: "/about/hero-noah-brand-ai.png",
      title: "会社のすがた、これまでの歩み。",
      description: "企業情報トップを見る",
      href: "/about/",
    },
  },
  {
    key: "/business/",
    eyebrow: "OUR BUSINESS",
    title: "7つの事業領域、<br/>ひとつの構想。",
    lead: "エネルギーから次世代インフラまで。社会基盤を支える事業を展開します。",
    href: "/business/",
    groups: [
      {
        heading: "電力・蓄電",
        items: [
          { href: "/business/batteryenergystorage/", label: "蓄電池事業" },
          { href: "/business/windpower/", label: "風力発電事業" },
          { href: "/business/biomasspower/", label: "バイオマス事業" },
        ],
      },
      {
        heading: "次世代インフラ",
        items: [
          { href: "/business/hydrogen-mobility/", label: "水素モビリティ事業" },
          { href: "/business/hydrogen-compressor/", label: "水素コンプレッサー事業" },
          { href: "/business/ai-data-center/", label: "AIデータセンター事業" },
          { href: "/business/hopper/", label: "走行式集塵ホッパー事業" },
        ],
      },
    ],
    feature: {
      image: "/strengths-bg-integrated-energy.png",
      title: "7つの事業領域、ひとつの構想。",
      description: "事業紹介トップを見る",
      href: "/business/",
    },
  },
  {
    key: "/products/",
    panelClass: "Header_productsMega",
    eyebrow: "PRODUCTS",
    title: "製品情報",
    lead: "蓄電池システムの監視・制御・電力変換を支えるNOAHの製品をご紹介します。",
    href: "/products/",
    groups: [
      {
        heading: "製品カテゴリ",
        items: [
          {
            href: "/products/bms/",
            label: "BMS",
            image: "/products/bms/n-bams-10ht.png",
            description: "電池状態の監視・診断・保護",
          },
          {
            href: "/products/ems/",
            label: "EMS",
            image: "/products/ems/n-bk-3000.png",
            description: "設備データの収集・通信・制御",
          },
          {
            href: "/products/pcs/",
            label: "PCS",
            image: "/products/pcs/n-pws1-1375ktl-h-jp-6m1-o.png",
            description: "電力変換・系統連系制御",
          },
        ],
      },
    ],
    feature: {
      image: "/products/hero-showroom-v1.png",
      title: "用途と設備規模から選べる製品群。",
      description: "製品情報トップを見る",
      href: "/products/",
    },
  },
  {
    key: "/sustainability/",
    eyebrow: "SUSTAINABILITY",
    title: "3つの視点でとらえる、<br/>サステナビリティ。",
    lead: "地域・環境・未来。持続可能な社会づくりに取り組みます。",
    href: "/sustainability/",
    groups: [
      {
        heading: "取り組みの領域",
        items: [
          { href: "/sustainability/community-relations/", label: "地域共生" },
          { href: "/sustainability/environment/", label: "環境保全" },
          { href: "/sustainability/carbon-neutrality/", label: "カーボンニュートラル" },
        ],
      },
    ],
    feature: {
      image: "/sustainability/carbon-neutrality-v3.png",
      title: "3つの視点でとらえる、サステナビリティ。",
      description: "サステナビリティトップを見る",
      href: "/sustainability/",
    },
  },
];

/* ------------------------------------------------------------------ *
 * ユーティリティ
 * ------------------------------------------------------------------ */

async function rmrf(target) {
  await fs.rm(target, { recursive: true, force: true });
}

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  await fs.cp(src, dest, { recursive: true });
}

async function writeFile(file, content) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, content, "utf8");
}

function phpQuote(value) {
  return `'${String(value).replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
}

/** class トークン集合から `ベース名 → ハッシュ付きフル名` のマップを作る。 */
function addTokensToMap(tokens, map) {
  for (const token of tokens) {
    const sep = token.indexOf("__");
    if (sep <= 0) continue;
    const base = token.slice(0, sep);
    if (!map.has(base)) map.set(base, token);
  }
}

function tokensFromHtml(html) {
  const tokens = [];
  for (const attr of html.matchAll(/class="([^"]+)"/g)) {
    tokens.push(...attr[1].split(/\s+/));
  }
  return tokens.filter((t) => /^[A-Za-z][\w-]*__[\w-]+$/.test(t));
}

function tokensFromCss(css) {
  return [...css.matchAll(/\.([A-Za-z][\w-]*__[\w-]+)/g)].map((m) => m[1]);
}

/** %%ベース名%% プレースホルダをハッシュ付きクラス名へ解決する。 */
function resolvePlaceholders(template, map, context) {
  return template.replace(/%%([\w]+)%%/g, (_, base) => {
    const full = map.get(base);
    if (!full) throw new Error(`classmap に ${base} がありません (${context})`);
    return full;
  });
}

/* ------------------------------------------------------------------ *
 * HTML → PHP テンプレート変換
 * ------------------------------------------------------------------ */

function transformPage(html, { megaPanels, themeJsVer, cssVer }) {
  let s = html;

  // Next.js ランタイムを丸ごと除去(インライン RSC ペイロード含む)。
  s = s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  s = s.replace(/<link[^>]*\bas="script"[^>]*\/?>/g, "");

  // 画像などの静的アセット (public/assets → テーマ assets/img)。
  // 注意: CSS リンク書き換えより先に行う (書き換え後の "/assets/css/" を二重置換しないため)。
  s = s.replaceAll("/assets/", `${ASSETS_PHP}/`);

  // CSS チャンクをテーマ内のコピーへ向ける。
  s = s.replace(/href="\/_next\/static\/css\/([^"]+)"/g, `href="${THEME_URI}/assets/css/$1"`);

  if (s.includes("/_next/")) {
    throw new Error("変換後も /_next/ 参照が残っています");
  }

  // サイト内リンクを home_url ベースへ。
  s = s.replace(/href="\//g, `href="${HOME_PHP}`);

  // メガメニュー(SSR では空)を静的パネルとして埋め込む。
  s = s.replace(
    /(<div class="Header_mega__[\w-]+"[^>]*>)(<\/div>)/,
    (_, open, close) => `${open}${megaPanels}${close}`
  );

  // WordPress フック類の挿入。
  s = s.replace(
    "</head>",
    `<link rel="stylesheet" href="${THEME_URI}/assets/css/noah-wp.css?v=${cssVer}"/>` +
      `<script src="${THEME_URI}/assets/js/theme.js?v=${themeJsVer}" defer></script>` +
      `<noscript><style>[class*="Reveal_root"]{opacity:1!important;transform:none!important}</style></noscript>` +
      `<?php wp_head(); ?></head>`
  );
  s = s.replace(/<body([^>]*)>/, "<body$1><?php wp_body_open(); ?>");
  s = s.replace("</body>", "<?php wp_footer(); ?></body>");

  return s;
}

/**
 * フォームへ送信種別の識別属性を付与する。
 * 送信先アドレスはクライアントに露出させず、サーバー側 (inc/contact.php) の
 * オプションで決定する。theme.js は data-noah-form を見て REST 送信する。
 */
function attachFormAttributes(html) {
  return html
    .replace(
      /<form class="([^"]*ContactForm_form[^"]*)"/g,
      `<form data-noah-form="contact" data-noah-subject="お問い合わせ" class="$1"`
    )
    .replace(
      /<form class="([^"]*RecruitForm_form[^"]*)"/g,
      `<form data-noah-form="recruit" data-noah-subject="採用エントリー" class="$1"`
    );
}

/** ホームの CountUp 対象 (SSR では 0 表示) に最終値と data 属性を焼き込む。 */
function patchCountUps(html) {
  let index = 0;
  const patched = html.replace(
    /(<strong class="[^"]*Strengths_value[^"]*">)<span>0<\/span>/g,
    (_, open) => {
      const value = COUNTUP_VALUES[index];
      index += 1;
      if (value === undefined) throw new Error("CountUp の値が不足しています");
      return `${open}<span data-countup="${value}">${value.toLocaleString("ja-JP")}</span>`;
    }
  );
  if (index !== COUNTUP_VALUES.length) {
    throw new Error(`CountUp の差し替えが ${index}/${COUNTUP_VALUES.length} 件しかできませんでした`);
  }
  return patched;
}

function extractTitle(html) {
  const m = html.match(/<title>([^<]*)<\/title>/);
  if (!m) return "";
  return m[1].split("|")[0].trim();
}

/* ------------------------------------------------------------------ *
 * メガメニュー静的パネル生成
 * ------------------------------------------------------------------ */

function buildMegaPanels(cls) {
  const c = (base) => {
    const full = cls.get(base);
    if (!full) throw new Error(`Header クラス ${base} が見つかりません`);
    return full;
  };
  const homeHref = (p) => `<?php echo esc_url( home_url( '${p}' ) ); ?>`;

  return MEGA_MENUS.map((menu) => {
    const groups = menu.groups
      .map(
        (group) => `<div class="${c("Header_megaGroup")}"><h3>${group.heading}</h3><ul>${group.items
          .map((item) => {
            const image = item.image
              ? `<span class="${c("Header_megaProductImage")}"><img src="${ASSETS_PHP}${item.image}" alt=""/></span>`
              : "";
            const desc = item.description
              ? `<span class="${c("Header_megaItemDesc")}">${item.description}</span>`
              : "";
            return `<li><a href="${homeHref(item.href)}">${image}<span class="${c("Header_megaItemLabel")}">${item.label}</span>${desc}<span class="${c("Header_megaItemArrow")}" aria-hidden="true">→</span></a></li>`;
          })
          .join("")}</ul></div>`
      )
      .join("");

    const feature = `<a class="${c("Header_megaFeature")}" href="${homeHref(menu.feature.href)}"><span class="${c("Header_megaFeatureImage")}"><img src="${ASSETS_PHP}${menu.feature.image}" alt=""/></span><span class="${c("Header_megaFeatureBody")}"><strong>${menu.feature.title}</strong><em>${menu.feature.description}<span aria-hidden="true"> →</span></em></span></a>`;

    return (
      // hidden 属性は .megaInner の display:grid に負けるため、インライン display で隠す。
      `<div class="container ${c("Header_megaInner")}${menu.panelClass ? ` ${c(menu.panelClass)}` : ""}" data-noah-mega="${menu.key}" hidden style="display:none">` +
      `<div class="${c("Header_megaIntro")}"><span class="${c("Header_megaEyebrow")}">${menu.eyebrow}</span>` +
      `<h2 class="${c("Header_megaTitle")}">${menu.title}</h2>` +
      `<p class="${c("Header_megaLead")}">${menu.lead}</p>` +
      `<a class="${c("Header_megaIntroLink")}" href="${homeHref(menu.href)}">すべて見る<span aria-hidden="true">→</span></a></div>` +
      `<div class="${c("Header_megaGroups")}">${groups}</div>` +
      feature +
      `</div>`
    );
  }).join("");
}

/* ------------------------------------------------------------------ *
 * ニュース記事シード抽出
 * ------------------------------------------------------------------ */

function extractNewsSeed(html, slug) {
  const title = html.match(/<h1 id="news-detail-title"[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.trim();
  const date =
    html.match(/<time datetime="([\d-]+)"/i)?.[1] ?? html.match(/<time dateTime="([\d-]+)"/)?.[1];
  const category = html.match(
    /page_heroMeta[^"]*"><time[^>]*>[^<]*<\/time><span>([^<]*)<\/span>/
  )?.[1];
  const excerpt = html.match(/class="page_heroLead__[\w-]+">([\s\S]*?)<\/p>/)?.[1]?.trim() ?? "";
  const blocks = [
    ...html.matchAll(/<section class="page_contentBlock__[\w-]+">[\s\S]*?<\/section>/g),
  ].map((m) => m[0]);

  if (!title || !date || !category || blocks.length === 0) {
    throw new Error(`ニュース記事の抽出に失敗しました: ${slug}`);
  }

  return {
    slug,
    title,
    // 00:00 とし、当日公開の記事がサーバー時刻次第で「予約投稿」扱いになるのを防ぐ。
    date: `${date} 00:00:00`,
    category,
    excerpt,
    content: blocks.join("\n"),
  };
}

/* ------------------------------------------------------------------ *
 * メイン処理
 * ------------------------------------------------------------------ */

async function main() {
  await fs.access(OUT_DIR).catch(() => {
    throw new Error("out/ がありません。先に `yarn build` を実行してください。");
  });

  // 生成物を掃除 (手書きの style.css / functions.php / index.php / inc/setup-content.php は残す)。
  for (const target of [
    "templates",
    "assets",
    "front-page.php",
    "home.php",
    "single.php",
    "404.php",
    "inc/pages-map.php",
    "inc/seed-news.php",
    "screenshot.jpg",
  ]) {
    await rmrf(path.join(THEME_DIR, target));
  }

  /* ---- アセット ---- */
  const cssSrcDir = path.join(OUT_DIR, "_next", "static", "css");
  const cssDestDir = path.join(THEME_DIR, "assets", "css");
  await fs.mkdir(cssDestDir, { recursive: true });

  const globalClassMap = new Map();
  for (const file of await fs.readdir(cssSrcDir)) {
    let css = await fs.readFile(path.join(cssSrcDir, file), "utf8");
    addTokensToMap(tokensFromCss(css), globalClassMap);
    // CSS 内の画像参照はテーマ内の相対パスへ (assets/css/ → assets/img/)。
    css = css.replaceAll("url(/assets/", "url(../img/");
    await fs.writeFile(path.join(cssDestDir, file), css, "utf8");
  }

  await copyDir(PUBLIC_ASSETS, path.join(THEME_DIR, "assets", "img"));
  await fs.copyFile(path.join(TPL_DIR, "noah-wp.css"), path.join(cssDestDir, "noah-wp.css"));

  // テーマスクリーンショット (任意)。
  const screenshotSrc = path.join(ROOT, "pc-home.jpeg");
  await fs
    .copyFile(screenshotSrc, path.join(THEME_DIR, "screenshot.jpg"))
    .catch(() => console.warn("screenshot: pc-home.jpeg が無いためスキップ"));

  /* ---- theme.js (クラスマップ差し込み) ---- */
  const jsKeys = [
    "Header_header",
    "Header_toggle",
    "Header_navOpen",
    "Header_mobileExpandButton",
    "Header_mobileSubmenuOpen",
    "Header_mega",
    "Header_megaOpen",
    "Header_navItemWrap",
    "Header_navItemActive",
    "Reveal_root",
    "Reveal_visible",
  ];
  // CSS 側に定義が無い(元実装でも no-op の)クラスは空文字で渡し、JS 側でスキップする。
  const jsOptionalKeys = ["Header_megaActive"];
  const classmap = {};
  for (const key of jsKeys) {
    const full = globalClassMap.get(key);
    if (!full) throw new Error(`theme.js 用クラス ${key} が CSS から見つかりません`);
    classmap[key] = full;
  }
  for (const key of jsOptionalKeys) {
    classmap[key] = globalClassMap.get(key) ?? "";
  }
  const themeJs = (await fs.readFile(path.join(TPL_DIR, "theme.template.js"), "utf8")).replaceAll(
    "__NOAH_CLASSMAP__",
    JSON.stringify(classmap, null, 2)
  );
  if (themeJs.includes("__NOAH_CLASSMAP__")) {
    throw new Error("theme.js のクラスマップ置換に失敗しました");
  }
  await writeFile(path.join(THEME_DIR, "assets", "js", "theme.js"), themeJs);

  // キャッシュバスティング: 固定ファイル名の theme.js / noah-wp.css は
  // 内容ハッシュを ?v= に付け、更新時にブラウザ/サーバーのキャッシュを無効化する。
  const hash8 = (content) => createHash("sha1").update(content).digest("hex").slice(0, 8);
  const themeJsVer = hash8(themeJs);
  const cssVer = hash8(await fs.readFile(path.join(TPL_DIR, "noah-wp.css"), "utf8"));

  const megaPanels = buildMegaPanels(globalClassMap);

  /* ---- ルート探索 ---- */
  const routes = [];
  async function walk(dir, route) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    if (entries.some((e) => e.isFile() && e.name === "index.html")) {
      routes.push(route);
    }
    for (const entry of entries) {
      if (
        entry.isDirectory() &&
        entry.name !== "_next" &&
        entry.name !== "assets" &&
        entry.name !== "wireframes"
      ) {
        await walk(path.join(dir, entry.name), route ? `${route}/${entry.name}` : entry.name);
      }
    }
  }
  await walk(OUT_DIR, "");

  /* ---- 静的ページテンプレート ---- */
  const pagesMap = {};
  let templateCount = 0;

  for (const route of routes.sort()) {
    if (route === NEWS_PREFIX || route.startsWith(`${NEWS_PREFIX}/`)) continue;

    let html = await fs.readFile(path.join(OUT_DIR, route, "index.html"), "utf8");
    if (route === "") html = patchCountUps(html);
    html = attachFormAttributes(html);
    const php = transformPage(html, { megaPanels, themeJsVer, cssVer });

    if (route === "") {
      await writeFile(
        path.join(THEME_DIR, "front-page.php"),
        `<?php /* フロントページ (自動生成: scripts/build-wp-theme.mjs) */ ?>\n${php}`
      );
      continue;
    }
    if (route === "404") {
      await writeFile(
        path.join(THEME_DIR, "404.php"),
        `<?php /* 404 (自動生成: scripts/build-wp-theme.mjs) */ ?>\n${php}`
      );
      continue;
    }

    const title = extractTitle(html) || route;
    const fileName = `page-${route.replaceAll("/", "-")}.php`;
    await writeFile(
      path.join(THEME_DIR, "templates", fileName),
      `<?php /* Template Name: ${title} (/${route}/) */ /* 自動生成: scripts/build-wp-theme.mjs */ ?>\n${php}`
    );
    pagesMap[route] = { title, template: `templates/${fileName}` };
    templateCount += 1;
  }

  /* ---- ニュース一覧 (home.php) ---- */
  const newsListHtmlRaw = await fs.readFile(path.join(OUT_DIR, NEWS_PREFIX, "index.html"), "utf8");
  const newsListMap = new Map(globalClassMap);
  // ページ固有 (page_*) クラスは HTML 由来を優先して上書きする。
  const listPageMap = new Map();
  addTokensToMap(tokensFromHtml(newsListHtmlRaw), listPageMap);
  for (const [base, full] of listPageMap) newsListMap.set(base, full);

  const homeMain = resolvePlaceholders(
    await fs.readFile(path.join(TPL_DIR, "home-main.template.php"), "utf8"),
    newsListMap,
    "home.php"
  );
  let homePhp = transformPage(newsListHtmlRaw, { megaPanels, themeJsVer, cssVer });
  homePhp = homePhp.replace(/<main>[\s\S]*<\/main>/, () => homeMain);
  await writeFile(
    path.join(THEME_DIR, "home.php"),
    `<?php /* ニュース一覧 (自動生成: scripts/build-wp-theme.mjs) */ ?>\n${homePhp}`
  );

  /* ---- ニュース詳細 (single.php) ---- */
  const newsSlugs = (await fs.readdir(path.join(OUT_DIR, NEWS_PREFIX), { withFileTypes: true }))
    .filter((e) => e.isDirectory())
    .map((e) => e.name);
  if (newsSlugs.length === 0) throw new Error("ニュース詳細ページが out/news/ にありません");

  const detailHtmlRaw = await fs.readFile(
    path.join(OUT_DIR, NEWS_PREFIX, newsSlugs[0], "index.html"),
    "utf8"
  );
  const detailMap = new Map(globalClassMap);
  const detailPageMap = new Map();
  addTokensToMap(tokensFromHtml(detailHtmlRaw), detailPageMap);
  for (const [base, full] of detailPageMap) detailMap.set(base, full);

  const singleMain = resolvePlaceholders(
    await fs.readFile(path.join(TPL_DIR, "single-main.template.php"), "utf8"),
    detailMap,
    "single.php"
  );
  let singlePhp = transformPage(detailHtmlRaw, { megaPanels, themeJsVer, cssVer });
  singlePhp = singlePhp.replace(/<main>[\s\S]*<\/main>/, () => singleMain);
  singlePhp = singlePhp.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title><?php single_post_title(); ?> | 諾亜建設株式会社</title>`
  );
  singlePhp = singlePhp.replace(
    /<meta name="description" content="[^"]*"\/>/,
    `<meta name="description" content="<?php echo esc_attr( wp_strip_all_tags( get_the_excerpt() ) ); ?>"/>`
  );
  await writeFile(
    path.join(THEME_DIR, "single.php"),
    `<?php /* ニュース詳細 (自動生成: scripts/build-wp-theme.mjs) */ ?>\n${singlePhp}`
  );

  /* ---- inc/pages-map.php ---- */
  const pagesMapPhp = [
    "<?php",
    "// 自動生成: scripts/build-wp-theme.mjs — 固定ページ階層とテンプレートの対応表",
    "return array(",
    ...Object.entries(pagesMap).map(
      ([route, page]) =>
        `\t${phpQuote(route)} => array( 'title' => ${phpQuote(page.title)}, 'template' => ${phpQuote(page.template)} ),`
    ),
    ");",
    "",
  ].join("\n");
  await writeFile(path.join(THEME_DIR, "inc", "pages-map.php"), pagesMapPhp);

  /* ---- inc/seed-news.php ---- */
  const seeds = [];
  for (const slug of newsSlugs) {
    const html = await fs.readFile(path.join(OUT_DIR, NEWS_PREFIX, slug, "index.html"), "utf8");
    seeds.push(extractNewsSeed(html, slug));
  }
  seeds.sort((a, b) => (a.date < b.date ? 1 : -1)); // 新しい順。

  const seedPhp = [
    "<?php",
    "// 自動生成: scripts/build-wp-theme.mjs — テーマ有効化時に投入する初期ニュース記事",
    "return array(",
    ...seeds.map((seed) =>
      [
        "\tarray(",
        `\t\t'slug'     => ${phpQuote(seed.slug)},`,
        `\t\t'title'    => ${phpQuote(seed.title)},`,
        `\t\t'date'     => ${phpQuote(seed.date)},`,
        `\t\t'category' => ${phpQuote(seed.category)},`,
        `\t\t'excerpt'  => ${phpQuote(seed.excerpt)},`,
        `\t\t'content'  => ${phpQuote(seed.content)},`,
        "\t),",
      ].join("\n")
    ),
    ");",
    "",
  ].join("\n");
  await writeFile(path.join(THEME_DIR, "inc", "seed-news.php"), seedPhp);

  console.log(`✔ 固定ページテンプレート: ${templateCount} 件`);
  console.log(`✔ ニュースシード: ${seeds.length} 件 (${seeds.map((s) => s.slug).join(", ")})`);
  console.log(`✔ テーマ出力先: ${path.relative(ROOT, THEME_DIR)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
