import { Page } from "@playwright/test";

const FIRST_NAME = "firstName"
const LAST_NAME = "lastName"
const POSTAL_CODE = "postalCode" 

export class CheckoutPage {
  //Defining - Including locators
  constructor(private page: Page) {
  }

  private async checkoutTextfield(testId: string) {
    return this.page.locator(`[data-test="${testId}"]`)
  }

  private async checkoutButton(buttonText: string){
    return this.page.locator(`[data-test="${buttonText.toLowerCase()}"]`)
  }

  //Methods
  private async completeCheckoutForm (details: any) {
   await (await this.checkoutTextfield(FIRST_NAME)).fill(details[FIRST_NAME])
   await (await this.checkoutTextfield(LAST_NAME)).fill(details[LAST_NAME])
   await (await this.checkoutTextfield(POSTAL_CODE)).fill(details[POSTAL_CODE])
  }

  public async finalizeCheckoutForm(formInput: any){
    await this.completeCheckoutForm(formInput)
    await (await this.checkoutButton("Continue")).click()
  }


}
