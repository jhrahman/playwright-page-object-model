import { expect, Expect, Locator, Page } from "@playwright/test";

export class HomePage{

    readonly page: Page
    readonly allItems: Locator
    readonly pageTitle: Locator
    readonly pageFooters: Locator
    readonly footercopy: Locator
    readonly openMenu: Locator
    readonly productSort: Locator
    readonly shoppingCart: Locator

    constructor(page:Page){
        this.page = page
        this.allItems = page.locator("//div[@class='inventory_item' and @data-test='inventory-item']")
        this.pageTitle = page.locator("//span[@class='title']")
        this.pageFooters = page.getByText('TwitterFacebookLinkedIn')
        this.footercopy = page.locator('[data-test="footer-copy"]')
        this.openMenu = page.getByRole('button', { name: 'Open Menu' })
        this.productSort = page.locator('[data-test="product-sort-container"]')
        this.shoppingCart = page.locator('[data-test="shopping-cart-link"]')

    }
    async baseURL(){
        await this.page.goto('https://www.saucedemo.com/')
    }
    

}