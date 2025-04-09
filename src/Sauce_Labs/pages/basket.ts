import { Page } from "@playwright/test";

const CHECKOUT = "checkout"
const CONTINUE_SHOPPING = "continue-shopping"

export class BasketPage {
  constructor(private page: Page) {
  }

  private async basketButton(buttonName: string) {
    return this.page.locator(`[data-test="${buttonName}"]`)
  }

  private async removeProductButton(productName: string) {
    return this.page.locator(`[data-test="remove-${productName.toLowerCase().replaceAll(" ", "-")}"]`)
  }

  public async removeProduct(productName: string){
    await (await this.removeProductButton(productName)).click()
  }

  public async goToCheckout() {
    await (await this.basketButton(CHECKOUT)).click()
  }

  public async returnToShop(){
    await (await this.basketButton(CONTINUE_SHOPPING)).click()
  }

}
