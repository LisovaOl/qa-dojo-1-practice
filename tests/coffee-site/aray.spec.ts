import { test, expect, Page } from "@playwright/test";
import { beforeEach } from "node:test";

test.describe("Array", async () => {
  test("map - Робота із масивами", async ({ page }) => {
    //map() — витягнути тексти з масиву локаторів
    await page.goto("");
    const listOfCoffee = await page
      .locator('//*[@id="app"]/div[2]/ul')
      .allTextContents(); // allTextContents() повертає масив текстів — далі можна трансформувати через map.
    console.log(listOfCoffee);
    const splitCoffee = listOfCoffee.map((text) => text.split(" "));
    console.log(splitCoffee);
  });
  test("find - Робота із масивами", async ({ page }) => {
    //map() — витягнути тексти з масиву локаторів
    await page.goto("");
    const listOfCoffee = await page
      .locator('//*[@id="app"]/div[2]/ul')
      .allTextContents(); // allTextContents() повертає масив текстів — далі можна трансформувати через map.
    //console.log(listOfCoffee);
    //const splitCoffee = listOfCoffee.map((text) => text.split(" "));
    const splitCoffee = listOfCoffee.flatMap((text) => text.split(/\s+/));

    //console.log(Array.isArray(splitCoffee));

    const match = splitCoffee.includes("Panna");
    console.log("Find:" + match); // true

    const match2 = splitCoffee.indexOf("Panna");
    console.log("Find:" + match2); // 21

    const findCoffee = splitCoffee.find((el) => el === "Panna");
    console.log("Find:" + findCoffee); // Panna
  });

  test("Робота із об'єктами", async ({ page }) => {
    await page.goto("");

    const espresso = await page.evaluate(() => {
      return {
        name: document.querySelector("h4")?.textContent,
        price: parseFloat(
          document.querySelector("#coffee-price")?.textContent || "0"
        ),
        recipe: [
          {
            name: "espresso",
            quantity: 30,
          },
        ],
      };
    });
    console.log(espresso);
  });
  test("Розпарсити запит", async ({ page }) => {
    //await page.goto("");
    const response = await page.request.get(
      "https://coffee-cart.app/list.json"
    );
    const coffees = await response.json();
    //console.log(coffees);
    //console.log(coffees[2]);
    const getCAppuccino = coffees[2];
    let listOfCoffeeNames = [];
    for (const elCoffee of coffees) {
      //console.log(coffees[elCoffee]);
      listOfCoffeeNames.push(elCoffee.name);
      //console.log(elCoffee.name);
      //console.log(elCoffee.price);
    }
    console.log(listOfCoffeeNames);
  });
});
