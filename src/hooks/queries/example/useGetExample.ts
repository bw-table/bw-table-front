import { axiosDefault } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/endPoint';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

// 패칭 함수는 훅 밖에다 정의하여 export
export const getExample = async () => {
  const res = await axiosDefault.get(END_POINT.EXAMPLE);

  return res.data;
};

export const useGetExample = () => {
  const { data: example } = useQuery({
    queryKey: [QUERY_KEYS.EXAMPLE],
    queryFn: getExample,
  });

  return { example };
};
