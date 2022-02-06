import axios from "axios";
import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import FoodItem from "../FoodItem/FoodItem";
import { FoodItemSkeleton } from "../LoadingSkeleton/FoodItemSkeleton/FoodItemSkeleton";

const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const FoodsList = () => {
  const { data, error, loading } = useFetch(URL);

  let returnValue;
  if (!error && data) {
    returnValue = data.meals.map((food: any) => (
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
