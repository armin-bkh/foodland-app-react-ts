import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";

interface foodItemProps {
  food: any;
}

const FoodItem = ({ food }: foodItemProps) => {
  console.log(food);
  return (
    <figure className="shadow rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group">
      <div className=" h-2/3 cursor-pointer overflow-hidden">
        <Link to={`${food.idMeal}`} state={food}>
          <img
            className="w-fix group-hover:scale-150 group-hover:skew-x-6 transition-all duration-700"
            src={food?.strMealThumb}
            alt={food?.strMeal}
          />
        </Link>
      </div>
      <figcaption className="p-3 flex-1 text">{food?.strMeal}</figcaption>
      <button className="bg-red-400 py-3 text-white flex-center relative group">
        Add to cart{" "}
        <span className="ml-3 absolute transition-all -right-10 group-hover:right-16 duration-300">
          <BsFillCartPlusFill />
        </span>
      </button>
    </figure>
  );
};

export default FoodItem;
