import CommonHeader from '@/components/common/header/CommonHeader'; // 경로는 프로젝트 구조에 맞게 수정
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommonHeader> = {
  title: 'common/CommonHeader',
  component: CommonHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommonHeader>;

export const Default: Story = {
  args: {
    label: '뒤로 가기',
  },
};

export const WithoutLabel: Story = {
  args: {
    // label을 아예 전달하지 않음
  },
};

export const CustomLabel: Story = {
  args: {
    label: '커스텀 제목',
  },
};

