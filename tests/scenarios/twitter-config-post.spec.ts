import { expect, test } from '@dapplets/dapplet-playwright'

const registry = 'http://localhost:8080/index.json'

test('should inject widgets in Twitter post', async ({
  page,
  skipOnboarding,
  enableDevServer,
  activateDapplet,
}) => {
  await page.goto('https://twitter.com/alsakhaev/status/1691462269182611456')
  await skipOnboarding()
  await enableDevServer(registry)
  await activateDapplet('twitter-config-demo.dapplet-base.eth', registry)

  await expect(page.getByTitle('POST_AVATAR_BADGE')).toBeAttached()
  await expect(page.getByTitle('POST_BUTTON')).toBeAttached()
})
