import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';

interface ChatRoom {
  chatRoomId: string;
  roomName: string;
  status: string; 
  reservationId: number;
  memberId: number;
  restaurantId: number;
}

interface ChatRoomsResponse {
  content: ChatRoom[]; 
}

// API 요청 함수
const fetchAPI = async (page: number, size: number): Promise<ChatRoomsResponse> => {
  const response = await axiosAuth.get(END_POINT.GUEST_CHAT_LIST, {
    params: {
      page,
      size,
    },
  });
  return response.data;
};

// 채팅방 리스트를 가져오는 커스텀 훅
export const useGetChatList = (page: number = 0, size: number = 10) => {
  return useQuery({
    queryKey: ['chatRooms', page, size],
    queryFn: () => fetchAPI(page, size),
  });
};
