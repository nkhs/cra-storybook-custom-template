import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import App from './App';
import CustomTemplate from './StorybookWrapper';

export default {
  title: 'App',
} as Meta;

export const Primary = CustomTemplate.bind({});
Primary.args = {
  hasPadding: true,
  Component: App,
};
