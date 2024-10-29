import CommonInput from '@/components/common/input/CommonInput';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommonInput> = {
  title: 'common/CommonInput',
  component: CommonInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommonInput>;

export const Default: Story = {
  args: {
    variant: 'default',
    classNames: '',
    type: 'text',
    placeholder: '텍스트를 입력하세요',
    required: false,
    disable: false,
    maxLength: 50,
    readOnly: false,
    onClick: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
};
