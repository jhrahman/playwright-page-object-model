import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage'


test('Login Test', async({page})=>{
    const loginpage = new loginPage(page)
    await loginpage.gotoLoginPage()
    await loginpage.login('standard_user', 'secret_sauce')
    await loginpage.verifyLogin()
})