import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import App, { Props } from './App';

export default {
  title: 'Foo',
} as Meta;

const Template: Story<Props> = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'foo',
}
