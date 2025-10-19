import { test, expect } from "@playwright/test";

test.describe("ordering", { tag: ["@smoke", "@regression"] }, async () => {
  test("Add and remove Flat White", async ({ page }) => {
    const cappuccinoCard = page.locator('[aria-label="Cappuccino"]');
    const cartPageLabel = page.getByLabel("Cart page");
    const cartPageLink = page.getByRole("link", { name: "Cart page" });
    const cappuccinoPriceText = page.getByText("$19.00 x");
    const addCappuccinoButton = page.getByRole("button", {
      name: "Add one Cappuccino",
    });
    const removeCappuccinoButton = page.getByRole("button", {
      name: "Remove one Cappuccino",
    });
    const checkoutSummary = page.locator('[data-test="checkout"]');

    await page.goto("");
    await cappuccinoCard.click();
    await expect(cartPageLabel).toContainText("cart (1)");
    await cartPageLink.click();
    await expect(cappuccinoPriceText).toContainText("1");
    await addCappuccinoButton.click({ clickCount: 9 });
    await expect(checkoutSummary).toContainText("Total: $190.00");
    await expect(cappuccinoPriceText).toContainText("10");

    await removeCappuccinoButton.click({ clickCount: 4 });
    await expect(cappuccinoPriceText).toContainText("6");
  });
});
