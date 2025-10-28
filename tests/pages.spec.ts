import { test, expect } from '@playwright/test';

test.describe('Core Pages', () => {
	test('home page loads correctly', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle(/Hendrik Harlichs/);
		await expect(page.locator('h1')).toBeVisible();
	});

	test('notes page displays blog posts', async ({ page }) => {
		await page.goto('/notes');
		await expect(page.locator('h1')).toContainText('All Blog Posts');

		// Should have at least one blog post with title, summary, and reading time
		const posts = page.locator('article');
		await expect(posts.first()).toBeVisible();
		await expect(posts.first().locator('h2')).toBeVisible();
		await expect(posts.first().locator('p')).toBeVisible();
	});

	test('individual blog post page loads', async ({ page }) => {
		await page.goto('/notes');
		await page.locator('article a').first().click();

		await expect(page).toHaveURL(/\/notes\/.+/);
		await expect(page.locator('article h1')).toBeVisible();
	});

	test('resume page displays job experience', async ({ page }) => {
		await page.goto('/resume');
		await expect(page.locator('h1')).toContainText('Experience');

		// Should have at least one job with company and title
		const jobs = page.locator('.job');
		await expect(jobs.first()).toBeVisible();
		await expect(jobs.first().locator('h2')).toBeVisible();
		await expect(jobs.first().locator('h3')).toBeVisible();
	});

	test('imprint page loads', async ({ page }) => {
		await page.goto('/imprint');
		await expect(page.locator('h1')).toContainText('Impressum');
	});
});
