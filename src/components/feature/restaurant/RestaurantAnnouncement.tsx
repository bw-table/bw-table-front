import React from 'react';
import { useGetAnnouncement } from '@/hooks/queries/restaurant/useGetAnnouncement';
import { AnnouncementFormData } from '@/types';
import Divider from '@/components/common/divider/CommonDivider';

interface AnnouncementListProps {
  restaurantId: number;
}

const RestaurantAnnouncementTab: React.FC<AnnouncementListProps> = ({ restaurantId }) => {
  const { announcementData, isAnnouncementLoading, isAnnouncementError, } = useGetAnnouncement(restaurantId);


  if (isAnnouncementLoading) {
    return <p>로딩 중...</p>;
  }

  if (isAnnouncementError) {
    return <p>공지사항을 가져오는 데 오류가 발생했습니다.</p>;
  }

  const announcements = Array.isArray(announcementData) ? announcementData : announcementData?.data;

  return (
    <Divider classNames="notice-list">
      {announcements && Array.isArray(announcements) && announcements.length > 0 ? (
        announcements.map((announcement: AnnouncementFormData) => (
          <div key={announcement.announcementId} className="p-4 border-b">
            <h2 className="font-semibold mb-2">
              {announcement.isEvent && (
                <span className="badge bg-yellow-300 text-yellow-800 font-semibold mr-2">
                  이벤트
                </span>
              )}
              {announcement.title}
            </h2>
            <p className="text-gray-500 text-sm">
              {new Date(announcement.createdAt).toLocaleDateString()}
            </p>
            <p className="mt-2">{announcement.content}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">공지사항이 없습니다.</p>
      )}
    </Divider>
  );
};

export default React.memo(RestaurantAnnouncementTab);
