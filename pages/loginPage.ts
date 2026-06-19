import {Page, Locator, expect} from '@playwright/test'

export class loginPage {
    readonly page: Page
    readonly username: Locator
    readonly password: Locator
    readonly loginbtn: Locator

    constructor(page:Page) {
        this.page = page
        this.username = page.locator("#user-name")
        this.password = page.locator("#password")
        this.loginbtn = page.locator("#login-button")
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/')

    }
    async login(user: string, pass: string){
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginbtn.click()

    }
    async verifyLogin() {
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html')
    }

}

