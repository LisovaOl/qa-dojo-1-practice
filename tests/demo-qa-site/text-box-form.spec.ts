import { test, expect } from "@playwright/test";

test.describe(
  "Check form with Xpath",
  {
    tag: [
      "@smoke",
      "@regression",
      "@ui",
      "@functional",
      "@positive",
      "@negative",
    ],
  },
  async () => {
    test("OL-120 Check form with Xpath", async ({ page }) => {
      await page.goto("/text-box");
      await expect(
        page.locator("//h1[contains(text(),'Text Box')]")
      ).toBeVisible();

      await expect(
        page.locator('//*[@id="userName" and @placeholder="Full Name"]')
      ).toBeVisible();

      await expect(
        page.locator('//*[@id="userEmail" and @placeholder="name@example.com"]')
      ).toBeVisible();

      // Current Address - should be found
      await expect(
        page.locator("//textarea[@id!='permanentAddress']")
      ).toBeVisible();

      // Check Permanent Address properties
      const addressField = page.locator(
        "//*[@id='userForm']//*[@id='permanentAddress']"
      );
      await expect(addressField).toBeVisible();
      await expect(addressField).toBeEmpty();

      // Check Submit Button properties
      const submitButton = page.locator("//form//button");
      await expect(submitButton).toHaveAccessibleName("Submit");
      await expect(submitButton).toHaveCSS(
        "background-color",
        "rgb(0, 123, 255)"
      );
      await expect(submitButton).toHaveCSS("color", "rgb(255, 255, 255)");
    });
  }
);
