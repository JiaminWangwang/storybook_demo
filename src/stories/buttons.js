import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import markdown from './test.md';

storiesOf('Buttons', module)
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button111</Button>
  ),{
    notes:{markdown}   // 将会渲染 markdown 内容
  })