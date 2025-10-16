import { test, expect } from "@playwright/test";

test.describe(
  "Check Checkboxes with Xpath",
  { tag: ["@smoke", "@regression", "@ui", "@functional", "@positive"] },
  async () => {
    test("OL-130 Check Checkboxes with Xpath", async ({ page }) => {
      await page.goto("/checkbox");
      await expect(
        page.locator("//h1[contains(text(),'Check Box')]")
      ).toBeVisible();

      // Check Home checkbox properties
    });
  }
);
