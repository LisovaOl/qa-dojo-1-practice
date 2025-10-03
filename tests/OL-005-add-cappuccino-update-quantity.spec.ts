import { test, expect } from "@playwright/test";

test("OL-005 Add Cappuccino to cart, update quantity, verify totals", async ({
  page,
}) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Cappuccino"]').click();
  await expect(page.getByLabel("Cart page")).toContainText("cart (1)");
  await page.getByRole("link", { name: "Cart page" }).click();
  await expect(page.getByText("Item")).toBeVisible();
  await expect(page.getByText("Unit")).toBeVisible();
  await expect(page.getByText("Total", { exact: true })).toBeVisible();
  await expect(page.locator("#app")).toContainText("Cappuccino");
  await expect(page.locator("#app")).toContainText("$19.00 x 1");
  await expect(page.locator("#app")).toContainText("$19.00");
  await page.getByRole("button", { name: "Add one Cappuccino" }).click();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $38.00"
  );
  await expect(page.locator("#app")).toContainText("$19.00 x 2");
  await expect(page.locator("#app")).toContainText("$38.00");
  await page.getByRole("button", { name: "Remove one Cappuccino" }).click();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $19.00"
  );
  await expect(page.locator("#app")).toContainText("$19.00 x 1");
  await expect(page.locator("#app")).toContainText("$19.00");
  await page.locator("html").click();
});
