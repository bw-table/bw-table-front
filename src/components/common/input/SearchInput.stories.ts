import SearchInput from '@/components/common/input/SearchInput';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchInput> = {
  title: 'common/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholder: '찾고 있는 맛집이 있나요?',
    onClick: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
};
