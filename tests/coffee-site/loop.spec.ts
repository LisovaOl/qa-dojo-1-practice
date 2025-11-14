import { test, expect, Page } from "@playwright/test";
import { beforeEach } from "node:test";

test.describe("Loop", async () => {
  test("Перебір назв списку", async ({ page }) => {
    await page.goto("");

    const coffeeItems = await page.$$("ul li h4"); // знайти всі h4

    for (const item of coffeeItems) {
      const name = await item.textContent();
      console.log(name.trim());
    }

    const clickOnCoffee = await page.$$(".cup");

    for (const coffee of clickOnCoffee) {
      const coffeeClick = await coffee.click();
    }
  });
  test("Дістати кількість елементів, перетворити на стрінг, клікнути по кожному елементу, перевірити чи є ця кілкість в кошикуКлік назв списку", async ({
    page,
  }) => {
    await page.goto("");

    // await page.$$(".cup")- бере все елементи із класом .cup і поміщає його в масив
    const coffeeCups = await page.$$(".cup");
    //" визначаємо Кількість елементів:";
    const coffeeLength = coffeeCups.length;
    // переводимо цю кількість в стрінгу
    const coffeeCountStr = coffeeLength.toString();
    console.log(coffeeCountStr);

    for (const coffee of coffeeCups) {
      await coffee.click();
    }
    await expect(page.getByLabel("Cart page")).toContainText(coffeeCountStr);
  });

  test("перебрати всі кави і додати в кошик лише одну по назві", async ({
    page,
  }) => {
    await page.goto("");
    const coffeeCups = await page.$$("ul li h4"); // знайти всі h4
    //console.log(coffeeCups);
    const coffeeName = "Mocha ";
    //let found = false;

    for (const coffee of coffeeCups) {
      const text = await coffee.textContent();
      //console.log(text);

      if ((text ?? "").includes(coffeeName.trim())) {
        console.log("Знайшли:", coffeeName);
        break;
      } else console.log("НЕ Знайшли:", coffeeName);
    }
  });
});
