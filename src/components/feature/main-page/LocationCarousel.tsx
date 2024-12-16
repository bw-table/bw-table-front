import React from "react";
import { locations } from "./mainCategoryIcons";

const LocationCarousel: React.FC = () => {
  return (
    <div className="p-4">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">어디로 가시나요?</h2>
      {/* Location List */}
      <div className="flex overflow-x-auto space-x-4">
        {locations.map((location, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Icon */}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center overflow-hidden relative ${
                location.label === "내주변" ? "bg-mainColor-500 bg-opacity-10" : "bg-gray-200"
              }`}
            >
              {/* Icon or Image */}
              {typeof location.icon === "string" ? (
                <img
                  src={location.icon}
                  alt={location.label}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-mainColor-500 text-lg">{location.icon}</div>
              )}

              {/* Overlay (Exclude for "내주변") */}
              {location.label !== "내주변" && (
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              )}

              {/* Label */}
              <p
                className={`absolute text-xs font-medium ${
                  location.label === "내주변"
                    ? "text-mainColor-500 bottom-2"
                    : "text-white inset-0 flex items-center justify-center"
                }`}
              >
                {location.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationCarousel;
