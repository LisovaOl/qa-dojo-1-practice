import { test, expect } from "@playwright/test";

test("OL-15 Add 10 Articled and deleted them", async ({ page }) => {
  await page.goto("");

  // Sign in
  await page.getByRole("link", { name: "Sign in" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("testol@test.ua");
  await page.getByRole("textbox", { name: "Password" }).fill("test");
  await page.getByRole("button", { name: "Sign in" }).click();

  const articleTitles = [
    "Getting Started with OL",
    "OL in Action",
    "Why OL Matters",
    "Mastering OL",
    "OL Test Insights",
    "Inside OL Architecture",
    "OL for Beginners",
    "OL Performance Review",
    "OL vs Alternatives",
    "Future of OL",
  ];

  const articleSubTitles = [
    "Introduction to OL Framework",
    "Real-world Use Cases",
    "Benefits of OL",
    "Advanced Techniques",
    "What We Learned",
    "How OL Works",
    "Start Your Journey",
    "Speed and Stability",
    "Comparison Guide",
    "What’s Next?",
  ];

  const articleTexts = [
    "This article explains the basics of OL and how to begin.",
    "Explore how OL is applied in various industries.",
    "Discover the key advantages of using OL in your workflow.",
    "Learn expert-level strategies for optimizing OL usage.",
    "A summary of findings from our OL testing phase.",
    "Dive into the internal structure and logic of OL.",
    "A step-by-step guide to getting comfortable with OL.",
    "We evaluate how OL performs under different conditions.",
    "A detailed comparison between OL and similar tools.",
    "Predictions and trends shaping the evolution of OL.",
  ];

  for (let i = 0; i < 10; i++) {
    // Open New Article Form
    await page.getByRole("link", { name: "New Article" }).click();

    // Fill form
    await page
      .getByRole("textbox", { name: "Article Title" })
      .fill(articleTitles[i]);
    await page
      .getByRole("textbox", { name: "What's this article about?" })
      .fill(articleSubTitles[i]);
    await page
      .locator("textarea[placeholder='Write your article (in markdown)']")
      .fill(articleTexts[i]);

    // Publish article
    await page.getByRole("button", { name: "Publish Article" }).click();

    // Check visibility
    await expect(
      page.getByRole("heading", { name: articleTitles[i] })
    ).toBeVisible();
  }

  // Clean up
  // Open My articles
  await page
    .getByRole("listitem")
    .filter({ hasText: "testol" })
    .getByRole("link")
    .click();
  await expect(page.getByRole("link", { name: "My Articles" })).toBeVisible();

  // Delete all added articles
  for (let i = 0; i < 10; i++) {
    await page
      .getByRole("link", { name: articleTitles[articleTitles.length - 1 - i] })
      .click();
    await page.getByRole("button", { name: "Delete Article" }).nth(1).click();
  }
});
