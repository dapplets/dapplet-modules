import { expect, test } from '../fixtures/twitter-login'

const registry = 'http://localhost:8080/index.json'

test('should inject widgets in Twitter profile', async ({
  page,
  skipOnboarding,
  enableDevServer,
  activateDapplet,
}) => {
  await page.goto(process.env.TWITTER_TEST_PROFILE_URL)

  await skipOnboarding()
  await enableDevServer(registry)
  await activateDapplet('twitter-config-demo.dapplet-base.eth', registry)

  await expect(page.getByTitle('PROFILE_AVATAR_BADGE')).toBeAttached()
  await expect(page.getByTitle('PROFILE_BUTTON')).toBeAttached()
  await expect(page.getByTitle('POST_AVATAR_BADGE').first()).toBeAttached()
  await expect(page.getByTitle('POST_BUTTON').first()).toBeAttached()
})
