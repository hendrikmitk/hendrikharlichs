import { test, expect } from '@playwright/test';

test.describe('Mobile Navigation', () => {
	test.use({ viewport: { width: 375, height: 667 } });

	test('toggle mobile menu open and closed', async ({ page }) => {
		await page.goto('/');

		const menuButton = page.locator('.hamburger');
		await expect(menuButton).toBeVisible();

		// Open menu
		await menuButton.click();
		await expect(menuButton).toHaveClass(/is-active/);
		await expect(page.locator('header nav ul')).toHaveClass(/open/);

		// Close menu
		await menuButton.click();
		await expect(menuButton).not.toHaveClass(/is-active/);
	});

	test('navigate using mobile menu', async ({ page }) => {
		await page.goto('/');

		// Open menu and navigate
		await page.locator('.hamburger').click();
		await page.getByRole('link', { name: 'Notes' }).click();

		// Should navigate and close menu
		await expect(page).toHaveURL('/notes');
		await expect(page.locator('.hamburger')).not.toHaveClass(/is-active/);
	});

	test('logo click closes menu and navigates home', async ({ page }) => {
		await page.goto('/notes');

		// Open menu
		await page.locator('.hamburger').click();
		await expect(page.locator('.hamburger')).toHaveClass(/is-active/);

		// Click logo
		await page.locator('header a[title="Logo"]').click();

		// Should navigate home and close menu
		await expect(page).toHaveURL('/');
		await expect(page.locator('.hamburger')).not.toHaveClass(/is-active/);
	});

	test('menu closes on window resize to desktop', async ({ page }) => {
		await page.goto('/');

		// Open mobile menu
		await page.locator('.hamburger').click();
		await expect(page.locator('.hamburger')).toHaveClass(/is-active/);

		// Resize to desktop
		await page.setViewportSize({ width: 1024, height: 768 });
		await page.waitForTimeout(100);

		// Menu should auto-close
		await expect(page.locator('.hamburger')).not.toHaveClass(/is-active/);
	});
});
