import React from 'react';
import { AnnouncementFormData, RestaurantDetailRequestType } from '@/types';
import Divider from '@/components/common/divider/CommonDivider';

interface AnnouncementListProps {
  announcements: RestaurantDetailRequestType['announcements'];
}

const RestaurantAnnouncementTab: React.FC<AnnouncementListProps> = ({ announcements }) => {

  return (
    <Divider>
      {announcements?.map((announcement: AnnouncementFormData) => (
          <div key={announcement.id} className="p-4 border-b">
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
      }
    </Divider>
  );
};

export default RestaurantAnnouncementTab;
