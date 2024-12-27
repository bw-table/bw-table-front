'use client';

import React, { useState } from 'react';
import { useWebSocket } from '@/hooks/queries/useWebSocket';
import { useParams } from 'next/navigation';
import CommonInput from '@/components/common/input/CommonInput';
import CommonButton from '@/components/common/button/CommonButton';
import CommonHeader from '@/components/common/header/CommonHeader';

const ChatRoom: React.FC = () => {
  const { id: chatRoomId } = useParams();
  const [inputMessage, setInputMessage] = useState('');
  const { messages, sendMessage } = useWebSocket(chatRoomId as string);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      sendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <>
      {/* Header */}
      <CommonHeader label="" />    
      <div className="flex flex-col h-screen">

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-bubble chat-end mb-4 p-2 rounded-lg text-black ${
                index % 2 === 0 ? 'bg-blue-100' : 'bg-gray-100'
              }`}
            >
              {message.content}{' '}
              {/* <small>{new Date(message.timestamp.join('-')).toLocaleString()}</small> */}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex gap-2 p-4 bg-white border-t">
          <CommonInput
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="메시지를 입력하세요"
            className="flex-1"
          />
          <CommonButton onClick={handleSendMessage} classNames="w-20">
            전송
          </CommonButton>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
