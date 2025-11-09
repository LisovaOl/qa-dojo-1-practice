import  { test, Page } from "@playwright/test";

export async function publishArticle(page:Page) {
await page.getByRole("button", { name: "Publish Article" }).click();
}

export async function deleteArticle(page:Page) {
  await page.getByRole("button", { name: "Delete Article" }).click();
}