import { BrowserOptions } from '@dapplets/dapplet-playwright'
import { defineConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'
import { TwitterLoginOptions } from 'tests/fixtures/twitter-login'

dotenv.config()

export default defineConfig<TwitterLoginOptions & BrowserOptions>({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,
  reporter: 'line',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        twitterPassword: process.env.TWITTER_PASSWORD,
        twitterEmail: process.env.TWITTER_EMAIL,
        twitterUsername: process.env.TWITTER_USERNAME,
        newHeadless: process.env.CI ? true : false,
        extensionVersion: 'v0.60.0-alpha.2',
      },
    },
  ],
  webServer: {
    command: 'npm run start',
    port: 8080,
    reuseExistingServer: !process.env.CI,
  },
})
