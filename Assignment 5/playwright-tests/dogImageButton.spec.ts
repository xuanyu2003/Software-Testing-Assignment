import { test, expect } from '@playwright/test';

test('Dog image loads successfully when button is clicked', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const button = page.locator('.fetch-button');
  await button.click();
  const image = page.locator('.dog-image');
  await expect(image).toBeVisible({ timeout: 5000 });
  const src = await image.getAttribute('src');
  expect(src).toBeDefined();
  expect(src!.startsWith('https://')).toBe(true);
});