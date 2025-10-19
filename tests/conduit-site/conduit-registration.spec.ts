import { test, expect } from "@playwright/test";

test.describe("Registration ", { tag: "@smoke" }, async () => {
  test("OL-13 Should show validation errors for empty Username and Email", async ({
    page,
  }) => {
    const usernameInput = page.getByRole("textbox", { name: "Username" });
    const emailInput = page.getByRole("textbox", { name: "Email" });
    const passwordInput = page.getByRole("textbox", { name: "Password" });
    const signUpButton = page.getByRole("button", { name: "Sign up" });
    const errorMessageEmail = page.getByText("email can't be blank");
    const errorMessageUsername = page.getByText("username can't be blank");

    await page.goto("/register");
    await expect(usernameInput).toBeEmpty();
    await expect(emailInput).toBeEmpty();
    await expect(passwordInput).toBeEmpty();

    await signUpButton.click();
    await expect(errorMessageUsername).toBeVisible();
    await expect(errorMessageEmail).toBeVisible();
    await usernameInput.click();
    await usernameInput.fill("olena2");
    await signUpButton.click();
    await expect(errorMessageUsername).toBeHidden();
    await expect(errorMessageEmail).toBeVisible();

    await emailInput.fill("test@test.com");
    await signUpButton.click();
    await expect(errorMessageUsername).toBeHidden();
  });

  test(
    "OL-14 Should show validation error for invalid Email",
    { tag: "@smoke" },
    async ({ page }) => {
      const usernameInput = page.getByRole("textbox", { name: "Username" });
      const emailInput = page.getByRole("textbox", { name: "Email" });
      const signUpButton = page.getByRole("button", { name: "Sign up" });
      const errorMessageEmail = page.getByText("email is invalid");

      await page.goto("/register");
      await usernameInput.fill("999");
      await emailInput.fill("test");

      await signUpButton.click();
      await expect(errorMessageEmail).toBeVisible();
      await emailInput.fill("test@");

      await signUpButton.click();
      await expect(errorMessageEmail).toBeVisible();
      await emailInput.fill("test@tt");

      await signUpButton.click();
      await expect(errorMessageEmail).toBeVisible();

      await emailInput.fill("test@tt.com");

      await signUpButton.click();
    }
  );
});
