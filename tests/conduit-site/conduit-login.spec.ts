import { test, expect } from "@playwright/test";

test.describe("Login", { tag: "@smoke" }, async () => {
  test("OL-10 UI. Sign up button - color style", async ({ page }) => {
    const primaryButton = page.locator(".btn-primary");

    await page.goto("/login");
    await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
    const initialColor = await primaryButton.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    );
    expect(initialColor).toBe("rgb(92, 184, 92)"); // #5CB85C
    await primaryButton.hover();
    const hoverColor = await primaryButton.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    );
    expect(hoverColor).toBe("rgb(68, 157, 68)"); // #449d44
  });

  test(
    "OL-11 Sign in. Invalid email or password",
    { tag: "@smoke" },
    async ({ page }) => {
      const signInButton = page.getByRole("button", { name: "Sign in" });
      const emailInput = page.getByRole("textbox", { name: "Email" });
      const passwordInput = page.getByRole("textbox", { name: "Password" });
      const errorMessage = page.getByText("email or password is invalid");

      await page.goto("/login");

      await emailInput.fill("test@test.com");
      await signInButton.click();

      await passwordInput.fill("111111");
      await signInButton.click();

      await expect(errorMessage).toBeVisible();
    }
  );

  test("OL-12 Sign in. Blank fields", { tag: "@smoke" }, async ({ page }) => {
    const emailInput = page.getByRole("textbox", { name: "Email" });
    const passwordInput = page.getByRole("textbox", { name: "Password" });
    const signInButton = page.getByRole("button", { name: "Sign in" });
    const errorMessageEmail = page.getByText("email can't be blank");
    const errorMessagePassword = page.getByText("password can't be blank");
    const invalidCredentialsMessage = page.getByText(
      "email or password is invalid"
    );

    await page.goto("/login");

    await expect(emailInput).toBeEmpty();
    await expect(passwordInput).toBeEmpty();
    await signInButton.click();

    await expect(errorMessageEmail).toBeVisible(); //toBeHidden
    await emailInput.fill("test@test.com");
    await signInButton.click();

    await expect(errorMessagePassword).toBeVisible(); //toBeHidden

    await passwordInput.fill("11111111");

    await signInButton.click();
    await expect(errorMessagePassword).toBeHidden();
    await expect(invalidCredentialsMessage).toBeVisible(); //toBeHidden

    // const errors = page.locator('ul.error-messages>li')
    // await expect(errors)
  });
});
