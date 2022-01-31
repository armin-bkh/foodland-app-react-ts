import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { cartItemType } from "../Components/Providers/cartProvider.type";
import Layout from "../Layout/Layout";

const FoodPage = () => {
  const [food, setFood] = useState<cartItemType | null>(null);
  const location = useLocation();
  const { id } = useParams();
  useEffect(() => {
    if (location.state) {
        console.log(location.state);
    } else {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(({ data }) => {
        console.log(data.meals[0]);
        const value = data.meals[0];
        const food = {
          name: value.strMeal,
          id: value.idMeal,
          image: value.strMealTumb,
        };
        setFood(food);
      })
      .catch((error) => console.log(error));
    }
  }, []);
  return (
    <Layout>
      <main className="main"></main>
    </Layout>
  );
};

export default FoodPage;
