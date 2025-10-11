import { test, expect } from "@playwright/test";

test.describe("ordering", { tag: "@smoke" }, async () => {
  test("Add and remove Flat White", async ({ page, baseURL }) => {
    await page.goto(baseURL);
    await page.locator('[aria-label="Cappuccino"]').click();
    await expect(page.getByLabel("Cart page")).toContainText("cart (1)");
    await page.getByRole("link", { name: "Cart page" }).click();
    await expect(page.getByText("$19.00 x")).toContainText("1");
    await page
      .getByRole("button", { name: "Add one Cappuccino" })
      .click({ clickCount: 9 });
    await expect(page.locator('[data-test="checkout"]')).toContainText(
      "Total: $190.00"
    );
    await expect(page.getByText("$19.00 x")).toContainText("10");

    await page
      .getByRole("button", { name: "Remove one Cappuccino" })
      .click({ clickCount: 5 });
    await expect(page.getByText("$19.00 x")).toContainText("5");
  });
});
