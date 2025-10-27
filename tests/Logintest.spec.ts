import {test, expect} from '@playwright/test';
test ('Login Test', async ({page}) => {
    await page.goto ('https://practicetestautomation.com/practice-test-login/');

    // Fill in username and password
    await page.locator('#Username').fill('student');
    await page.locator('#Password').fill('password123');

    // Click the login button
    await page.locator('#submit').click();

    // Verify successful login by checking for a logout button
    await expect(page.getByRole('button', {name: 'Logout'})).toBeVisible();
});
