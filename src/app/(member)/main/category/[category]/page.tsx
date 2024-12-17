import React from 'react';
import RestaurantCategory from '@/components/feature/main-page/RestaurantCategory';

interface PageProps {
  params: { category: string };
}

export default async function Page({ params }: PageProps) {
  const category = await params.category;

  return (
    <div>
      {/* 클라이언트 컴포넌트를 렌더링 */}
      <RestaurantCategory category={category} />
    </div>
  );
}
