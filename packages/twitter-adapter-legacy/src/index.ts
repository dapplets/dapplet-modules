import { IContentAdapter } from '@dapplets/dapplet-extension'
import { IDynamicAdapter } from 'dynamic-adapter.dapplet-base.eth'
import { T_TwitterFeatureConfig } from 'twitter-adapter.dapplet-base.eth'
import { Button, IButtonState } from './button'
import { IPictureState, Picture } from './picture'

@Injectable
export default class TwitterAdapter implements IContentAdapter<T_TwitterFeatureConfig> {
  // ToDo: refactor it
  public exports = (featureId) => ({
    button: this.adapter.createWidgetFactory<IButtonState>(Button),
    picture: this.adapter.createWidgetFactory<IPictureState>(Picture),
  })

  public config = {
    POST: {
      containerSelector: '#timeline',
      contextSelector: '[id^=stream-item-tweet-]',
      insPoints: {
        POST_SOUTH: {
          selector: 'div.js-actions > *:last-child',
        },
        POST_COMBO: {
          selector: '', //ToDo
        },
        POST_PICTURE: {
          selector: 'div.js-tweet-text-container > *:last-child',
        },
      },
      contextBuilder: (tweetNode: any) => ({
        id: tweetNode.getAttribute('data-item-id'),
        text: tweetNode.querySelector('div.js-tweet-text-container').innerText,
        authorFullname: tweetNode.querySelector('strong.fullname').innerText,
        authorUsername: tweetNode.querySelector('span.username').innerText,
        authorImg: tweetNode.querySelector('img.avatar').getAttribute('src'),
      }),
    },
    DM: {
      containerSelector: '#dm_dialog',
      contextSelector: 'li.DMInbox-conversationItem',
      insPoints: {
        DM_SOUTH: {
          selector: 'div.DMInboxItem > *:last-child',
        },
        DM_EAST: {
          selector: '', //ToDo
        },
      },
      contextBuilder: (tweetNode: any) => ({
        threadId: tweetNode.getAttribute('data-thread-id'),
        lastMessageId: tweetNode.getAttribute('data-last-message-id'),
        fullname:
          tweetNode.querySelector('div.DMInboxItem-title .fullname') &&
          tweetNode.querySelector('div.DMInboxItem-title .fullname').innerText,
        username:
          tweetNode.querySelector('div.DMInboxItem-title .username') &&
          tweetNode.querySelector('div.DMInboxItem-title .username').innerText,
        text: tweetNode.querySelector('.DMInboxItem-snippet').innerText,
      }),
    },
  }

  constructor(
    @Inject('dynamic-adapter.dapplet-base.eth')
    private adapter: IDynamicAdapter<T_TwitterFeatureConfig>
  ) {
    this.adapter.configure(this.config)
  }

  // ToDo: refactor it
  public attachConfig(config: T_TwitterFeatureConfig) {
    // ToDo: automate two-way dependency handling(?)
    return this.adapter.attachConfig(config)
  }

  // ToDo: refactor it
  public detachConfig(config: T_TwitterFeatureConfig, featureId?: string): void {
    this.adapter.detachConfig(config, featureId)
  }
}
