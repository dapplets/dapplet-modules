import { expect, test } from '@dapplets/dapplet-playwright'

const registry = 'http://localhost:8080/index.json'

// ToDo: unskip when authorization will be implemented
test.skip('should inject widgets in Twitter profile', async ({
  page,
  enableDevServer,
  activateDapplet,
}) => {
  await page.goto('https://twitter.com/alsakhaev')
  await enableDevServer(registry)
  await activateDapplet('twitter-config-demo.dapplet-base.eth', registry)

  // avatar badge
  await expect(page.locator('.dapplet-widget .avatar-badge img')).toBeVisible()

  // button
  await expect(page.locator('.dapplet-widget').getByText('TEST2')).toBeVisible()
})
