import { test } from '../../src/Sauce_Labs/base';

const CHECKOUT_FORM_INPUT = {
  "firstName": "Vlad",
  "lastName": "Dinescu",
  "postalCode": "077160"
}

const USERNAME = process.env.USERNAME_SAUCE_LABS
const PASSWORD = process.env.PASSWORD_SAUCE_LABS

test.beforeEach(async ({page}) => {
  await page.goto('https://www.saucedemo.com/');
})

test('test', async ({Login, Shop, Basket, Checkout, Checkout_Overview}) => {
  await Login.authenticate(USERNAME, PASSWORD)
  await Shop.addToBasket("Sauce Labs Backpack")
  await Shop.addToBasket("Sauce Labs Fleece Jacket")
  await Shop.goToBasket()
  await Basket.goToCheckout()
  await Checkout.finalizeCheckoutForm(CHECKOUT_FORM_INPUT)
  await Checkout_Overview.finalizeTransaction()
});