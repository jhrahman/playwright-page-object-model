import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'


test('Login Test', async({page})=>{
    const login = new LoginPage(page)
    await login.openApplication()
    const username = process.env.APP_USERNAME!
    const password = process.env.APP_PASSWORD!
    await login.loginMethod(username,password)
    await login.loginVerification()

})

