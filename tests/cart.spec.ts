import {test,expect} from '@playwright/test'
import { CartPage } from '../pages/CartPage'

test('Cart Functionality', async({page})=>{
    const cart = new CartPage(page)
    await page.goto('/inventory.html')
    await cart.addItemtoCart()
    await expect(cart.removeButton).toBeVisible()
    await cart.openCart()
    await expect(cart.cartList).toBeVisible()
    await expect(cart.continueShopping).toBeVisible()
    await expect(cart.checkout).toBeVisible()
    await cart.checkoutButton()
    await expect(cart.checkoutInfo).toHaveText('Checkout: Your Information')
    await cart.enterInfo()
    await expect(cart.checkoutOverview).toHaveText("Checkout: Overview")
    await expect(cart.paymentInfo).toHaveText("Payment Information:")
    await cart.paymentFinish()
    await expect(cart.thanku).toHaveText("Thank you for your order!")

})