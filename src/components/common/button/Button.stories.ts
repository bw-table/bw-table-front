import type {Meta, StoryObj} from '@storybook/react';
import Button from '@/components/common/button/Button';

const meta: Meta<typeof Button> = {
  title: 'example/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: '버튼',
  },
};
