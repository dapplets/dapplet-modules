import { IDynamicAdapter } from 'dynamic-adapter.dapplet-base.eth';
import { IWidgetBuilderConfig } from 'dynamic-adapter.dapplet-base.eth/build/types';
import { WidgetBuilder } from 'dynamic-adapter.dapplet-base.eth/build/widgets';
import {TwitterAdapter} from '../src/index';

// import { IButtonState, Button } from '..//src/button';
// import { IButtonStarterState, ButtonStarter } from '../src/button-starter';
// import { IPictureState, Picture } from '../src/picture';
// import { IAvatarState, Avatar } from '../src/avatar';
// import { IAvatarBadgeState, AvatarBadge } from '../src/avatar-badge';
// import { IUsernameBadgeState, UsernameBadge } from '../src/username-badge';
// import { ILabelState, Label } from '../src/label';
// import { Caption } from '../src/caption';
// import Starter from '../src/starter';


class DynamicAdapterMock implements IDynamicAdapter<any> {
  configure(config: { [contextName: string]: IWidgetBuilderConfig; }): void {

  }
  createWidgetFactory<T>(Widget: any): (config: { [state: string]: T; }) => (builder: WidgetBuilder, insPointName: string, order: number, contextNode: Element) => any {
    return (config: { [state: string]: T; }) => (builder: WidgetBuilder, insPointName: string, order: number, contextNode: Element) => null;
  }
  resetConfig(config: any, newConfig?: any): { $: (ctx: any, id: string) => any; } {
    return { $: () => null };
  }

  exports = {};

  attachConfig(config: any): { $: (ctx: any, id: string) => any; } {
    return { $: () => null };
  }
  detachConfig(config: any, featureId?: string): void {

  }
}

// jest.mock('../src/button');
// jest.mock('../src/button-starter');
// jest.mock('../src/picture');
// jest.mock('../src/avatar');
// jest.mock('../src/avatar-badge');
// jest.mock('../src/username-badge');
// jest.mock('../src/label');
// jest.mock('../src/caption');
// jest.mock('../src/starter');



// beforeEach(() => {
  
//   (Button as any).mockClear();
//   (ButtonStarter as any).mockClear();
//   (Picture as any).mockClear();
//   (Avatar as any).mockClear();
//   (AvatarBadge as any).mockClear();
//   (UsernameBadge as any).mockClear();
//   (Label as any).mockClear();
//   (Caption as any).mockClear();
//   (Starter as any).mockClear();

// });


test('adds 1 + 2 to equal 3', () => {

  const dynamicAdapter = new DynamicAdapterMock();

  const adapter = new TwitterAdapter(null);
  console.log(adapter.config);
  //expect(true).toBe(true);
});