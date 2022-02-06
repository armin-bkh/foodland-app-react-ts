import FoodItem from "../FoodItem/FoodItem";
import { FoodItemSkeleton } from "../../LoadingSkeleton/FoodItemSkeleton/FoodItemSkeleton";


interface foodsListProps {
  foods: any;
  error: string;
  loading: boolean;
}

const FoodsList = ({ foods, error, loading }: foodsListProps) => {
  let returnValue;
  if (!error && foods) {
    returnValue = foods.map((food: any) => (
      <FoodItem key={food.idMeal} food={food} />
    ));
  }
  if (loading) {
    returnValue = Array(24)
      .fill(24)
      .map((_, index) => <FoodItemSkeleton key={index} />);
  }
  if (error) {
    returnValue = <p>{error}</p>;
  }
  return <>{returnValue}</>;
};

export default FoodsList;
