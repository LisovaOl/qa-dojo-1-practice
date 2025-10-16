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

      await expect(page.locator("//span[text()='Home']")).toBeVisible();
      await page.locator("//button[@aria-label='Expand all']").click();

      // Клік на чекбокс Home
      await page
        .locator("//label[@for='tree-node-home']//span[@class='rct-checkbox']")
        .click();

      // await expect(
      //   page.locator(
      //     "locator('label').filter({ hasText: 'Excel File.doc' }).locator('path').first()"
      //   )
      // ).toHaveClass("rct-icon-check");
    });
  }
);
