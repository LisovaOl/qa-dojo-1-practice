import { Page } from "@playwright/test";

export async function clickOnLatte(page: Page) {
  await page.locator('[data-test="Cafe_Latte"]').click();
}
export async function clickOnCheckoutButton(page: Page) {
  await page.locator('[data-test="checkout"]').click();
}
export async function fillName(page: Page, name: string) {
  await page.getByRole("textbox", { name: "Name" }).fill(name);
}
export async function fillEmail(page: Page, email: string) {
  await page.getByRole("textbox", { name: "Email" }).fill(email);
}
export async function clickOnSubmitButton(page: Page) {
  await page.getByRole("button", { name: "Submit" }).click();
}
export async function clickOnPaymentCloseButton(page: Page) {
  await page.getByRole("button", { name: "×" }).click();
}

export async function clickOnCappuccinoCard(page: Page) {
  await page.locator('[aria-label="Cappuccino"]').click();
}
export async function clickOnCartPageLink(page: Page) {
  await page.getByRole("link", { name: "Cart page" }).click();
}

export async function clickOnAddCappuccinoButton(page: Page, count: number) {
  await page
    .getByRole("button", {
      name: "Add one Cappuccino",
    })
    .click({ clickCount: count });
}
export async function removeCappuccinoButton(page: Page, count: number) {
  await page
    .getByRole("button", {
      name: "Remove one Cappuccino",
    })
    .click({ clickCount: count });
}
