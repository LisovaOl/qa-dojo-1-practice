import { test, expect } from "@playwright/test";
/// Тест не закінчений. потрібно доопрацювання
test.describe("Параметризований тест", async () => {
  const testData = [
    {
      id: 1,
      firstName: "Olena",
      lastName: "Lisova",
      email: "test@com.ua",
      gender: "femail",
      mobileNumber: "1234567890",
      dateOfBirth: "",
      subjectsInput: "Test",
      hobbies: "Music",
      currentAddress: "Test",
      state: "Haryana",
      city: "Panipat",
    },
    {
      id: 2,
      firstName: "Olena",
      lastName: "Lisova",
      email: "test@com.ua",
      gender: "femail",
      mobileNumber: "1234567890",
    },
  ];
  test(`PS-001151 param ${testData[0].id}`, async ({ page }) => {
    await page.goto("/automation-practice-form");
    await page
      .getByRole("textbox", { name: "First Name" })
      .fill(testData[0].firstName);
    await page
      .getByRole("textbox", { name: "Last  Name" })
      .fill(testData[0].lastName);
    await page
      .getByRole("textbox", { name: "name@example.com" })
      .fill(testData[0].email);
    await page
      .locator("div")
      .filter({ hasText: /^Female$/ })
      .click();
    await page
      .getByRole("textbox", { name: "Mobile Number" })
      .fill(testData[0].mobileNumber);
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(
      page.getByText("Thanks for submitting the form")
    ).toBeVisible();
  });

  test(`PS-001151 param ${testData[1].id}`, async ({ page }) => {
    await page.goto("/automation-practice-form");
    await page
      .getByRole("textbox", { name: "First Name" })
      .fill(testData[1].firstName);
    await page
      .getByRole("textbox", { name: "Last  Name" })
      .fill(testData[1].lastName);
    await page
      .locator("div")
      .filter({ hasText: /^Female$/ })
      .click();
    await page
      .getByRole("textbox", { name: "Mobile Number" })
      .fill(testData[1].mobileNumber);
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(
      page.getByText("Thanks for submitting the form")
    ).toBeVisible();
  });
});
