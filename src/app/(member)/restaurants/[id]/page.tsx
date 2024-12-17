import RestaurantDetail from '@/components/feature/restaurant/RestaurantDetail';

interface Props {
  params: {
    id: string;
  };
}
export default async function RestaurantPage({ params }: Props) {
  const { id } = await params;
  const restaurantId = Number(id);

  if (isNaN(restaurantId)) {
    return <div>유효하지 않은 레스토랑 ID입니다.</div>;
  }

  return <RestaurantDetail restaurantId={restaurantId} />;
}