import { Page } from "@playwright/test";

// Function Expand All Button Click
export async function clickOnExpandAllButton(page: Page) {
  await page.locator("//button[@aria-label='Expand all']").click();
}
// Function
export async function clickOnHomeCheckbox(page: Page) {
  await page.locator('//label[@for="tree-node-home"]').click();
}
// Function
export async function clickOnCommandsCheckbox(page: Page) {
  await page.locator('//label[@for="tree-node-commands"]').click();
}
// Function
export async function clickOnOfficeCheckbox(page: Page) {
  await page.locator('//label[@for="tree-node-office"]').click();
}
//Function
export async function clickOnExcelFileCheckbox(page: Page) {
  await page.locator('//label[@for="tree-node-excelFile"]').click();
}
