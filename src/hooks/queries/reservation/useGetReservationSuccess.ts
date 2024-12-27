import { axiosAuth } from "@/api/axiosInstance";
import { END_POINT } from "@/constants/endPoint";

export const completeReservation = async (reservationToken: string, impUid: string) => {
  try {
    const response = await axiosAuth.post(END_POINT.RESERVATION_SUCCESS, {
      reservationToken,
      impUid,
    });

    alert('예약이 성공적으로 완료되었습니다.');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('결제 완료 요청 실패:', error);
    alert('결제를 완료할 수 없습니다.');
    throw error;
  }
};