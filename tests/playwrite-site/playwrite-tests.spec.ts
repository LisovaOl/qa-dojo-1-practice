import { test, expect } from "@playwright/test";

test("OL-008 Switch between dark and light", async ({ page }) => {
  const switchButton = page.getByRole("button", {
    name: "Switch between dark and light",
  });
  const htmlLocator = page.locator("html");

  await page.goto("");

  await expect(switchButton).toBeVisible();

  await expect(htmlLocator).toHaveAttribute("data-theme-choice", "system");

  await switchButton.click();
  await expect(htmlLocator).toHaveAttribute("data-theme-choice", "light");

  await switchButton.click();
  await expect(htmlLocator).toHaveAttribute("data-theme-choice", "dark");

  await switchButton.click();
  await expect(htmlLocator).toHaveAttribute("data-theme-choice", "system");
});
