import { IConnectedAccountUser } from './types'
import TWITTER_ICON from './assets/twitter-icon.svg'
import NEAR_ICON from './assets/near-black.svg'
import COPY from './assets/copy.svg'
import COPIED from './assets/copied.svg'

export default ({
    username,
    accounts,
    showAccounts,
    el,
    insPointName,
    handleClose
}: { 
    username: string,
    accounts: IConnectedAccountUser[],
    showAccounts: boolean,
    el: HTMLElement,
    insPointName: string
    handleClose: any
}) => {
    let accountsWrapper: HTMLElement = document.querySelector(`.dapplets-connected-accounts-wrapper-${username}`)
    if (!accountsWrapper) {
        accountsWrapper = document.createElement('div')
        accountsWrapper.classList.add(`dapplets-connected-accounts-wrapper`)
        accountsWrapper.classList.add(`dapplets-connected-accounts-wrapper-${username}`)
        accountsWrapper.style.position = 'absolute'
        accountsWrapper.style.zIndex = '99999'
        accountsWrapper.style.left = '16px'
        accountsWrapper.style.transition = 'opacity .2s, visibility .2s'
        const elementToInsertWidget = document.querySelector('main > div > div')
        elementToInsertWidget.append(accountsWrapper)

        window.addEventListener('popstate', () => handleClose());

        const accountsEl = document.createElement('div')
        accountsEl.classList.add('accounts')
        accountsWrapper.append(accountsEl)

        accounts.forEach((account) => {
            const container = document.createElement('div')
            container.classList.add('account-container')
            accountsEl.append(container)

            const acc = document.createElement('div')
            acc.classList.add('account')
            if (account.accountActive) acc.classList.add('nameUserActive')
            acc.title = 'Go to the ' + (account.origin === 'twitter' ? 'Twitter page' : 'NEAR explorer')
            container.append(acc)

            const image = document.createElement('img')
            image.src = account.origin === 'twitter' ? TWITTER_ICON : NEAR_ICON
            image.classList.add('imgUser')
            acc.append(image)

            const label = document.createElement('h4')
            label.classList.add('nameUser')
            label.textContent = account.name
            acc.append(label)

            acc.addEventListener('click', (e) => {
                e.preventDefault()
                if (account.origin === 'twitter') {
                    window.open(`https://twitter.com/${account.name}`, '_blank')
                } else if (account.origin === 'near/testnet') {
                    window.open(`https://explorer.testnet.near.org/accounts/${account.name}`, '_blank')
                } else if (account.origin === 'near/mainnet') {
                    window.open(`https://explorer.near.org/accounts/${account.name}`, '_blank')
                }
                handleClose()
            })

            const copyButton = document.createElement('a')
            copyButton.classList.add('copy-button')
            copyButton.title = 'copy ID'
            container.append(copyButton)

            const copyIcon = document.createElement('img')
            copyIcon.classList.add('copy-icon')
            copyIcon.src = COPY
            copyIcon.alt = 'copy button'
            copyButton.append(copyIcon)

            copyButton.addEventListener('click', (e) => {
                e.preventDefault()
                navigator.clipboard.writeText(account.name)
                copyIcon.src = COPIED
                setTimeout(() => {
                    accountsWrapper.style.visibility = 'hidden'
                    accountsWrapper.style.opacity = '0'
                }, 300)
                setTimeout(() => {
                    copyIcon.src = COPY
                    handleClose()
                }, 600)
            })
        })
    }
    accountsWrapper.style.visibility = showAccounts ? 'visible' : 'hidden'
    accountsWrapper.style.opacity = showAccounts ? '1' : '0'
    const elForRects = el.querySelector(insPointName === 'PROFILE'
        ? 'div > div > div > div.css-1dbjc4n.r-1ifxtd0.r-ymttw5.r-ttdzmv > div'
        : 'div > div > div > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1awozwy.r-1hwvwag.r-18kxxzh.r-1b7u577 > div')
    const rect = elForRects.getBoundingClientRect()
    accountsWrapper.style.top = `${rect.top + window.scrollY}px`
    // accountsWrapper.style.left = `${rect.left + window.scrollX}px`
}
