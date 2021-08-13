import React, { useEffect, useState } from 'react';
import { bridge } from './dappletBridge';
import { Accordion, Card, Header } from 'semantic-ui-react';
import Widget from './Widget';
import dappletData from './dappletData';

export default () => {
  const [activeIndexes, changeActiveItemes] = useState<string[]>([]);

  useEffect(() => {
    bridge.onData((data) => {
      if (data.index) {
        refs[data.index].current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  }, []);

  const handleClick = (e: any, titleProps: any) => {
    const { index } = titleProps;
    activeIndexes.includes(index)
      ? changeActiveItemes(activeIndexes.filter(x => x !== index))
      : changeActiveItemes([...activeIndexes, index]);
  };

  const goToContextPage = (e: any, url: string, index: string) => {
    e.preventDefault();
    bridge.forceOverlay(index);
    window.open(url, '_parent');
  };

  const refs: any = {};
  dappletData().forEach((value, index) =>
    value.widgets.forEach((v, i) => refs[index + '/' + i] = React.createRef()));

  return (
    <div className='overlay-container'>
      {false && <Header as='h3'>Contexts</Header>}
      {dappletData().map((context, ctxId) => (
        <Card key={ctxId} style={{ width: '100%' }}>
          <Card.Content>
            <Card.Header>{context.name}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              {context.description}
              {context.link && 
                <button
                  className='link'
                  onClick={(e) => goToContextPage(e, context.link!, ctxId + '/' + 0)}
                >
                  this page
                </button>}
            </Card.Description>
            <Accordion exclusive={false} fluid>
              {context.widgets.map((widget: any, i: number) => (
                <Widget
                  index={ctxId + '/' + i}
                  key={ctxId + '/' + i}
                  name={widget.name}
                  text={widget.text}
                  activeIndexes={activeIndexes}
                  handleClick={handleClick}
                  refs={refs}
                />
              ))}
            </Accordion>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};
