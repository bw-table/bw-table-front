import CommonCalendar from '@/components/common/calendar/CommonCalendar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommonCalendar> = {
  title: 'common/CommonCalendar',
  component: CommonCalendar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommonCalendar>;

export const Default: Story = {
  args: {},
};
