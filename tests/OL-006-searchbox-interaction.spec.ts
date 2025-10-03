import { test, expect } from "@playwright/test";

test("OL-006 Should open search, enter query, and verify navigation", async ({
  page,
}) => {
  await page.goto("https://playwright.dev/");
  await expect(
    page.getByRole("button", { name: "Search" })
  ).toBeVisible();
  await expect(page.getByLabel("Search")).toContainText("Search");

  await page.getByRole("button", { name: "Search" }).click();
  await expect(page.getByRole("searchbox", { name: "Search" })).toBeVisible();
  await expect(page.locator("body")).toContainText("No recent searches");

  await page.getByRole("searchbox", { name: "Search" }).click();
  await page.getByRole("searchbox", { name: "Search" }).fill("locators");
  await expect(page.getByRole("searchbox", { name: "Search" })).toHaveValue(
    "locators"
  );
  await expect(
    page.getByRole("link", { name: "Locators", exact: true })
  ).toBeVisible();
  await expect(page.locator("#docsearch-hits0-item-0")).toContainText(
    "Locators"
  );

  await page.getByRole("link", { name: "Locators", exact: true }).click();
  await expect(page.locator("h1")).toContainText("Locators");
});
