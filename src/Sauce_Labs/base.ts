import { test as base } from "@playwright/test"
import { LoginPage } from "../Sauce_Labs/pages/login"
import { ShopPage } from "../Sauce_Labs/pages/shop"
import { CheckoutPage } from "../Sauce_Labs/pages/checkout"
import { CheckoutOverviewPage } from "../Sauce_Labs/pages/checkout_overview"
import { BasketPage } from "../Sauce_Labs/pages/basket"

type MyFixtures = {
    Login: LoginPage,
    Shop: ShopPage,
    Basket: BasketPage,
    Checkout: CheckoutPage,
    Checkout_Overview: CheckoutOverviewPage
}

export const test = base.extend<MyFixtures>({
    Login: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    Shop: async ({ page }, use) => {
        await use(new ShopPage(page))
    },
    Basket: async ({ page }, use) => {
        await use(new BasketPage(page))
    },
    Checkout: async ({ page }, use) => {
        await use(new CheckoutPage(page))
    },
    Checkout_Overview: async ({ page }, use) => {
        await use(new CheckoutOverviewPage(page))
    }
})

export { expect } from "@playwright/test"