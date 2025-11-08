import { test, expect, Page } from "@playwright/test";
import {
  clickOnCheckoutButton,
  clickOnLatte,
  clickOnSubmitButton,
  clickOnPaymentCloseButton,
  fillName,
  fillEmail,
} from "./functions";

test(
  "OL-002 Espresso_Macchiato and Cappuccino recipes should be visible ",
  { tag: "@smoke" },
  async ({ page }) => {
    const espressoCard = page.locator('[data-test="Espresso"]');
    const espressoMacchiatoCard = page.locator(
      '[data-test="Espresso_Macchiato"]'
    );
    const cappuccinoCard = page.locator('[data-test="Cappuccino"]');

    // Espresso card
    await page.goto("");
    await expect(espressoCard).toContainText("espresso");
    await expect(espressoCard).toBeVisible();

    // Espresso Macchiato card
    await expect(espressoMacchiatoCard).toBeVisible();
    await expect(espressoMacchiatoCard.getByText("espresso")).toBeVisible();
    await expect(espressoMacchiatoCard.getByText("milk foam")).toBeVisible();

    // Cappuccino card
    await expect(cappuccinoCard).toBeVisible();
    await expect(cappuccinoCard.getByText("espresso")).toBeVisible();
    await expect(cappuccinoCard.getByText("milk foam")).toBeVisible();
    await expect(cappuccinoCard.getByText("steamed milk")).toBeVisible();
  }
);

test(
  "OL-003 Order coffee flow with checkout and confirmation",
  { tag: "@smoke" },
  async ({ page }) => {
    const checkoutButton = page.locator('[data-test="checkout"]');
    const nameInput = page.getByRole("textbox", { name: "Name" });
    const emailInput = page.getByRole("textbox", { name: "Email" });
    const thankYouButton = page.getByRole("button", {
      name: "Thanks for your purchase.",
    });
    const userName = "Olena13";
    const userEmail = "olena@test.ua";

    await page.goto("");
    await clickOnLatte(page);
    await expect(checkoutButton).toContainText("Total: $16.00");
    await clickOnCheckoutButton(page);

    await fillName(page, userName);
    await expect(nameInput).toHaveValue(userName);
    await fillEmail(page, userEmail);
    await expect(emailInput).toHaveValue(userEmail);
    await clickOnSubmitButton(page);

    await expect(thankYouButton).toBeVisible();
    await expect(checkoutButton).toContainText("Total: $0.00");
    await page.goto("");
  }
);

test(
  "OL-004 UI-Verify Payment details popup elements and close action",
  { tag: "@smoke" },
  async ({ page }) => {
    // const checkoutButton = page.locator('[data-test="checkout"]');
    const paymentDetailsTitle = page.locator("h1");
    const paymentDetailsText = page.getByRole("paragraph");
    const paymentFormLabel = page.getByLabel("Payment form");
    const paymentPromotionText = page.getByLabel("Promotion message");
    const paymentPromotionCheckbox = page.getByRole("checkbox", {
      name: "Promotion checkbox",
    });
    const submitPaymentButton = page.getByRole("button", { name: "Submit" });
    const paymentCloseButton = page.getByRole("button", { name: "×" });

    await page.goto("");
    await clickOnCheckoutButton(page);

    await expect(paymentDetailsTitle).toContainText("Payment details");
    await expect(paymentDetailsText).toContainText(
      "We will send you a payment link via email."
    );
    await expect(paymentFormLabel).toContainText("Name");
    await expect(paymentFormLabel).toContainText("Email");
    await expect(paymentPromotionText).toContainText(
      "I would like to receive order updates and promotional messages."
    );
    await expect(paymentPromotionCheckbox).toBeVisible();
    await expect(submitPaymentButton).toBeVisible();
    await expect(paymentCloseButton).toBeVisible();
    await clickOnPaymentCloseButton(page);
  }
);
