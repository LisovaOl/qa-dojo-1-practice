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
