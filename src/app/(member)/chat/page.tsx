'use client';

import React, { useState } from 'react';
import { useGetChatList } from '@/hooks/queries/chat/useGetChatList';
import { useRouter } from 'next/navigation';
import CommonHeader from '@/components/common/header/CommonHeader';
import BottomNavigationBar from '@/components/common/navigation-bar/BottomNavigationBar';

const ChatRoomList = () => {
  const [page, setPage] = useState(0);
  const size = 10; // 한 페이지당 채팅방 수
  const router = useRouter();

  const { data, isLoading, isError } = useGetChatList(page, size);

  const handleChatRoom = (chatRoomId: string) => {
    router.push(`/chatRoom/${chatRoomId}`);
  }

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>데이터를 불러오는 데 실패했습니다.</p>;

  return (
    <div>
      <CommonHeader label='채팅 🍒' />
        {data?.content.map((room) => (
          <div 
            key={room.chatRoomId}
            onClick={() => handleChatRoom(room.chatRoomId)}
            className='w-full h-24 p-2 text-xl flex justify-between items-center'
          >
            <p className='text-xl font-semibold'>{room.roomName} 예약</p>
            <p className='badge badge-lg bg-blue-300'>{room.status}</p>
          </div>
        ))}
        <BottomNavigationBar />
    </div>
  );
};

export default ChatRoomList;
