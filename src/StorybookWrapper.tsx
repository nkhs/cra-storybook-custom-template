import React from 'react';
import { Story } from '@storybook/react/types-6-0';

interface CustomTemplateProps {
  Component: React.FC;
  hasPadding?: boolean;
}

const CustomTemplate: Story<CustomTemplateProps> = (props) => {
  const { Component } = props;

  return (
    <div style={{ padding: props.hasPadding ? '2rem' : '0' }}>
      <Component />
    </div>
  );
};

export default CustomTemplate;
