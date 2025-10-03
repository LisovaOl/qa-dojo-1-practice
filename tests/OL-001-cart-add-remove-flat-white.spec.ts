import { test, expect } from "@playwright/test";

test("OL-001 Cart flow: Add and remove Flat White", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await expect(
    page.getByRole("heading", { name: "Flat White $" })
  ).toBeVisible();
  await expect(page.locator("#app")).toContainText("Flat White $18.00");
  await expect(page.locator('[data-test="Flat_White"]')).toBeVisible();
  await page.locator('[data-test="Flat_White"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $18.00"
  );
  await expect(page.getByLabel("Cart page")).toContainText("cart (1)");
  await page.getByRole("link", { name: "Cart page" }).click();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $18.00"
  );
  await expect(page.locator("#app")).toContainText("Flat White");
  await page.getByRole("button", { name: "Remove all Flat White" }).click();
  await expect(page.getByRole("paragraph")).toContainText(
    "No coffee, go add some."
  );
  await expect(page.getByLabel("Cart page")).toContainText("cart (0)");
});
