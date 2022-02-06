import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "../FIlter/Filter";
import FoodsList from "./FoodsList/FoodsList";

const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const Menu = () => {
  const [allFoods, setAllFoods] = useState<any>([]);
  const [foods, setFoods] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(URL)
      .then(({ data }) => {
        console.log(data);
        setAllFoods(data.meals);
        setFoods(data.meals);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section className="md:col-span-2 xl:col-span-1 sticky top-24">
        <Filter search={search} />
      </section>
      <section className="md:col-span-3 xl:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <FoodsList foods={foods} error={error} loading={loading} />
      </section>
    </>
  );
};

export default Menu;
