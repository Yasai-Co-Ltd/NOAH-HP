import { chromium } from "@playwright/test";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const pagePath = fileURLToPath(new URL("./index.html", import.meta.url));
const outputPath = path.join(path.dirname(pagePath), "battery-2026-wireframe.png");
const mobileOutputPath = path.join(path.dirname(pagePath), "battery-2026-wireframe-mobile.png");
const emsSectionOutputPath = path.join(path.dirname(pagePath), "ems-control-section-wireframe.png");
const browser = await chromium.launch({ headless: true, args: ["--allow-file-access-from-files"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(pagePath).href, { waitUntil: "load" });
await page.screenshot({ path: outputPath, fullPage: true });
await page.locator(".overview").screenshot({ path: emsSectionOutputPath });
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
await mobile.goto(pathToFileURL(pagePath).href, { waitUntil: "load" });
await mobile.screenshot({ path: mobileOutputPath, fullPage: true });
await browser.close();
