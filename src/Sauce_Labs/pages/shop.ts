import { Page } from "@playwright/test";

export class ShopPage {
  constructor(private page: Page) {
  }

  //Locators
  private get shoppingCartButton() {
    return this.page.locator(`[data-test="shopping-cart-link"]`)
  }

  private async productAddButton(productName: string) {
    return this.page.locator(`[data-test="add-to-cart-${productName.toLowerCase().replaceAll(" ", "-")}"]`)
  }

  //Methods
  public async addToBasket(productName: string) {
    await (await this.productAddButton(productName)).click()
  }

  public async goToBasket() {
    await this.shoppingCartButton.click()
  }
}
