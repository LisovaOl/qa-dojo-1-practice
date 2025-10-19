import { test, expect } from "@playwright/test";

test("go to local site", async ({ page }) => {
  await page.goto("");
  await page.getByRole("textbox", { name: "Email адреса *" }).fill("test");
});
