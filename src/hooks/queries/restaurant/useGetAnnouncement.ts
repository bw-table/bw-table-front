import { axiosAuth } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/queryKeys';


const fetchAPI = async (restaurantId: number) => {
  const res = await axiosAuth.get(`${END_POINT.RESTAURANTS}/${restaurantId}/announcements`);
  return res.data;
};

export const useGetAnnouncement = (restaurantId: number) => {
  const {
    data: announcementData,
    isLoading: isAnnouncementLoading,
    isSuccess: isAnnouncementDataSuccess,
    isError: isAnnouncementError,
  } = useQuery({
    queryKey: [QUERY_KEYS.ANNOUNCEMENTS, restaurantId],
    queryFn: () => fetchAPI(restaurantId),
  });


  if (isAnnouncementDataSuccess) {
    console.log('공지 가져오기 성공:', announcementData);
  }

  return {
    announcementData,
    isAnnouncementLoading,
    isAnnouncementDataSuccess,
    isAnnouncementError,
  };
};
