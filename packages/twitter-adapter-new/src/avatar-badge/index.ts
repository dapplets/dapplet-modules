import { LitElement, html } from 'lit'
import { property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'
import { classMap } from 'lit/directives/class-map.js'
import { IAvatarBadgeState, IConnectedAccountUser } from './types'
import { styles } from './avatar-badge.css'
import description from './description'
import useAccountsWidget from './useAccountsWidget'
import injectStyles from './injectStyles'

class AvatarBadge extends LitElement implements IAvatarBadgeState {
    public static override styles = styles
    public static widgetParamsDescription = description
    public static contextInsPoints = {
        POST: 'AVATAR_BADGE',
        PROFILE: 'AVATAR_BADGE',
    }

    @property() state: IAvatarBadgeState
    @property() insPointName: string
    @property() img?: string | null
    @property() video?: string
    @property() mediaType?: string
    @property() basic?: boolean
    @property() vertical: 'top' | 'bottom'
    @property() horizontal: 'left' | 'right'
    @property() hidden: boolean
    @property() tooltip?: string | string[]
    @property() theme?: 'DARK' | 'LIGHT'
    @property() exec?: (ctx: any, me: IAvatarBadgeState) => void
    @property() init?: (tx: any, me: IAvatarBadgeState) => void
    @property() ctx: any
    @property() username: string
    @property() accounts?: IConnectedAccountUser[]
    @property() showAccounts?: boolean

    connectedCallback() {
        super.connectedCallback()
        this.init?.(this.ctx, this.state)
    }

    private _clickHandler(e) {
        this.exec?.(this.ctx, this.state)
        e.stopPropagation()
    }

    override render() {
        injectStyles()
        if (this.hidden || !(this.img || this.video)) return null

        if (this.accounts && this.username) {
            const handleCloseAccounts = () => {
                this.state.showAccounts = false
            }
            useAccountsWidget({
                username: this.username,
                accounts: this.accounts,
                showAccounts: this.showAccounts,
                el: this.ctx.el,
                insPointName: this.insPointName,
                handleClose: handleCloseAccounts
            })
        }

        return html`<div
            class='avatar-badge'
            @click=${this._clickHandler}
            title=${this.tooltip
                ? typeof this.tooltip === 'string'
                    ? this.tooltip
                    : this.tooltip.join('\n')
                : ''}
        >
            <div
                class=${classMap({
                    wrapper: true,
                    active: !!this.exec,
                    'post-badge': this.insPointName === 'POST',
                    'profile-badge': this.insPointName === 'PROFILE',
                    'not-basic': !this.basic,
                    dark: this.theme === 'DARK',
                })}
                style=${styleMap({
                    top: this.insPointName === 'POST' && this.vertical === 'top' ? '-2px' : undefined,
                    bottom:  this.vertical === 'bottom'
                        ? this.insPointName === 'POST'
                            ? '-2px'
                            : '0'
                        : undefined,
                    left:  this.insPointName === 'POST' && this.horizontal === 'left' ? '-7px' : undefined,
                    right:  this.horizontal === 'right'
                        ? this.insPointName === 'POST'
                            ? '-7px'
                            : '0'
                        : undefined,
                })}
            >
                ${this.img && (this.mediaType === undefined || this.mediaType !== 'application/octet-stream')
                    ? html`<img src=${this.img} style=${styleMap({ width: '100%' })} />`
                    : this.video ?? (this.img && this.mediaType === 'application/octet-stream')
                        ? html`<video
                            src=${this.video ?? this.img}
                            autoplay
                            muted
                            loop
                            style=${styleMap({ width: '100%' })}
                        />`
                        : ''
                }
            </div>
        </div>`
    }
}

export { AvatarBadge, IAvatarBadgeState }
