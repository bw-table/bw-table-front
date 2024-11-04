// src/components/common/Divider.stories.tsx

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CommonDivider from './CommonDivider';

const meta: Meta<typeof CommonDivider> = {
  title: 'common/Divider',
  component: CommonDivider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommonDivider>;

export const DefaultBox: Story = {
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <CommonDivider {...args} />
    </div>
  ),
  args: {
    children: <p>🛠️박스 Divider🛠️</p>,
  },
};
