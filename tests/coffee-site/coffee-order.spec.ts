import { test, expect, Page } from "@playwright/test";
import {
  clickOnAddCappuccinoButton,
  clickOnCappuccinoCard,
  clickOnCartPageLink,
  removeCappuccinoButton,
} from "./functions";

test.describe("ordering", { tag: ["@smoke", "@regression"] }, async () => {
  test("Add and remove Flat White", async ({ page }) => {
    const cartPageLabel = page.getByLabel("Cart page");
    const cappuccinoPriceText = page.getByText("$19.00 x");
    const checkoutSummary = page.locator('[data-test="checkout"]');

    await page.goto("");
    await clickOnCappuccinoCard(page);
    await expect(cartPageLabel).toContainText("cart (1)");
    await clickOnCartPageLink(page);
    await expect(cappuccinoPriceText).toContainText("1");
    await clickOnAddCappuccinoButton(page, 9);
    await expect(checkoutSummary).toContainText("Total: $190.00");
    await expect(cappuccinoPriceText).toContainText("10");

    await removeCappuccinoButton(page, 4);
    await expect(cappuccinoPriceText).toContainText("6");
  });
});

// export async function orderCoffee(page: Page, coffeeName: string) {
//   await page.locator(`[data-test="${coffeeName}"]`).click();
//   await page.locator(`[data-test="checkout"]`).click();
// }
