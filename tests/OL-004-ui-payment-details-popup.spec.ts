import { test, expect } from "@playwright/test";

test("OL-004 UI-Verify Payment details popup elements and close action", async ({
  page,
}) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="checkout"]').click();

  await expect(page.getByText("Payment details×We will send")).toBeVisible();

  await expect(page.locator("h1")).toContainText("Payment details");
  await expect(page.getByRole("paragraph")).toContainText(
    "We will send you a payment link via email."
  );
  await expect(page.getByLabel("Payment form")).toContainText("Name");
  await expect(page.getByRole("textbox", { name: "Name" })).toBeVisible();
  await expect(page.getByLabel("Payment form")).toContainText("Email");
  await expect(page.getByRole("textbox", { name: "Email" })).toBeVisible();
  await expect(page.getByLabel("Promotion message")).toContainText(
    "I would like to receive order updates and promotional messages."
  );
  await expect(
    page.getByRole("checkbox", { name: "Promotion checkbox" })
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Submit" })).toBeVisible();
  await expect(page.locator("#submit-payment")).toContainText("Submit");
  await expect(page.getByRole("button", { name: "×" })).toBeVisible();
  await page.getByRole("button", { name: "×" }).click();
});
