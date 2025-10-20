import { test, expect } from "@playwright/test";

test.describe(
  "Check form with Xpath",
  {
    tag: ["@smoke", "@regression", "@functional"],
  },
  async () => {
    test("OL-120 Check form with Xpath", async ({ page }) => {
      const textBoxTitle = page.locator("//h1[contains(text(),'Text Box')]");
      const fullNameField = page.locator(
        '//*[@id="userName" and @placeholder="Full Name"]'
      );
      const emailField = page.locator(
        '//*[@id="userEmail" and @placeholder="name@example.com"]'
      );
      const currentAddressField = page.locator(
        "//textarea[@id!='permanentAddress']"
      );
      const permanentAddressField = page.locator(
        "//*[@id='userForm']//*[@id='permanentAddress']"
      );
      const submitButton = page.locator("//form//button");

      await page.goto("/text-box");
      await expect(textBoxTitle).toBeVisible();
      await expect(fullNameField).toBeVisible();
      await expect(emailField).toBeVisible();

      // Current Address - should be found
      await expect(currentAddressField).toBeVisible();

      // Check Permanent Address properties
      await expect(permanentAddressField).toBeVisible();
      await expect(permanentAddressField).toBeEmpty();

      // Check Submit Button properties
      await expect(submitButton).toHaveAccessibleName("Submit");
      await expect(submitButton).toHaveCSS(
        "background-color",
        "rgb(0, 123, 255)"
      );
      await expect(submitButton).toHaveCSS("color", "rgb(255, 255, 255)");
    });
  }
);
