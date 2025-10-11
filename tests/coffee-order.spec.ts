import { test, expect } from "@playwright/test";

test.describe("ordering", { tag: "@smoke" }, async () => {
  test("Add and remove Flat White", async ({ page, baseURL }) => {
    await page.goto(baseURL);
    await page.locator('[data-test="Cappuccino"]').click();
    await expect(page.getByLabel("Cart page")).toContainText("cart (1)");
    await page.getByRole("link", { name: "Cart page" }).click();
    await expect(page.locator("#app")).toContainText("$19.00 x 1");
    await page
      .getByRole("button", { name: "Add one Cappuccino" })
      .click({ clickCount: 9 });
    await expect(page.locator('[data-test="checkout"]')).toContainText(
      "Total: $190.00"
    );
    await expect(page.locator("#app")).toContainText("$19.00 x 10");

    await page
      .getByRole("button", { name: "Remove one Cappuccino" })
      .click({ clickCount: 5 });
    await expect(page.locator("#app")).toContainText("$19.00 x 5");
  });
});
