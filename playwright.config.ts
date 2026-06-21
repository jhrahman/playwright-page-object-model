import { defineConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({

  testDir: './tests',

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      slowMo: 1000
    }
  },

  projects: [

    //  SETUP PROJECT (runs first)
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/
    },

    //  CHROMIUM TEST PROJECT
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json'   //  important
      },
      dependencies: ['setup']
    }

  ]
})