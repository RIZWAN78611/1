import { test, expect } from '@playwright/test';

test('Verify Hero Overhaul', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/UAU JIGBO TECHNICS/);
  // Use first h2 which is in the Hero
  await expect(page.locator('h2').first()).toContainText('Precision Machining, Dies & moulds');
  await page.screenshot({ path: '/home/jules/verification/hero_overhaul.png', fullPage: false });
});
