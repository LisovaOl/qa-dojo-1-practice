import  { test, expect } from "@playwright/test";

test("OL-130 Fill Practice Form", async ({ page }) => {      
    
    // Start Test
await page.goto("/automation-practice-form");
await expect(page.getByRole('heading', { name: 'Practice Form' })).toBeVisible();
})