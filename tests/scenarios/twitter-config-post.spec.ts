import { expect, test } from '@dapplets/dapplet-playwright'

const registry = 'http://localhost:8080/index.json'

test('should inject widgets in Twitter post', async ({
  page,
  enableDevServer,
  activateDapplet,
}) => {
  await page.goto('https://twitter.com/alsakhaev/status/1691462269182611456')
  await enableDevServer(registry)
  await activateDapplet('twitter-config-demo.dapplet-base.eth', registry)

  // avatar badge
  await expect(page.locator('.dapplet-widget .avatar-badge img')).toBeVisible()

  // button
  await expect(page.locator('.dapplet-widget').getByText('TEST2')).toBeVisible()
})
