import React from 'react';
import { useGetReviewList } from '@/hooks/queries/restaurant/useGetReviewList';
import { ReviewFormData } from '@/types';
import { AiFillStar } from 'react-icons/ai';
import Divider from '@/components/common/divider/CommonDivider';

interface ReviewListProps {
  restaurantId: number;
}

const RestaurantReviewTab: React.FC<ReviewListProps> = ({ restaurantId }) => {
  const { reviewData, isReviewLoading, isReviewError } = useGetReviewList(restaurantId);

  if (isReviewLoading) {
    return <p>로딩 중...</p>;
  }

  if (isReviewError) {
    return <p>리뷰를 가져오는 데 오류가 발생했습니다.</p>;
  }

  return (
    <Divider classNames="review-list">
      {reviewData?.map((review: ReviewFormData) => (
        <div key={review.id} className="p-4 border-b">
          <div className="flex gap-2 items-center mb-2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="User Avatar"
              className="avatar w-10 h-10 rounded-full"
            />
            <p className="font-semibold">{review.userId}</p>
          </div>                        
            <div className="my-4">
              <div className="flex items-center justify-between">
                <div className='flex'>
                  <AiFillStar className="text-yellow-500" />
                  <span className="text-sm font-bold  ml-1">{review.rating}</span>
                </div>
                <p className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          {review.images && review.images.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {review.images.map((img, index) => (
                <img key={index} src={img} alt={`Review Image ${index}`} className="w-full h-auto rounded" />
              ))}
            </div>
          )}
          <div className="mb-2">
            <p>{review.content}</p>
          </div>
        </div>
      ))}
    </Divider>
  );
};

export default React.memo(RestaurantReviewTab);