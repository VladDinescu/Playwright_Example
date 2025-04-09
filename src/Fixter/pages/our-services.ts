import { Page } from "@playwright/test";

export class OurServicesPage {
    constructor(private page: Page) { }

    //Locators
    private async serviceCard(cardName: string) {
        return this.page.locator(".Card").getByText(cardName).locator("..")
        //(await this.page.locator(".Card").getByText(cardName, { exact: true})).locator("..")
    }

    private async preQuoteInput(name: string){
        return this.page.getByTestId(`input-${name.toLowerCase().replaceAll(" ", "-")}`)
    }

    get getAQuoteButton(){
        return this.page.getByRole('button', { name: 'Get a quote' })
    }

    //Methods
    public async select(serviceName: string) {
        await this.page.waitForTimeout(2000)
        await (await this.serviceCard(serviceName)).click();
    }

    public async completePreQuoteForm(inputObject: any){
        await (await this.preQuoteInput("postcode")).fill(inputObject.postcode)
        await (await this.preQuoteInput("vrm")).fill(inputObject.vrm)
        await this.getAQuoteButton.click()
    } 
}