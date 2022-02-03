import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCart, useCartActions } from "../Providers/CartProvider";
import { cartItemType } from "../Providers/cartProvider.type";
import checkExistFood from "../Utils/checkExistFood";
import { TiPlusOutline, TiMinusOutline } from "react-icons/ti";
import { useToasts } from "../Providers/ToastProvider";

const URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const FoodDetail = () => {
  const { cart } = useCart();
  const { addHandler } = useCartActions();
  const [foodDetial, setFoodDetail] = useState<cartItemType>(
    {} as cartItemType
  );
  const [count, setCount] = useState<number>(1);
  const location: any = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToast } = useToasts();

  useEffect(() => {
    if (location.state) {
      const { food } = location.state;
      setFoodDetail(food);
    } else {
      axios
        .get(`${URL}${id}`)
        .then(({ data }) => {
            console.log(data);
            
          const value = data.meals[0];
          const food = {
            name: value.strMeal,
            id: value.idMeal,
            image: value.strMealThumb,
          };
          setFoodDetail(food);
        })
        .catch((error) => navigate("/foods", { replace: true }));
    }
  }, []);

  const addToCarthandler = () => {
    addHandler({ ...foodDetial, quantity: count });
    setCount(1);
    if (!checkExistFood(cart, foodDetial.id)) {
      addToast(`${foodDetial.name} successfuly added`, {
        appearance: "success",
      });
    } else addToast(`${foodDetial.name} successfuly incremented`);
  };

  return (
    <section className="shadow rounded-lg flex flex-col md:flex-row">
      <div className="w-full md:max-w-sm lg:max-w-md rounded-sm overflow-hidden mb-12 md:mb-0">
        <img
          className="w-full h-full hover:scale-150 hover:skew-x-6 transition-all"
          src={foodDetial?.image}
          alt={foodDetial?.name}
        />
      </div>
      <div className="flex-between flex-col p-3 flex-1">
        <h1 className="text-3xl lg:text-5xl mb-7">{foodDetial?.name}</h1>
        <div className="w-full flex-center flex-col">
          <div className="mb-5 flex-center">
            <button
              onClick={() =>
                setCount((prevCount) =>
                  prevCount > 1 ? prevCount - 1 : prevCount
                )
              }
              className={`incDecBtn ${count === 1 && 'opacity-50 cursor-not-allowed'}`}
            >
              <TiMinusOutline />
            </button>
            <span className="mx-3 text">{count}</span>
            <button
              onClick={() => setCount((prevCount) => prevCount + 1)}
              className="incDecBtn"
            >
              <TiPlusOutline />
            </button>
          </div>
          <button
            onClick={addToCarthandler}
            className="bg-red-400 text-white block w-full py-3 rounded-md text"
          >
            {checkExistFood(cart, foodDetial.id) ? "In cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FoodDetail;
