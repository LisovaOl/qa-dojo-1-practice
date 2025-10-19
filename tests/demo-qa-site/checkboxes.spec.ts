import { test, expect } from "@playwright/test";
import { time } from "console";

test.describe(
  "Check Checkboxes with Xpath",
  { tag: ["@smoke", "@regression", "@ui", "@functional", "@positive"] },
  async () => {
    test("OL-130 Check Checkboxes with Xpath", async ({ page }) => {
      await page.goto("/checkbox");
      await expect(
        page.locator("//h1[contains(text(),'Check Box')]")
      ).toBeVisible();

      await page.locator("//button[@aria-label='Expand all']").click();

      // Check Home Checkbox
      const homeCheckbox = page.locator('//label[@for="tree-node-home"]');
      await expect(homeCheckbox).not.toBeChecked();
      await homeCheckbox.click();
      await expect(homeCheckbox).toBeChecked();

      // Check Commands Checkbox
      const commandsCheckbox = page.locator(
        '//label[@for="tree-node-commands"]'
      );
      await expect(commandsCheckbox).toBeChecked();
      await commandsCheckbox.click();
      await expect(commandsCheckbox).not.toBeChecked();

      // Check Office Checkbox
      const officeCheckbox = page.locator('//label[@for="tree-node-office"]');
      await expect(officeCheckbox).toBeChecked();
      await officeCheckbox.click();
      await expect(officeCheckbox).not.toBeChecked();
      await expect(
        page.locator("//label[@for='tree-node-public']")
      ).not.toBeChecked();

      // Check excelFile Checkbox
      const excelFileCheckbox = page.locator(
        '//label[@for="tree-node-excelFile"]'
      );
      await expect(excelFileCheckbox).toBeChecked();
      await excelFileCheckbox.click();
      await expect(excelFileCheckbox).not.toBeChecked();
    });
  }
);
