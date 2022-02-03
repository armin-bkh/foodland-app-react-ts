import axios from "axios";
import { useEffect, useState } from "react";
import FoodItem from "../FoodItem/FoodItem";

const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const FoodsList = () => {
  const [allFoods, setAllFoods] = useState<any[] | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => {
        setAllFoods(data.meals);
        console.log(data);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {!error && allFoods ? (
        allFoods.map((food) => <FoodItem key={food.idMeal} food={food} />)
      ) : (
        <p>{error}</p>
      )}
    </>
  );
};

export default FoodsList;
