import axios from "axios";
import React, { useEffect, useState } from "react";
import Filter from "../FIlter/Filter";
import { useToasts } from "../Providers/ToastProvider";
import FoodsList from "./FoodsList/FoodsList";

const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const Menu = () => {
  const [allFoods, setAllFoods] = useState<any>([]);
  const [foods, setFoods] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const { addToast } = useToasts();

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

  useEffect(() => {
    if (!search) setFoods(allFoods);
  }, [search]);

  const changeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const searchFoodHandler = () => {
    if (!search) setFoods(allFoods);
    else {
      const filteredFoods = allFoods.filter((item: any) =>
        item.strMeal.toLowerCase().includes(search.toLowerCase())
      );
      if (filteredFoods.length === 0) {
        addToast("sorry we haven't that food...", { appearance: "error" });
      }
      setFoods(filteredFoods);
    }
  };

  return (
    <>
      <section className="md:col-span-2 xl:col-span-1 sticky top-24">
        <Filter
          search={search}
          onChange={changeSearchHandler}
          handleSearch={searchFoodHandler}
        />
      </section>
      {search && foods.length === 0 ? (
        <p className="text-3xl col-span-3 text-red-400">
          sorry we haven't that food...
        </p>
      ) : (
        <section className="md:col-span-3 xl:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <FoodsList foods={foods} error={error} loading={loading} />
        </section>
      )}
    </>
  );
};

export default Menu;
