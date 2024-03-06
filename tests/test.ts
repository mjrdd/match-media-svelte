import { expect, test } from '@playwright/test';

test('should display the home page with test demo', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Match Media Svelte' })).toBeVisible();
	await expect(page.getByTestId('motion')).toBeVisible();
});
