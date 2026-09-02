import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "@playwright/test";

const root = process.cwd();
const outputDir = path.join(root, "public/wireframes/2026-company-update-current-base");
const tempDir = "/private/tmp/noah-company-update-current-base";

const allPages = [
  { id: "01-home", html: ".next/server/app/index.html" },
  { id: "02-about", html: ".next/server/app/about.html" },
  { id: "03-outline", html: ".next/server/app/about/outline.html" },
  { id: "04-history", html: ".next/server/app/about/history.html" },
  { id: "05-business", html: ".next/server/app/business.html" },
  { id: "06-battery", html: ".next/server/app/business/batteryenergystorage.html" },
  { id: "07-biomass", html: ".next/server/app/business/biomasspower.html" },
  { id: "08-hopper", html: ".next/server/app/business/hopper.html" },
  { id: "09-wind", html: ".next/server/app/business/windpower.html" },
  { id: "10-ai-data-center", html: ".next/server/app/business/ai-data-center.html" },
];

const requestedIds = new Set(process.argv.slice(2));
const pages = requestedIds.size
  ? allPages.filter((page) => requestedIds.has(page.id))
  : allPages;
const useJpeg = process.env.WIREFRAME_FORMAT === "jpg";
const mobileViewport = process.env.WIREFRAME_VIEWPORT === "mobile";

function localizeHtml(source) {
  const assetRoot = `${pathToFileURL(path.join(root, "public/assets")).href}/`;
  const staticRoot = `${pathToFileURL(path.join(root, ".next/static")).href}/`;

  return source
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*as="script"[^>]*>/gi, "")
    .replaceAll('"/assets/', `"${assetRoot}`)
    .replaceAll("'/assets/", `'${assetRoot}`)
    .replaceAll("url(/assets/", `url(${assetRoot}`)
    .replaceAll('"/_next/static/', `"${staticRoot}`)
    .replaceAll("'/_next/static/", `'${staticRoot}`);
}

async function setHtml(page, selector, html) {
  await page.locator(selector).first().evaluate((element, value) => {
    element.innerHTML = value;
  }, html);
}

async function setText(page, selector, value) {
  await page.locator(selector).first().evaluate((element, text) => {
    element.textContent = text;
  }, value);
}

async function patchHome(page) {
  await setHtml(page, "#hero-title", "未来を拓く、<br>社会を支える。");
  await setHtml(
    page,
    '[class*="Hero_copy"]',
    "発電・蓄電・風力・水素・AIデータセンターをつなぎ、<br>持続可能な未来のインフラをつくる。",
  );
  await setText(
    page,
    '[class*="About_body"]',
    "諾亜建設は、発電、蓄電池、風力発電、水素・新エネルギー自動車、AIデータセンターの5つを中核に、設計・調達・施工・試運転まで一貫したインフラ事業を展開します。",
  );
  await setHtml(
    page,
    "#business-title",
    "5つの中核事業と、<br>2つの専門ソリューション。",
  );
  await setText(
    page,
    '[class*="Business_lead"]',
    "発電、蓄電池、風力、水素・新エネルギー自動車、AIデータセンターを中核に、バイオマス燃料・港湾荷役などの専門技術を組み合わせます。",
  );
  await setText(
    page,
    '[class*="Strengths_lead"]',
    "発電所設備の設計から調達・施工・試運転まで。燃料、蓄電、制御、データ基盤を横断し、技術・統合・展開の力で事業化を支えます。",
  );

  const stats = [
    ["系統用蓄電池", "26", "案件"],
    ["蓄電池開発規模", "約1.2", "GW"],
    ["AIデータセンター候補地", "10", "案件"],
    ["AIデータセンター想定規模", "約1.2", "GW"],
    ["開発エリア", "全国", "展開"],
  ];

  await page.locator('[class*="Strengths_stats"] > *').evaluateAll((items, values) => {
    items.forEach((item, index) => {
      const [label, value, unit] = values[index];
      const dt = item.querySelector("dt");
      const dd = item.querySelector("dd");
      if (dt) dt.textContent = label;
      if (!dd) return;
      const strong = dd.querySelector("strong");
      const span = dd.querySelector("span");
      if (strong) strong.textContent = value;
      if (span) span.textContent = unit;
    });
  }, stats);
}

async function patchAbout(page) {
  const overview = [
    ["2018", "設立"],
    ["99,000,000円", "資本金"],
    ["5領域", "中核事業"],
  ];
  await page.locator('[class*="overviewItem"]').evaluateAll((items, values) => {
    items.forEach((item, index) => {
      const value = item.querySelector("b,strong");
      const label = item.querySelector("span,p");
      if (value) value.textContent = values[index][0];
      if (label) label.textContent = values[index][1];
    });
  }, overview);
  await page.locator('[class*="principle"] p').evaluateAll((items) => {
    if (items[1]) {
      items[1].textContent =
        "発電、蓄電池、風力、水素・新エネルギー自動車、AIデータセンターを横断し、最適な組み合わせを検討します。";
    }
  });
}

async function patchHistory(page) {
  await setText(page, "#timeline-title", "2018年から2026年までの主な歩み。");
  await page.locator('[class*="yearBlock"] span').evaluateAll((items) => {
    const current = items.find((item) => item.textContent.trim() === "現在");
    if (current) current.textContent = "2026";
  });
  await page.locator('[class*="timelineBody"] h3').evaluateAll((items) => {
    const current = items.find((item) => item.textContent.includes("本格展開"));
    if (current) current.textContent = "蓄電池事業と1.2GW AIデータセンター事業を本格展開";
  });
}

