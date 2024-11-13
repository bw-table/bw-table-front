import React from 'react';

interface FacilitySelectProps {
  facilities: string[];
  setFacilities: React.Dispatch<React.SetStateAction<string[]>>;
}

const FacilitySelect: React.FC<FacilitySelectProps> = ({ facilities, setFacilities }) => {
  const handleFacilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setFacilities((prevFacilities) => [...prevFacilities, value]);
    } else {
      setFacilities((prevFacilities) => prevFacilities.filter((facility) => facility !== value));
    }
  };

  return (
    <div className="mb-4 flex flex-col gap-3">
      <label className="block text-sm font-medium">편의시설 선택</label>
      <div className="grid grid-cols-3 gap-2 bg-gray-100 p-3 rounded-md">
        <label className="flex items-center">
          <input
            type="checkbox"
            value="PARKING"
            checked={facilities.includes("PARKING")}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          주차 가능
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="VALET"
            checked={facilities.includes("VALET")}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          발렛 가능
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="CORKAGE"
            checked={facilities.includes("CORKAGE")}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          콜키지 가능
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="WIFI"
            checked={facilities.includes("WIFI")}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          무선인터넷
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="NO_KIDS_ZONE"
            checked={facilities.includes("NO_KIDS_ZONE")}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          노키즈존
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="WELCOME_KIDS_ZONE"
            checked={facilities.includes("WELCOME_KIDS_ZONE")}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          웰컴키즈존
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="INFANT_FACILITIES"
            checked={facilities.includes("INFANT_FACILITIES")}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          유아시설
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="HIGHCHAIR"
            checked={facilities.includes("HIGHCHAIR")}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          아기의자
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="WAITING_AREA"
            checked={facilities.includes("WAITING_AREA")}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          대기공간
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="GROUP_USE"
            checked={facilities.includes("GROUP_USE")}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          단체 이용 가능
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="EVENT_SPACE"
            checked={facilities.includes("EVENT_SPACE")}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          대관 가능
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="PET_FRIENDLY"
            checked={facilities.includes("PET_FRIENDLY")}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          반려동물 동반
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="WHEELCHAIR_ACCESSIBLE"
            checked={facilities.includes("WHEELCHAIR_ACCESSIBLE")}
            onChange={handleFacilityChange}
            className="mr-2"
          />
          장애인 편의시설
        </label>
      </div>
    </div>
  );
};

export default FacilitySelect;
