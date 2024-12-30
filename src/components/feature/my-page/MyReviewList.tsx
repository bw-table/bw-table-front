import React from 'react';
import { ReviewRequestType } from '@/types';
import Divider from '@/components/common/divider/CommonDivider';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { CATEGORY } from '@/constants/restaurantCategory';
import dayjs from 'dayjs';

interface MyReviewListProps {
  reviews: { content: ReviewRequestType[] } | null;
}

const MyReviewList: React.FC<MyReviewListProps> = ({ reviews }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<AiFillStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<AiOutlineStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <Divider classNames="mx-auto p-4">
      {reviews && Array.isArray(reviews.content) && reviews.content.length > 0 ? (
        reviews.content.map((review: ReviewRequestType) => (
          <div
            key={review.id}
            className="mb-6 p-4 shadow rounded-lg border border-gray-200"
          >
            {/* 레스토랑 정보 */}
            <div className="mb-3 flex justify-between">
              <h2 className="text-lg font-semibold">{review.restaurantName}</h2>
              <p className="text-sm text-gray-600">
              {CATEGORY[review.restaurantCategory] || '카테고리 없음'}
              </p>
            </div>
           {/* 리뷰 이미지 */}
            {review.images.length > 0 && (
              <div className="flex gap-2 mb-3 overflow-x-auto">
                {review.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Review ${review.id} Image ${index + 1}`}
                    className="w-60 h-60 object-cover rounded"
                  />
                ))}
              </div>
            )}
            {/* 리뷰 평점 및 날짜 */}
            <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex">{renderStars(review.rating)}</div>
              <span>{dayjs(review.createdAt).format('YYYY-MM-DD')}</span>
            </div>
            {/* 리뷰 내용 */}
            <p className="my-3 text-gray-800 text-lg">{review.content}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">등록된 리뷰가 없습니다.</p>
      )}
    </Divider>
  );
};

export default MyReviewList;
