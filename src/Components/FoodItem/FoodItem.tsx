import { Link } from "react-router-dom";

interface foodItemProps {
  food: any;
}

const FoodItem = ({ food }: foodItemProps) => {
  console.log(food);
  return (
    <figure className="shadow rounded-lg overflow-hidden flex flex-col">
      <div className=" h-2/3 cursor-pointer">
        <Link to={`${food.idMeal}`} state={food}>
          <img className="w-fix" src={food?.strMealThumb} alt={food?.strMeal} />
        </Link>
      </div>
      <figcaption className="p-3 flex-1">{food?.strMeal}</figcaption>
      <button className="bg-red-400 py-3 text-white">Add to cart</button>
    </figure>
  );
};

export default FoodItem;
