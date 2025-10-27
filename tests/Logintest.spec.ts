import {test, expect} from '@playwright/test';
test ('Login Test', async ({page}) => {
    await page.goto ('https://practicetestautomation.com/practice-test-login/');

    // Fill in username and password
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');

    // Click the login button
    await page.locator('#submit').click();

    // Verify successful login by checking for a logout button
    await page.waitForURL('https://practicetestautomation.com/logged-in-successfully/');
    const logoutButton = page.locator('text=Log out');
    await expect(logoutButton).toBeVisible();
    console.log('Login test passed: Logout button is visible after login.');
});
