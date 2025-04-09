import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').click();

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();

  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('Vlad');
  await page.locator('[data-test="lastName"]').fill('Dinescu');
  await page.locator('[data-test="postalCode"]').fill('077160');

  await page.locator('[data-test="continue"]').click();
  
  await page.locator('[data-test="finish"]').click();
});