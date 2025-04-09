import { Page } from "@playwright/test";

export class LandingPage {

    constructor(private page: Page) {}

    //Locators
    get acceptCookiesButton(){
        return this.page.getByRole('button', { name: 'Accept Cookies' })
    }

    get seeOurServicesHeroSectionButton() {
        return this.page.locator('[id="HeroSection\\.homepage-uk"]').getByRole('button', { name: 'See Our Services' })
    }

    get seeOurServicesNavButton() {
        return this.page.locator('#nav').getByRole('button', { name: 'See Our Services' })
    }

    //Methods
    public async acceptCookies(){
        await this.acceptCookiesButton.click()
    }

    public async openServicesCatalogueFrom(location: "Hero Section" | "Navbar"){
        switch(location){
            case('Hero Section'): {
                await this.seeOurServicesHeroSectionButton.click()
                break;
            }
            case('Navbar'): {
                await this.seeOurServicesNavButton.click()
                break;
            }
        }
    }




}