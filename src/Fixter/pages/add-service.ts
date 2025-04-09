import { Page, expect } from "@playwright/test";

export class AddServicePage {
    constructor(private page: Page) { }

    //Locators
    private async addToBasketButton(serviceName: string) {
        return this.page.locator(`[data-e2eid="repairs-${serviceName.toLocaleLowerCase().replaceAll(" ", "-")}"]`)
    }

    private async removeFromBasketButton(serviceName: string) {
        return this.page.locator(`[data-e2eid="repairs-${serviceName.toLocaleLowerCase().replaceAll(" ", "-")}-on-basket"]`)
    }

    private async basketServiceLabel(serviceName: string) {
        return this.page.getByTestId(`basketItemTitle-${serviceName}`)
    }

    private async selectButton(specificServiceName: string){
        let value: string = specificServiceName
        if(specificServiceName === "Premium MOT") value = "mot-premium" 
        return this.page.locator(`[data-e2eid="product-description-${value.toLowerCase().replaceAll(" ", "-")}"]`)
    }

    private async nextButton(serviceName: string) {
        if(serviceName === "MOT" || serviceName === "Car servicing") return this.page.getByTestId('quotes-next')
        else return this.page.getByTestId('product-next')
    }

    //Methods
    private async selectService(service: string, specificServiceName: string) {
        switch (service) {
            case ("MOT"): {
                await this.page.waitForLoadState("domcontentloaded")
                await this.page.waitForLoadState("networkidle")
                await expect(this.page.getByAltText('Loading...')).toHaveCount(0);
                await (await this.page.locator('label').filter({ hasText: specificServiceName })).click()
                await (await this.selectButton(specificServiceName)).click()
                break;
            }
            case ("Car servicing"): {
                await this.page.waitForLoadState("domcontentloaded")
                await this.page.waitForLoadState("networkidle")
                await expect(this.page.getByAltText('Loading...')).toHaveCount(0);
                await (await this.page.locator('label').filter({ hasText: specificServiceName })).click()
                await (await this.selectButton(specificServiceName)).click()
                break;
            }
            default: {
                await this.page.waitForLoadState("domcontentloaded")
                await this.page.waitForLoadState("networkidle")
                await expect(this.page.getByAltText('Loading...')).toHaveCount(0);
                if(!await (await this.removeFromBasketButton(specificServiceName)).isVisible() && await (await this.basketServiceLabel(specificServiceName)).isVisible()){
                    await (await this.addToBasketButton(specificServiceName)).click()
                }
            }
        }
        
    }

    public async selectAndContinue(serviceName: string, specificServiceName: string) {        
        await this.selectService(serviceName, specificServiceName)
        await (await this.nextButton(serviceName)).click()
    }

}