import { test, expect } from "@playwright/test";

test("OL-003 Order coffee flow with checkout and confirmation", async ({
  page,
}) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Cafe_Latte"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $16.00"
  );
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole("textbox", { name: "Name" }).fill("Olena");
  await expect(page.getByRole("textbox", { name: "Name" })).toHaveValue(
    "Olena"
  );
  await page.getByRole("textbox", { name: "Email" }).fill("olena@test.ua");
  await expect(page.getByRole("textbox", { name: "Email" })).toHaveValue(
    "olena@test.ua"
  );
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByRole("button", { name: "Thanks for your purchase." })
  ).toBeVisible();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $0.00"
  );
  await page.goto("https://coffee-cart.app/");
});
