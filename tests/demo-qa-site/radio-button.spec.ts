import { test, expect } from "@playwright/test";
test.describe(
  "Check Radio Buttons with Xpath",
  { tag: ["@smoke", "@regression", "@ui", "@functional", "@positive"] },
  async () => {
    test("OL-131 Check Radio Buttons with Xpath", async ({ page }) => {
      const radioButtonTitle = page.locator(
        "//h1[contains(text(),'Radio Button')]"
      );
      const yesRadioMarker = page.getByRole("radio", { name: "Yes" });
      const yesLabel = page.locator('//label[@for="yesRadio"]');
      const impressiveRadioMarker = page.locator(
        '//input[@id="impressiveRadio"]'
      );
      const impressiveLabel = page.locator('//label[@for="impressiveRadio"]');
      const noRadio = page.locator('//input[@id="noRadio"]');

      await page.goto("/radio-button");
      await expect(radioButtonTitle).toBeVisible();

      // Check "Yes" radio button
      await expect(yesRadioMarker).not.toBeChecked();

      await yesLabel.click();
      await expect(yesRadioMarker).toBeChecked();
      await expect(
        page.locator("//span[@class='text-success' and text()='Yes']")
      ).toBeVisible();

      // Check "Impressive" radio button
      await expect(impressiveRadioMarker).not.toBeChecked();
      await impressiveLabel.click();

      await expect(impressiveRadioMarker).toBeChecked();
      await expect(
        page.locator("//span[@class='text-success' and text()='Impressive']")
      ).toBeVisible();

      // check that "No" radio button is disabled
      await expect(noRadio).toBeDisabled();
      await expect(noRadio).toHaveClass(/disabled/);
    });
  }
);
