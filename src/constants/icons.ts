import { FaParking, FaCar, FaWifi, FaBabyCarriage, FaChair, FaDog, FaWheelchair, FaBaby } from 'react-icons/fa';
import { HiUserGroup } from "react-icons/hi";
import { MdEvent, MdAirlineSeatLegroomExtra, MdOutlineDoNotTouch } from 'react-icons/md';
import { IoMdWine } from "react-icons/io";

export type FacilityKey = 
  | 'PARKING'
  | 'VALET'
  | 'CORKAGE'
  | 'WIFI'
  | 'NO_KIDS_ZONE'
  | 'WELCOME_KIDS_ZONE'
  | 'INFANT_FACILITIES'
  | 'HIGHCHAIR'
  | 'WAITING_AREA'
  | 'GROUP_USE'
  | 'EVENT_SPACE'
  | 'PET_FRIENDLY'
  | 'WHEELCHAIR_ACCESSIBLE';

  interface FacilityInfo {
    name: string;
    icon: React.FC<{ className?: string }>; // className을 받을 수 있도록 수정
  }
  
export const FACILITY_ICONS: Record<FacilityKey, FacilityInfo> = {
  PARKING: {
    name: '주차 가능',
    icon: FaParking,
  },
  VALET: {
    name: '발렛 가능',
    icon: FaCar,
  },
  CORKAGE: {
    name: '콜키지 가능',
    icon: IoMdWine,
  },
  WIFI: {
    name: '와이파이',
    icon: FaWifi,
  },
  NO_KIDS_ZONE: {
    name: '노키즈존',
    icon: MdOutlineDoNotTouch,
  },
  WELCOME_KIDS_ZONE: {
    name: '웬컴 키즈존',
    icon: FaBaby,
  },
  INFANT_FACILITIES: {
    name: '유아시설',
    icon: FaBabyCarriage,
  },
  HIGHCHAIR: {
    name: '아기의자',
    icon: FaChair,
  },
  WAITING_AREA: {
    name: '대기공간',
    icon: MdAirlineSeatLegroomExtra,
  },
  GROUP_USE: {
    name: '단체 이용가능',
    icon: HiUserGroup,
  },
  EVENT_SPACE: {
    name: '대관 가능',
    icon: MdEvent,
  },
  PET_FRIENDLY: {
    name: '반려동물 동반',
    icon: FaDog,
  },
  WHEELCHAIR_ACCESSIBLE: {
    name: '장애인 편의시설',
    icon: FaWheelchair,
  },
} as const;