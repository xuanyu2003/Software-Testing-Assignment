import { test, expect } from '@playwright/test';

test('Dog image error handling when API fails', async ({ page }) => {
  await page.route('**/api/dogs/random', route => route.abort());

  await page.goto('http://localhost:5173');

  const errorElement = page.locator('text=/error/i');
  await expect(errorElement).toBeVisible();
});