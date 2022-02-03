import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useCart, useCartActions } from "../Providers/CartProvider";
import checkExistFood from "../Utils/checkExistFood";
import { useToasts } from "../Providers/ToastProvider";

interface foodItemProps {
  food: any;
}

const FoodItem = ({ food }: foodItemProps) => {
  const { cart } = useCart();
  const { addHandler } = useCartActions();
  const { addToast } = useToasts();

  const incrementFoodHandler = () => {
    const newFood = {
      id: food.idMeal,
      name: food.strMeal,
      image: food.strMealThumb,
      quantity: 1,
    };
    addHandler(newFood);
    if (!checkExistFood(cart, food.idMeal)) {
      addToast(`${food.strMeal} successfuly added`, { appearance: "success" });
    } else
      addToast(`${food.strMeal} successfuly incremented`, {
        appearance: "info",
      });
  };

  return (
    <figure className="shadow rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group">
      <div className=" h-2/3 cursor-pointer overflow-hidden">
        <Link
          to={`food-${food.idMeal}`}
          state={{
            id: food.idMeal,
            name: food.strMeal,
            image: food.strMealThumb,
          }}
        >
          <img
            loading="lazy"
            className="w-fix group-hover:scale-150 group-hover:skew-x-6 transition-all duration-700"
            src={food?.strMealThumb}
            alt={food?.strMeal}
          />
        </Link>
      </div>
      <figcaption className="p-3 flex-1 text">{food?.strMeal}</figcaption>
      <button
        onClick={incrementFoodHandler}
        className="bg-red-400 py-3 text-white flex-center relative group"
      >
        {!checkExistFood(cart, food.idMeal) ? "Add to cart" : "In cart"}
        <span className="ml-3 absolute transition-all -right-10 group-hover:right-16 duration-300">
          <BsFillCartPlusFill />
        </span>
      </button>
    </figure>
  );
};

export default FoodItem;
