import { test, expect } from "@playwright/test";

test.describe("Login", { tag: "@smoke" }, async () => {
  test("OL-10 UI. Sign up button - color style", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
    const initialColor = await page
      .locator(".btn-primary")
      .evaluate((el) => window.getComputedStyle(el).backgroundColor);
    expect(initialColor).toBe("rgb(92, 184, 92)"); // #5CB85C
    await page.locator(".btn-primary").hover();
    const hoverColor = await page
      .locator(".btn-primary")
      .evaluate((el) => window.getComputedStyle(el).backgroundColor);
    expect(hoverColor).toBe("rgb(68, 157, 68)"); // #449d44
  });

  test("OL-11 Sign in. Invalid email or password", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();

    await page.getByRole("textbox", { name: "Email" }).fill("test@test.com");
    await page.getByRole("button", { name: "Sign in" }).click();

    await page.getByRole("textbox", { name: "Password" }).fill("111111");
    await page.getByRole("button", { name: "Sign in" }).click();

    await expect(page.getByText("email or password is invalid")).toBeVisible();
  });

  test("OL-12 Sign in. Blank fields", async ({ page }) => {
    await page.goto("/login");

    await expect(page.getByRole("textbox", { name: "Email" })).toBeEmpty();
    await expect(page.getByRole("textbox", { name: "Password" })).toBeEmpty();
    await page.getByRole("button", { name: "Sign in" }).click();

    await expect(page.getByText("email can't be blank")).toBeVisible(); //toBeHidden
    await page.getByRole("textbox", { name: "Email" }).fill("test@test.com");
    await page.getByRole("button", { name: "Sign in" }).click();

    await expect(page.getByText("password can't be blank")).toBeVisible(); //toBeHidden

    await page.getByRole("textbox", { name: "Password" }).fill("11111111");

    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page.getByText("password can't be blank")).toBeHidden();
    await expect(page.getByText("email or password is invalid")).toBeVisible(); //toBeHidden
  });
});
