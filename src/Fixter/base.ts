import { test as base } from "@playwright/test"
import { LandingPage } from "./pages/landing-page"
import { OurServicesPage } from "./pages/our-services"
import { AddServicePage } from "./pages/add-service"

type MyFixtures = {
    Home: LandingPage,
    Services: OurServicesPage,
    AddService: AddServicePage
}

export const test = base.extend<MyFixtures>({
    Home: async ({page}, use) => {
        await use(new LandingPage(page))
    },
    Services: async ({page}, use) => {
        await use(new OurServicesPage(page))
    },
    AddService: async ({page}, use) => {
        await use(new AddServicePage(page))
    }
})

export { expect } from "@playwright/test"