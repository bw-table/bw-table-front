import React, { useState } from 'react';
import CommonNavigationBar from './CommonNavigationBar';
import { BsHouseFill, BsChatFill, BsCalendar2Heart, BsFillPersonFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

const BottomNavigationBar = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  const router = useRouter();

  const tabs = [
    { key: 'home', label: '', icon: <BsHouseFill />, route: '/' },
    { key: 'chat', label: '', icon: <BsChatFill />, route: '/chat' },
    { key: 'myDining', label: '', icon: <BsCalendar2Heart />, route: '/my-dining' },
    { key: 'myPage', label: '', icon: <BsFillPersonFill />, route: '/my-page' },
  ];

  const handleTabSelect = (key:string) => {
    setSelectedTab(key);
    const selectedTab = tabs.find(tab => tab.key === key);
    if (selectedTab && selectedTab.route) {
      router.push(selectedTab.route); // 라우팅 변경
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 p-4 bg-white border-t border-gray-300 max-w-[600px] mx-auto text-2xl">
      <CommonNavigationBar
        tabs={tabs}
        selectedTab={selectedTab}
        onSelectTab={handleTabSelect}
        variant="icon"
      />
    </div>
  );
};

export default BottomNavigationBar;