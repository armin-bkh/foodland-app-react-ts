import axios from "axios";
import { useEffect, useState } from "react";

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
    <section>
      {!error && allFoods ? (
        allFoods.map((food) => <div key={food?.idMeal}>{food?.strMeal}</div>)
      ) : (
        <p>{error}</p>
      )}
    </section>
  );
};

export default FoodsList;
