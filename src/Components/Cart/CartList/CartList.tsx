import { useEffect } from "react";
import { useCart } from "../../Providers/CartProvider";
import CartItem from "../CartItem/CartItem";

const CartList = () => {
  const { cart } = useCart();

  useEffect(() => {
    console.log(cart);
  }, []);

  return (
    <section className={cart.length > 0 ? `grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4` : ``}>
      {cart.length > 0 ? (
        cart.map((item) => <CartItem key={item.id} food={item} />)
      ) : (
        <p>your cart is empty</p>
      )}
    </section>
  );
};

export default CartList;
