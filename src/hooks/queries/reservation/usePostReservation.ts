import { useMutation } from '@tanstack/react-query';
import { END_POINT } from '@/constants/endPoint';
import { axiosAuth } from '@/api/axiosInstance';
import { ReservationData } from '@/types/request';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { completeReservation } from './useGetReservationSuccess';
import useToast from '../useToast';

declare const window: any;

const fetchAPI = async (data: ReservationData) => {
  const response = await axiosAuth.post(END_POINT.RESERVATIONS, data);
  return response.data;
};

export const usePostReservation = () => {
  const router = useRouter();
  const { toastSuccess, toastError } = useToast();
  const [isIMPReady, setIsIMPReady] = useState(false);

  useEffect(() => {
    // 아임포트 스크립트 로드
    if (!window.IMP) {
      const script = document.createElement('script');
      script.src = 'https://cdn.iamport.kr/v1/iamport.js';
      script.async = true;
      script.onload = () => {
        console.log('아임포트 스크립트 로드 완료');
        setIsIMPReady(true);
      };
      script.onerror = () => {
        console.error('아임포트 스크립트 로드 실패');
      };
      document.body.appendChild(script);
    } else {
      setIsIMPReady(true);
    }
  }, []);

  const { mutate: submitReservation, isPending, isSuccess, isError } = useMutation({
    mutationFn: fetchAPI,
    onSuccess: (data) => {
      console.log('예약 성공:', data);
      const reservationToken = data.reservationToken;

      if (reservationToken && isIMPReady) {
        const IMP = window.IMP;
        IMP.init('imp45115062');

        IMP.request_pay(
          {
            pg: 'html5_inicis',
            merchant_uid: `order_${new Date().getTime()}`,
            name: data.name,
            amount: data.amount,
            buyer_email: data.buyerEmail,
            buyer_name: data.buyerName,
            buyer_tel: data.buyerTel,
          },
          async (paymentResponse: any) => {
            if (paymentResponse.success) {
              try {
                await completeReservation(reservationToken, paymentResponse.imp_uid);
                router.push('/reservations-success');
                toastSuccess('예약에 성공하였습니다 🍴')
              } catch (error) {
                console.error('결제 완료 처리 실패:', error);
                alert('결제를 완료할 수 없습니다.');
              }
            } else {
              alert(`결제 실패: ${paymentResponse.error_msg}`);
            }
          }
        );
      } else {
        alert('결제창 준비가 완료되지 않았습니다.');
      }
    },
    onError: (error) => {
      console.error('예약 요청 실패:', error);
      toastError('예약에 실패하였습니다 💦');
    },
  });

  return {
    submitReservation,
    isPending,
    isSuccess,
    isError,
  };
};
