import React from "react";

interface CategoryItemProps {
  icon: React.ReactNode;
  label: string;
  badge?: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, label, badge }) => {
  return (
    <div className="flex flex-col items-center justify-center relative gap-2">
      <div className="icon">{icon}</div>
      {badge && (
        <span className="badge absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
          {badge}
        </span>
      )}
      <p className="text-sm mt-2">{label}</p>
    </div>
  );
};

export default CategoryItem;
