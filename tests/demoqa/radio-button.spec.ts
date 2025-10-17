import { test, expect } from "@playwright/test";
test.describe(
  "Check Radio Buttons with Xpath",
  { tag: ["@smoke", "@regression", "@ui", "@functional", "@positive"] },
  async () => {
    test("OL-131 Check Radio Buttons with Xpath", async ({ page }) => {
      await page.goto("/radio-button");
      await expect(
        page.locator("//h1[contains(text(),'Radio Button')]")
      ).toBeVisible();

      // Check "Yes" radio button
      const yesRadio = page.getByRole("radio", { name: "Yes" });
      await expect(yesRadio).not.toBeChecked();

      await page.locator('//label[@for="yesRadio"]').click();
      await expect(yesRadio).toBeChecked();
      await expect(
        page.locator("//span[@class='text-success' and text()='Yes']")
      ).toBeVisible();

      // Check "Impressive" radio button
      const impressiveRadio = page.locator('//input[@id="impressiveRadio"]');
      await expect(impressiveRadio).not.toBeChecked();
      await page.locator('//label[@for="impressiveRadio"]').click();

      await expect(impressiveRadio).toBeChecked();
      await expect(
        page.locator("//span[@class='text-success' and text()='Impressive']")
      ).toBeVisible();

      // check that "No" radio button is disabled
      const noRadio = page.locator('//input[@id="noRadio"]');
      await expect(noRadio).toBeDisabled();
      await expect(noRadio).toHaveClass(/disabled/);
    });
  }
);
