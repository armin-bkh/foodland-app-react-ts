import { Link } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import CartItem from "../CartItem/CartItem";

const CartList = () => {
  const { cart } = useCart();

  return (
    <section
      className={
        cart.length > 0
          ? `grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4`
          : `text-center`
      }
    >
      {cart.length > 0 ? (
        cart.map((item) => <CartItem key={item.id} food={item} />)
      ) : (
        <div>
          <p className="text-xl lg:text-4xl mb-10">your cart is empty</p>
          <Link
            to={"/foods"}
            className="bg-red-400 px-10 py-2 rounded-md text-white hover:px-20 hover:text-3xl hover:py-5 transition-all"
          >
            Menu
          </Link>
        </div>
      )}
    </section>
  );
};

export default CartList;
