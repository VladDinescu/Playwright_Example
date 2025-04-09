import { Page } from "@playwright/test";

export class CheckoutOverviewPage {
  constructor(private page: Page) {
  }

  private get subTotalLabel() {
    return this.page.locator('[data-test="subtotal-label"]')
  }

  private async buttonCheckoutOverview(buttonName: string){
    return this.page.locator(`[data-test="${buttonName}"]`)
  }

  //Methods
  public async validateTotals() {
    //Item Value extractor
    //subtotal label
  }

  public async finalizeTransaction(){
   await (await this.buttonCheckoutOverview("finish")).click()
  }

}
