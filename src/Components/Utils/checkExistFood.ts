import { cartItemType } from "../Providers/cartProvider.type";

const checkExistFood = (foods: cartItemType[], id: number) => {
  return foods.find((food) => food.id === id);
};

export default checkExistFood;
