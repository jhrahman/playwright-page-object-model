import { expect, Locator, Page } from "@playwright/test";


export class LoginPage {
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly loginTitle: Locator

    constructor(page:Page){
        this.page = page
        this.usernameInput = page.locator('[data-test="username"]')
        this.passwordInput = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
        this.loginTitle = page.getByText('Swag Labs')
        
    }
    async openApplication(){
        await this.page.goto('https://www.saucedemo.com/')
    }

    async loginMethod(username:string, password:string){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
    async loginVerification(){
        await expect(this.loginTitle).toHaveText('Swag Labs')
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
    }
}