import test, {test as setup, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test('Authenticate User Session', async({page})=>{
    const username = process.env.APP_USERNAME!
    const password = process.env.APP_PASSWORD!
    const login = new LoginPage(page)
    // NAVIGATION HAPPEN HERE
    await login.openApplication()
    await login.loginMethod(username,password)
    

    // session storage
    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    })

})