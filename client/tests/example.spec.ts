import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Guggle/);
});

test('search functionality', async ({ page }) => {
  await page.goto('/');

  // Click the search input
  await page.locator('input[type="text"]').first().fill('test search');
  await page.locator('input[type="text"]').first().press('Enter');

  // Wait for results
  await expect(page.locator('.search-result')).toBeVisible();
});
