import { test, expect } from "@playwright/test";

test("OL-002 Coffee menu items are visible with correct prices", async ({
  page,
}) => {
  await page.goto("https://coffee-cart.app/");
  await expect(page.locator("#app")).toContainText("Espresso $10.00");
  await expect(page.locator('[data-test="Espresso"]')).toBeVisible();
  await expect(page.locator("#app")).toContainText("Espresso Macchiato $12.00");
  await expect(page.locator('[data-test="Espresso_Macchiato"]')).toBeVisible();
  await expect(page.locator("#app")).toContainText("Cappuccino $19.00");
  await expect(page.locator('[data-test="Cappuccino"]')).toBeVisible();
  await expect(page.locator("#app")).toContainText("Mocha $8.00");
  await expect(page.locator('[data-test="Mocha"]')).toBeVisible();
  await expect(page.locator("#app")).toContainText("Flat White $18.00");
  await expect(page.locator('[data-test="Flat_White"]')).toBeVisible();
  await expect(page.locator("#app")).toContainText("Americano $7.00");
  await expect(page.locator('[data-test="Americano"]')).toBeVisible();
  await expect(page.locator("#app")).toContainText("Cafe Latte $16.00");
  await expect(page.locator('[data-test="Cafe_Latte"]')).toBeVisible();
  await expect(page.locator("#app")).toContainText("Espresso Con Panna $14.00");
  await expect(page.locator('[data-test="Espresso_Con Panna"]')).toBeVisible();
  await expect(page.locator("#app")).toContainText("Cafe Breve $15.00");
  await expect(page.locator('[data-test="Cafe_Breve"]')).toBeVisible();
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $0.00"
  );
});
