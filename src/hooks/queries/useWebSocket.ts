import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { tokenManager } from '@/utils/tokenManager';

interface Message {
  nickname: string;
  content: string;
  timestamp: number[];
}

const SOCKET_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/ws`;

export const useWebSocket = (chatRoomId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [stompClient, setStompClient] = useState<CompatClient | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // 비동기로 accessToken 가져오기
  useEffect(() => {
    const fetchToken = async () => {
      const token = await tokenManager.fetchHttpOnlyToken();
      setAccessToken(token);
    };

    fetchToken();
  }, []);

  useEffect(() => {
    if (!accessToken) return;

    const socket = new SockJS(SOCKET_URL);
    const client = Stomp.over(socket);

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    client.connect(
      headers,
      () => {
        console.log('Connected to WebSocket');
        client.subscribe(`/topic/chatrooms/${chatRoomId}`, (message) => {
          const parsedMessage = JSON.parse(message.body);
          setMessages((prev) => [...prev, parsedMessage]);
        });

        fetchPreviousMessages(chatRoomId, accessToken, setMessages);
      },
      (error: any) => {
        console.error('WebSocket connection error:', error);
      }
    );

    setStompClient(client);

    return () => {
      if (client && client.connected) {
        client.disconnect(() => {
          console.log('Disconnected from WebSocket');
        });
      }
    };
  }, [chatRoomId, accessToken]);

  const sendMessage = (content: string) => {
    if (stompClient?.connected) {
      stompClient.send(
        `/app/send/${chatRoomId}`,
        { 'content-type': 'application/json' },
        JSON.stringify({ content, timestamp: new Date().toISOString() })
      );
    }
  };

  return { messages, sendMessage };
};

const fetchPreviousMessages = async (
  chatRoomId: string,
  accessToken: string,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/chats/${chatRoomId}/messages`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const data = await response.json();
    setMessages(data.content || []);
  } catch (error) {
    console.error('Error fetching previous messages:', error);
  }
};
