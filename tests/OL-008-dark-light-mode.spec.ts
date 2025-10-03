import { test, expect } from "@playwright/test";

test("OL-008 Switch between dark and light", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(
    page.getByRole("button", { name: "Switch between dark and light" })
  ).toBeVisible();

  let locator = page.locator("html");
  await expect(locator).toHaveAttribute("data-theme-choice", "system");

  await page
    .getByRole("button", { name: "Switch between dark and light" })
    .click();
  await expect(locator).toHaveAttribute("data-theme-choice", "light");

  await page
    .getByRole("button", { name: "Switch between dark and light" })
    .click();
  await expect(locator).toHaveAttribute("data-theme-choice", "dark");

  await page
    .getByRole("button", { name: "Switch between dark and light" })
    .click();
  await expect(locator).toHaveAttribute("data-theme-choice", "system");
});
