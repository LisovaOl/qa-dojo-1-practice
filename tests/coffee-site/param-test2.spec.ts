import { test, expect, Page } from "@playwright/test";

test.describe("Параметризований тест", async () => {
  const testData = [
    {
      id: 1,
      coffee: ["Espresso"],
      orderInfo: {
        name: "Olena",
        email: "test@com.ua",
      },
      expect: async (page: Page) =>
        await expect(page.locator('[class="snackbar success"]')).toBeVisible({
          visible: true,
        }),
    },
    {
      id: 2,
      coffee: ["Cappuccino", "Mocha"],
      orderInfo: {
        email: "test@com.ua",
      },
      expect: async (page: Page) =>
        await expect(page.locator('[class="snackbar success"]')).toBeVisible({
          visible: false,
        }),
    },
  ];
  for (const data of testData) {
    test(`PS-001151 param id=${data.id}`, async ({ page }) => {
      await page.goto("https://coffee-cart.app/");

      // for (const drink in data.coffee) {
      //   await page.locator(`[data-test="${drink}]`).click();
      // }

      await page.locator('[data-test="checkout"]').click();

      for (const key in data.orderInfo) {
        await page
          .getByRole("textbox", { name: key })
          .fill(data.orderInfo[key]);
      }

      await page.getByRole("checkbox", { name: "Promotion checkbox" }).check();
      await page.getByRole("button", { name: "Submit" }).click();

      await data.expect(page);
    });
  }
  //   const coffee = [
  //   "Espresso",
  //   "Espresso_Macchiato",
  //   "Cappuccino",
  //   "Mocha",
  //   "Flat_White",
  //   "Americano",
  //   "Cafe_Latte",
  // ];

  //   function getLocators(page: Page) {
  //   return {
  //     drinks: (drink: string) => page.locator(`[data-test="${drink}"]`),
  //     nameInput: () => page.getByRole("textbox", { name: "Name" }),
  //     emailInput: () => page.getByRole("textbox", { name: "Email" }),
  //     promotionCheckbox: () =>
  //       page.getByRole("checkbox", { name: "Promotion checkbox" }),
  //     submitButton: () => page.getByRole("button", { name: "Submit" }),
  //     checkoutButton: () => page.locator('[data-test="checkout"]'),
  //   };
  // }

  // test(`PS-001151 param`, async ({ page }) => {
  //   const locators = getLocators(page);

  //   await page.goto("https://coffee-cart.app/");

  //   await locators.drinks("Espresso").click();
  //   await locators.checkoutButton().click();

  //   await locators.nameInput().fill("Pavlo");
  //   await locators.emailInput().fill("Pavlo@gm.com");

  //   await locators.promotionCheckbox().click();
  //   await locators.submitButton().click();
  // });
});
