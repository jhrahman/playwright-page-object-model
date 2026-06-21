import {test, expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'

test('Home Page Validations', async({page})=>{
    const home = new HomePage(page)
    await page.goto('/inventory.html')
    await expect(home.pageTitle).toHaveText('Products')
    await expect(home.pageFooters).toBeVisible()
    await expect(home.footercopy).toBeVisible()
    await expect(home.openMenu).toBeVisible()
    await expect(home.productSort).toBeVisible()
    await expect(home.shoppingCart).toBeVisible()

    

})