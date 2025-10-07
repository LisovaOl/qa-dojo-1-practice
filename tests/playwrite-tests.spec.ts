import { test, expect } from "@playwright/test";

test("OL-007 Should navigate to Docs and verify key sections are visible", async ({
  page,
}) => {
  await page.goto("https://playwright.dev/");
  await expect(page.getByRole("link", { name: "Docs" })).toBeVisible();

  await page.getByRole("link", { name: "Docs" }).click();
  await expect(page.locator("h1")).toContainText("Installation");
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
  await expect(page.locator("#introduction")).toContainText("Introduction");
  await expect(
    page.getByRole("heading", { name: "IntroductionDirect link to" })
  ).toBeVisible();
  await expect(page.locator("#whats-next")).toContainText("What's next");
  await expect(
    page.getByRole("heading", { name: "What's nextDirect link to" })
  ).toBeVisible();
  await expect(page.locator("#system-requirements")).toContainText(
    "System requirements"
  );
  await expect(
    page.getByRole("heading", { name: "System requirementsDirect" })
  ).toBeVisible();
});
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
