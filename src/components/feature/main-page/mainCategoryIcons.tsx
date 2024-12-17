import { BsFillCursorFill } from "react-icons/bs";

export const categories = [
  { icon:
      <img
        src="/assets/stars.png"
        alt="이달의 맛집"
        className="w-12 h-12"
      />,
      label: "이달의 맛집",
      badge: "N",
      key: "top-of-the-month"
  },
  { icon:
    <img
      src="/assets/meeting.png"
      alt="모임 예약"
      className="w-12 h-12"
  />,
    label: "모임 예약",
    key: "for-group"
  },
  { icon:
    <img
      src="/assets/special.png"
      alt="스페셜 혜택"
      className="w-12 h-12"
  />,
    label: "스페셜 혜택",
    key: "with-event"
  },
  { icon:
    <img
      src="/assets/hidden-space.png"
      alt="히든플레이스"
      className="w-12 h-12"
  />,
    label: "히든플레이스",
    key: "hidden-place"
  },
  { icon:
      <img
        src="/assets/omakase.png"
        alt="오마카세"
        className="w-12 h-12"
    />,
    label: "오마카세",
    key: "omakase"
  },
  { icon:     
      <img
        src="/assets/chinese.png"
        alt="중식"
        className="w-12 h-12"
      />,
      label: "중식",
      key: "chinese"
    },
  { icon:
      <img
      src="/assets/fine-dining.png"
      alt="파인다이닝"
      className="w-12 h-12"
    />,
    label: "파인다이닝",
    key: "fine-dining" 
  },
  { icon:
    <img
      src="/assets/pasta.png"
      alt="파스타"
      className="w-12 h-12"
    />,
    label: "파스타",
    key: "pasta" 
  },
];

export const locations = [
  { label: "내주변", icon: <BsFillCursorFill /> },
  { label: "압구정\n청담", icon: "/assets/carouselImage/BWT1.jpg" },
  { label: "부산", icon: "/assets/carouselImage/BWT2.jpg" },
  { label: "잠실\n송파", icon: "/assets/carouselImage/BWT3.webp" },
  { label: "이태원\n한남", icon: "/assets/carouselImage/BWT4.jpg" },
  { label: "성수", icon: "/assets/carouselImage/BWT1.jpg" },
  { label: "광화문", icon: "/assets/carouselImage/BWT2.jpg" },
  { label: "용산", icon: "/assets/carouselImage/BWT3.webp" },
  { label: "신사", icon: "/assets/carouselImage/BWT4.jpg" },
  { label: "강남", icon: "/assets/carouselImage/BWT1.jpg" },
  { label: "여의도", icon: "/assets/carouselImage/BWT1.jpg" },
  { label: "을지로", icon: "/assets/carouselImage/BWT2.jpg" },
];