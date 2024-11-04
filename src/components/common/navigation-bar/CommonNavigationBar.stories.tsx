import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CommonNavigationBar from './CommonNavigationBar';
import { BsCalendar2Heart, BsChatFill, BsFillPersonFill, BsHouseFill } from 'react-icons/bs';

const meta: Meta<typeof CommonNavigationBar> = {
  title: 'common/NavigationBar',
  component: CommonNavigationBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommonNavigationBar>;

// 텍스트 스타일 네비게이션 바
export const TextVariant: Story = {
  render: (args) => {
    const [selectedTab, setSelectedTab] = useState('home');

    const handleTabSelect = (key: string) => setSelectedTab(key);

    return (
      <div>
        <CommonNavigationBar
          {...args}
          selectedTab={selectedTab}
          onSelectTab={handleTabSelect}
        />
        <div className="mt-4">
          <p className="text-center">
            Selected Tab: <span className="font-bold">{selectedTab}</span>
          </p>
        </div>
      </div>
    );
  },
  args: {
    tabs: [
      { key: 'home', label: '홈' },
      { key: 'menu', label: '메뉴' },
      { key: 'reviews', label: '리뷰' },
      { key: 'info', label: '매장정보' },
    ],
    variant: 'text',
  },
};

// 아이콘 스타일 네비게이션 바
export const IconVariant: Story = {
  render: (args) => {
    const [selectedTab, setSelectedTab] = useState('home');

    const handleTabSelect = (key: string) => setSelectedTab(key);

    return (
      <div>
        <CommonNavigationBar
          {...args}
          selectedTab={selectedTab}
          onSelectTab={handleTabSelect}
        />
        <div className="mt-4">
          <p className="text-center">
            Selected Tab: <span className="font-bold">{selectedTab}</span>
          </p>
        </div>
      </div>
    );
  },
  args: {
    tabs: [
      { key: 'home', label: '', icon: <BsHouseFill /> },
      { key: 'chat ', label: '', icon: <BsChatFill /> },
      { key: 'calendar', label: '', icon: <BsCalendar2Heart /> },
      { key: 'myPage', label: '', icon: <BsFillPersonFill /> },
    ],
    variant: 'icon',
  },
};