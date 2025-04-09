import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/Sauce_Labs/pages/login';
import { ShopPage } from '../../src/Sauce_Labs/pages/shop';
import { BasketPage } from '../../src/Sauce_Labs/pages/basket';
import { CheckoutPage } from '../../src/Sauce_Labs/pages/checkout';
import { CheckoutOverviewPage } from '../../src/Sauce_Labs/pages/checkout_overview';

const CHECKOUT_FORM_INPUT = {
  "firstName": "Vlad",
  "lastName": "Dinescu",
  "postalCode": "077160"
}
const USERNAME = process.env.USERNAME_SAUCE_LABS
const PASSWORD = process.env.PASSWORD_SAUCE_LABS

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const Login = new LoginPage(page)
  await Login.authenticate(USERNAME, PASSWORD)

  const Shop = new ShopPage(page)
  await Shop.addToBasket("Sauce Labs Backpack")
  await Shop.addToBasket("Sauce Labs Fleece Jacket")
  await Shop.goToBasket()

  const Basket = new BasketPage(page)
  await Basket.goToCheckout()

  const Checkout = new CheckoutPage(page)
  await Checkout.finalizeCheckoutForm(CHECKOUT_FORM_INPUT)

  const CheckoutOverview = new CheckoutOverviewPage(page)
  await CheckoutOverview.finalizeTransaction()
});