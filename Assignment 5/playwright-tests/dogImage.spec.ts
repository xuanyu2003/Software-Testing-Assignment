import { test, expect } from '@playwright/test';

test('Dog image loads successfully on page load', async ({ page }) => {
  
  await page.goto('http://localhost:5173');

  
  await page.waitForResponse(response =>
    response.url().includes('/api/dogs/random') && response.status() === 200
  );

  
  const image = page.locator('.dog-image');

  
  await expect(image).toBeVisible({ timeout: 10000 });

  
  const src = await image.getAttribute('src');

  
  expect(src).toBeDefined();
  expect(src?.startsWith('https://')).toBe(true);
});