import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demoqa.com/radio-button");
  await expect(page.locator("div").filter({ hasText: /^Yes$/ })).toBeVisible();
  await expect(page.locator("#app")).toContainText("Yes");
  await page.getByText("Yes").click();
  await expect(page.locator("#app")).toMatchAriaSnapshot(`
    - radio "Yes" [checked]
    - text: "Yes"
    `);
});