async function patchBusiness(page) {
  await setText(
    page,
    '[class*="heroLead"]',
    "発電、蓄電池、風力、水素・新エネルギー自動車、AIデータセンターを中核に、バイオマス燃料、港湾荷役、水素圧縮の専門技術を組み合わせます。",
  );
  await setHtml(
    page,
    "#domains-title",
    "5つの中核事業と、<br>2つの専門ソリューション。",
  );
  await page.locator('[class*="supportBody"] > p').first().evaluate((element) => {
    element.textContent =
      "調査・企画、設計・調達、施工・導入、運用・改善まで、5つの中核事業と専門ソリューションを横断して支えます。";
  });
}

async function patchWind(page) {
  const metricStrip = page.locator('[class*="metricBoard"], [class*="metricStrip"], [class*="specStrip"]').first();
  const strategy = `
    <section class="wire-strategy" aria-labelledby="wire-strategy-title">
      <div class="container">
        <p class="wire-label">BUSINESS STRATEGY <span>風力発電事業戦略</span></p>
        <div class="wire-strategy-heading">
          <h2 id="wire-strategy-title" class="section-heading">日本市場に最適化し、<br>長く運用できる風力発電へ。</h2>
          <p>会社概要2026年版で示された3つの戦略を、既存の風力発電ページの流れを変えずに追加します。</p>
        </div>
        <div class="wire-strategy-grid">
          <article><b>01</b><h3>供給力と現地化の融合</h3><p>日本市場向けの設計・認証・O&M体制を組み合わせ、適市場型の製品基盤を構築します。</p></article>
          <article><b>02</b><h3>長期的な市場展開</h3><p>既設風車の更新需要を中長期の成長機会と捉え、運用体制を整えます。</p></article>
          <article><b>03</b><h3>パートナー連携による推進</h3><p>リプレース、中小型風力、自治体・電力会社・技術企業との協業を進めます。</p></article>
        </div>
      </div>
    </section>`;
  await metricStrip.evaluate((element, html) => {
    element.insertAdjacentHTML("afterend", html);
  }, strategy);
}

const patchers = {
  "02-about": patchAbout,
  "04-history": patchHistory,
  "05-business": patchBusiness,
  "09-wind": patchWind,
};

const sharedStyles = `
  html { scroll-behavior: auto !important; }
  body { overflow: visible !important; }
  [class*="Reveal_root"] { opacity: 1 !important; transform: none !important; visibility: visible !important; }
  [class*="fadeIn"] { opacity: 1 !important; transform: none !important; animation: none !important; }
  [class*="Header_header"] { position: relative !important; }
  [class*="Header_mega"], [class*="Header_mobileMenu"] { display: none !important; }
  .wire-strategy { padding: 112px 0; background: #fff; color: #0b2e58; }
  .wire-label { margin: 0 0 24px; color: #159dcc; font-size: 12px; font-weight: 800; letter-spacing: .1em; }
  .wire-label span { margin-left: 12px; color: #6a7d91; letter-spacing: 0; }
  .wire-strategy-heading { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(360px, .62fr); gap: 80px; align-items: end; margin-bottom: 52px; }
  .wire-strategy-heading h2 { margin: 0; }
  .wire-strategy-heading > p { margin: 0; color: #64788d; font-size: 15px; line-height: 2; }
  .wire-strategy-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #d7e3ec; border-bottom: 1px solid #d7e3ec; }
  .wire-strategy-grid article { min-height: 230px; padding: 34px 32px; border-right: 1px solid #d7e3ec; }
  .wire-strategy-grid article:last-child { border-right: 0; }
  .wire-strategy-grid b { color: #159dcc; font-size: 13px; }
  .wire-strategy-grid h3 { margin: 20px 0 12px; font-size: 21px; line-height: 1.55; }
  .wire-strategy-grid p { margin: 0; color: #64788d; font-size: 13px; line-height: 1.9; }
`;

await fs.mkdir(outputDir, { recursive: true });
await fs.mkdir(tempDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  args: ["--allow-file-access-from-files"],
});

try {
  for (const item of pages) {
    console.log(item.id, "start");
    const source = await fs.readFile(path.join(root, item.html), "utf8");
    const localized = localizeHtml(source);
    const tempFile = path.join(tempDir, `${item.id}.html`);
    await fs.writeFile(tempFile, localized);
    console.log(item.id, "localized");

    const page = await browser.newPage({
      viewport: mobileViewport ? { width: 390, height: 900 } : { width: 1440, height: 1000 },
    });
    await page.goto(pathToFileURL(tempFile).href, { waitUntil: "load" });
    console.log(item.id, "loaded");
    await page.addStyleTag({ content: sharedStyles });
    if (patchers[item.id]) await patchers[item.id](page);
    console.log(item.id, "patched");
    await page.evaluate(() => {
      document.querySelectorAll("img").forEach((image) => {
        image.loading = "eager";
        const source = image.getAttribute("src");
        if (!source) return;
        image.removeAttribute("src");
        image.setAttribute("src", source);
      });
    });
    await page.waitForTimeout(500);
    await page.screenshot({
      path: path.join(
        outputDir,
        `${item.id}${mobileViewport ? "-mobile" : ""}.${useJpeg ? "jpg" : "png"}`,
      ),
      fullPage: true,
      ...(useJpeg ? { type: "jpeg", quality: 86 } : {}),
    });

    const report = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
      brokenImages: [...document.images].filter((image) => !image.naturalWidth).length,
      overflow: [...document.querySelectorAll("h1,h2,h3,p")]
        .filter((element) => element.scrollWidth > element.clientWidth + 2)
        .map((element) => ({
          tag: element.tagName,
          text: element.textContent?.trim().slice(0, 80),
          className: element.className,
          clientWidth: element.clientWidth,
          scrollWidth: element.scrollWidth,
        })),
    }));
    console.log(item.id, report);
    await page.close();
  }
} finally {
  await browser.close();
}
