import { Page, Locator, Expect } from "@playwright/test";

export class CartPage{

    readonly page: Page
    readonly addToCartButton: Locator
    readonly removeButton: Locator
    readonly cartButton: Locator
    readonly cartList: Locator
    readonly continueShopping: Locator
    readonly checkout: Locator
    readonly checkoutInfo: Locator
    readonly firstname: Locator
    readonly lastname: Locator
    readonly postalcode: Locator
    readonly checkoutContinue: Locator
    readonly checkoutOverview: Locator
    readonly paymentInfo: Locator
    readonly finish: Locator
    readonly thanku: Locator



    constructor(page:Page){
        this.page = page
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.removeButton = page.locator('#remove-sauce-labs-backpack')
        this.cartButton = page.locator('[data-test="shopping-cart-link"]')
        this.cartList = page.locator('[data-test="cart-list"]')
        this.continueShopping = page.locator('[data-test="continue-shopping"]')
        this.checkout = page.locator('[data-test="checkout"]')
        this.checkoutInfo = page.locator('.title')
        this.firstname = page.locator("#first-name")
        this.lastname = page.locator("#last-name")
        this.postalcode = page.locator("#postal-code")
        this.checkoutContinue = page.locator("#continue")
        this.checkoutOverview = page.locator(".title")
        this.paymentInfo = page.locator("//div[normalize-space()='Payment Information:']")
        this.finish = page.locator('#finish')
        this.thanku = page.locator("//h2[normalize-space()='Thank you for your order!']")

    }
    async addItemtoCart(){
        await this.addToCartButton.click()

    }
    async openCart(){
        await this.cartButton.click()
    }
    async checkoutButton(){
        await this.checkout.click()
    }
    async enterInfo(){
        await this.firstname.fill("test")
        await this.lastname.fill("test")
        await this.postalcode.fill("1234")
        await this.checkoutContinue.click()
    }
    async paymentFinish(){
        await this.finish.click()
    }

}