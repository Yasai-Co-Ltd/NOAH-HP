import { expect, test } from "@playwright/test";

test.describe("Noah HP — homepage smoke", () => {
  test("renders hero, sections, and footer", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/諾亜建設/);
    await expect(page.locator("#hero-title")).toBeVisible();
    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#business")).toBeVisible();
    await expect(page.locator("#projects")).toBeVisible();
    await expect(page.locator("#news")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
    await expect(page.locator("#company")).toBeVisible();
  });

  test("mobile nav toggle opens and closes the menu", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");

    await page.goto("/");

    const toggle = page.getByRole("button", { name: /メニューを開く/ });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    await toggle.click();
    const openToggle = page.getByRole("button", { name: /メニューを閉じる/ });
    await expect(openToggle).toHaveAttribute("aria-expanded", "true");

    await page.getByRole("link", { name: "私たちについて" }).first().click();
    await expect(page.getByRole("button", { name: /メニューを開く/ })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
