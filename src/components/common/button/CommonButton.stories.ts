import CommonButton from '@/components/common/button/CommonButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommonButton> = {
  title: 'common/CommonButton',
  component: CommonButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommonButton>;

export const Primary: Story = {
  args: {
    children: '버튼',
  },
};
