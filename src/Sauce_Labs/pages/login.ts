import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {
  }

  //Locators
  get usernameTextBox() {
    return this.page.locator('[data-test="username"]')
  }

  get passwordTextBox() {
    return this.page.locator('[data-test="password"]');
  }

  get loginButton() {
    return this.page.locator('[data-test="login-button"]');
  }

  //Methods
  async authenticate(username: any, password: any) {
    await this.usernameTextBox.fill(username)
    await this.passwordTextBox.fill(password)
    await this.loginButton.click()
  }

}
