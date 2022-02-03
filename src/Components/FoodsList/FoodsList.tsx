import axios from "axios";
import { useEffect, useState } from "react";
import FoodItem from "../FoodItem/FoodItem";
import { FoodItemSkeleton } from "../LoadingSkeleton/FoodItemSkeleton/FoodItemSkeleton";

const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const FoodsList = () => {
  const [allFoods, setAllFoods] = useState<any[] | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(URL)
      .then(({ data }) => {
        setAllFoods(data.meals);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  let returnValue;
  if (!error && allFoods) {
    returnValue = allFoods.map((food) => (
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
