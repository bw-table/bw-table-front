import { axiosAuth } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { DB } from '@/mocks/db/db';

// 목데이터 사용중
// const fetchAPI = async (restaurantId: number) => {
//   const res = await axiosAuth.get(`${END_POINT.RESTAURANTS}/${restaurantId}/announcements`);
//   return res.data;
// };

export const useGetAnnouncement = (restaurantId: number) => {
  const {
    data: announcementData,
    isLoading: isAnnouncementLoading,
    isSuccess: isAnnouncementDataSuccess,
    isError: isAnnouncementError,
  } = useQuery({
    queryKey: [QUERY_KEYS.REVIEWS, restaurantId],
    queryFn: () => {
      return DB.announcements.filter(announcement => announcement.restaurantId === restaurantId);
    },
  });


  if (isAnnouncementLoading) {
    console.log('데이터 가져오기 성공:', announcementData);
  }

  return {
    announcementData,
    isAnnouncementLoading,
    isAnnouncementDataSuccess,
    isAnnouncementError,
  };
};
