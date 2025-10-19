import { test, expect } from "@playwright/test";

test(
  "OL-001 Cart flow: Add and remove Flat White",
  { tag: "@smoke" },
  async ({ page }) => {
    await page.goto("");
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
  }
);

test(
  "OL-002 Espresso_Macchiato and Cappuccino recipes should be visible ",
  { tag: "@smoke" },
  async ({ page }) => {
    await page.goto("");
    await expect(page.locator("[aria-label=Espresso]")).toContainText(
      "espresso"
    );
    await expect(page.locator('[data-test="Espresso"]')).toBeVisible();

    await expect(
      page.locator('[data-test="Espresso_Macchiato"]')
    ).toBeVisible();

    await expect(
      page.locator('[data-test="Espresso_Macchiato"]').getByText("espresso")
    ).toBeVisible();
    await expect(
      page.locator('[data-test="Espresso_Macchiato"]').getByText("milk foam")
    ).toBeVisible();

    await expect(page.locator('[data-test="Cappuccino"]')).toBeVisible();

    await expect(
      page.locator('[data-test="Cappuccino"]').getByText("espresso")
    ).toBeVisible();
    await expect(
      page.locator('[data-test="Cappuccino"]').getByText("milk foam")
    ).toBeVisible();
    await expect(
      page.locator('[data-test="Cappuccino"]').getByText("steamed milk")
    ).toBeVisible();
  }
);

test(
  "OL-003 Order coffee flow with checkout and confirmation",
  { tag: "@smoke" },
  async ({ page }) => {
    await page.goto("");
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
    await page.goto("");
  }
);

test(
  "OL-004 UI-Verify Payment details popup elements and close action",
  { tag: "@smoke" },
  async ({ page }) => {
    await page.goto("");
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
  }
);

test(
  "OL-005 Add Cappuccino to cart, update quantity, verify totals",
  { tag: "@smoke" },
  async ({ page }) => {
    await page.goto("");
    await page.locator('[data-test="Cappuccino"]').click();
    await expect(page.getByLabel("Cart page")).toContainText("cart (1)");
    await page.getByRole("link", { name: "Cart page" }).click();
    await expect(page.getByText("Item")).toBeVisible();
    await expect(page.getByText("Unit")).toBeVisible();
    await expect(page.getByText("Total", { exact: true })).toBeVisible();
    await expect(page.locator("#app")).toContainText("Cappuccino");
    await expect(page.locator("#app")).toContainText("$19.00 x 1");
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
  }
);
