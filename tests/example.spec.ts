// import { test, expect } from "@playwright/test";

// test("has title", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" })
//   ).toBeVisible();
// });

// // Add ID for the test

// test("OL-00001. Order Espresso should be successful", async ({ page }) => {
//   await page.goto("https://coffee-cart.app/");
//   await page.locator('[data-test="Espresso"]').click();
//   await page.locator('[data-test="checkout"]').click();

//   await page.getByRole("textbox", { name: "Name" }).fill("Olena");
//   await page.getByRole("textbox", { name: "Email" }).fill("olena@test.ua");

//   await page.getByRole("checkbox", { name: "Promotion checkbox" }).check();
//   await page.getByRole("button", { name: "Submit" }).click();

//   await expect(
//     page.getByRole("button", { name: "Thanks for your purchase." })
//   ).toBeVisible();
// });
