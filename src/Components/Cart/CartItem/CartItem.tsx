import { cartItemType } from "../../Providers/cartProvider.type";
import { TiPlusOutline, TiMinusOutline } from "react-icons/ti";
import { HiOutlineTrash } from "react-icons/hi";
import { useToasts } from "../../Providers/ToastProvider";
import { useCartActions } from "../../Providers/CartProvider";

interface cartItemProps {
  food: cartItemType;
}

const CartItem = ({ food }: cartItemProps) => {
  const { incrementHandler, removeHandler, decrementHandler } =
    useCartActions();
  const { addToast } = useToasts();

  const incrementItemHandler = () => {
    incrementHandler(food);
    addToast(`${food.name} successfuly incremented`, { appearance: "success" });
  };

  const removeItemHandler = () => {
    removeHandler(food);
    addToast(`${food.name} successfuly removed`, { appearance: "success" });
  };

  const decrementItemHandler = () => {
    decrementHandler(food);
    addToast(`${food.name} successfuly decremented`, { appearance: "success" });
  };

  return (
    <figure
      key={food.id}
      className="flex lg:flex-col shadow rounded-md overflow-hidden group hover:shadow-xl transition-all"
    >
      <div className="w-1/3 lg:w-full overflow-hidden">
        <img
          className="w-fix group-hover:scale-150 group-hover:skew-x-6 transition-all"
          src={food.image}
          alt={food.name}
        />
      </div>
      <figcaption className="flex flex-col flex-1 p-2 text">
        <div className="flex-between w-full flex-1 items-start mb-2 lg:mb-10">
          <p className="text-lg md:text-2xl lg:text-3xl">{food.name}</p>
          <span>{food.quantity}</span>
        </div>

        <div className="flex flex-wrap">
          <button
            type="button"
            onClick={decrementItemHandler}
            className="flex-1 flex-center incDecBtn rounded-b-none rounded-r-none"
          >
            <TiMinusOutline />
          </button>
          <button
            type="button"
            onClick={incrementItemHandler}
            className="flex-1 flex-center incDecBtn rounded-b-none rounded-l-none border-l-0"
          >
            <TiPlusOutline />
          </button>
          <button
            type="button"
            onClick={removeItemHandler}
            className="w-full flex-center incDecBtn border-t-0 rounded-t-none"
          >
            <HiOutlineTrash />
          </button>
        </div>
      </figcaption>
    </figure>
  );
};

export default CartItem;
