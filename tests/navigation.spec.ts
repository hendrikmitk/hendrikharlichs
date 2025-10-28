import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
	test('navigate between main pages via header', async ({ page }) => {
		await page.goto('/');

		// Navigate to Notes
		await page.getByRole('link', { name: 'Notes' }).click();
		await expect(page).toHaveURL('/notes');

		// Navigate to Resume
		await page.getByRole('link', { name: 'Resume' }).click();
		await expect(page).toHaveURL('/resume');

		// Navigate home via logo
		await page.locator('header a[title="Logo"]').click();
		await expect(page).toHaveURL('/');
	});

	test('navigate to imprint via footer', async ({ page }) => {
		await page.goto('/');
		await page.locator('footer a[href="/imprint"]').click();
		await expect(page).toHaveURL('/imprint');
	});
});
