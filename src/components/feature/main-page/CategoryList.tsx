import React from "react";
import CategoryItem from "./CategoryItem";
import { categories } from "./mainCategoryIcons";

const CategoryList: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center h-24 m-2" 
        >
          <CategoryItem
            icon={category.icon}
            label={category.label}
            badge={category.badge}
          />
        </div>
      ))}
    </div>
  );
};


export default CategoryList;
