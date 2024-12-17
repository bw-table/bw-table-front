import React from "react";
import CategoryItem from "./CategoryItem";
import { categories } from "./mainCategoryIcons";
import { useRouter } from "next/navigation";

const CategoryList: React.FC = () => {

  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/main/category/${category}`);
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {categories.map((category) => (
        <div
          key={category.key}
          className="flex flex-col items-center justify-center h-24 m-2" 
          onClick={() => handleCategoryClick(category.key)}
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
