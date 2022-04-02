import React from 'react';
import { storiesOf } from '@storybook/react';
import MyComponent from '../components/my_component';

storiesOf('MyComponent', module)
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('without props', () => <MyComponent />)
  .add('with some props', () => <MyComponent text="The Comp" />);