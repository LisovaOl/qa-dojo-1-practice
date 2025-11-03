import { test, expect, Page } from "@playwright/test";
import { time } from "console";
import {
  clickOnExpandAllButton,
  clickOnCommandsCheckbox,
  clickOnExcelFileCheckbox,
  clickOnHomeCheckbox,
  clickOnOfficeCheckbox,
} from "./pageActions";

test.describe(
  "Check Checkboxes with Xpath",
  { tag: ["@smoke", "@regression", "@ui", "@functional", "@positive"] },
  async () => {
    test("OL-130 Check Checkboxes with Xpath", async ({ page }) => {
      const checkboxTitle = page.locator("//h1[contains(text(),'Check Box')]");
      const homeCheckboxLocator = page.locator(
        '//label[@for="tree-node-home"]'
      );
      const officeCheckboxLocator = page.locator(
        '//label[@for="tree-node-office"]'
      );
      const publicCheckboxLocator = page.locator(
        '//label[@for="tree-node-public"]'
      );
      const excelFileCheckboxLocator = page.locator(
        '//label[@for="tree-node-excelFile"]'
      );
      const commandsCheckboxLocator = page.locator(
        '//label[@for="tree-node-commands"]'
      );

      // Start Test
      await page.goto("/checkbox");
      await expect(checkboxTitle).toBeVisible();

      // Expand All Button Click
      await clickOnExpandAllButton(page);

      // Check Home Checkbox
      await expect(homeCheckboxLocator).not.toBeChecked();
      await clickOnHomeCheckbox(page);
      await expect(homeCheckboxLocator).toBeChecked();

      // Check Commands Checkbox

      await expect(commandsCheckboxLocator).toBeChecked();
      await clickOnCommandsCheckbox(page);
      await expect(commandsCheckboxLocator).not.toBeChecked();

      // Check Office Checkbox
      await expect(officeCheckboxLocator).toBeChecked();
      await clickOnOfficeCheckbox(page);
      await expect(officeCheckboxLocator).not.toBeChecked();
      await expect(publicCheckboxLocator).not.toBeChecked();

      // Check excelFile Checkbox
      await expect(excelFileCheckboxLocator).toBeChecked();
      await clickOnExcelFileCheckbox(page);
      await expect(excelFileCheckboxLocator).not.toBeChecked();
    });
  }
);
