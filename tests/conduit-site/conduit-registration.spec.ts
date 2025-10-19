import { test, expect } from "@playwright/test";

test.describe("Registration ", { tag: "@smoke" }, async () => {
  test("OL-13 Should show validation errors for empty Username and Email", async ({
    page,
  }) => {
    await page.goto("/register");
    await expect(page.getByRole("textbox", { name: "Username" })).toBeEmpty();
    await expect(page.getByRole("textbox", { name: "Email" })).toBeEmpty();
    await expect(page.getByRole("textbox", { name: "Password" })).toBeEmpty();

    await page.getByRole("button", { name: "Sign up" }).click();
    await expect(page.getByText("username can't be blank")).toBeVisible();
    await expect(page.getByText("email can't be blank")).toBeVisible();
    await page.getByRole("textbox", { name: "Username" }).click();
    await page.getByRole("textbox", { name: "Username" }).fill("olena2");
    await page.getByRole("button", { name: "Sign up" }).click();
    await expect(page.getByText("username can't be blank")).toBeHidden();
    await expect(page.getByText("email can't be blank")).toBeVisible();

    await page.getByRole("textbox", { name: "Email" }).fill("test@test.com");
    await page.getByRole("button", { name: "Sign up" }).click();
    await expect(page.getByText("username can't be blank")).toBeHidden();
  });

  test(
    "OL-14 Should show validation error for invalid Email",
    { tag: "@smoke" },
    async ({ page }) => {
      await page.goto("/register");
      await page.getByRole("textbox", { name: "Username" }).fill("999");
      await page.getByRole("textbox", { name: "Email" }).fill("test");

      await page.getByRole("button", { name: "Sign up" }).click();
      await expect(page.getByText("email is invalid")).toBeVisible();
      await page.getByRole("textbox", { name: "Email" }).fill("test@");

      await page.getByRole("button", { name: "Sign up" }).click();
      await expect(page.getByText("email is invalid")).toBeVisible();
      await page.getByRole("textbox", { name: "Email" }).fill("test@tt");

      await page.getByRole("button", { name: "Sign up" }).click();
      await expect(page.getByText("email is invalid")).toBeVisible();

      await page.getByRole("textbox", { name: "Email" }).fill("test@tt.com");

      await page.getByRole("button", { name: "Sign up" }).click();
    }
  );
});
