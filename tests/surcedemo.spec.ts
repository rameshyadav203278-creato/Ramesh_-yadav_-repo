import { expect, test } from '@playwright/test';

test('logs in to SauceDemo with a standard user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator("//input[@id='user-name']").fill('standard_user');
  await page.locator("//input[@id='password']").fill('secret_sauce');
  await page.locator("//input[@id='login-button']").click();
       await page.goBack();
       await page.reload();
       await page.goForward();
   await page.screenshot({ path: 'login-page.png' });
   await page.locator('[data-test="inventory-item-sauce-labs-backpack-img"]').screenshot({path: 'product-image.jpeg'});
});
