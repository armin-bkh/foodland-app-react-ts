import { useReducer } from "react";
import { CartActionsContext, CartContext } from "../../Context/CartContext";
import { actionType, cartType } from "./cartProvider.type";

interface cartProviderProps {
  children: React.ReactChild;
}

const initialValue = {
  loading: true,
  error: null,
  cart: [],
};

const reducer = (state: cartType, action: actionType) => {
  switch (action.type) {
    default:
      return state;
  }
};

const CartProvider = ({ children }: cartProviderProps) => {
  const [cart, dispatch] = useReducer(reducer, initialValue);
  return (
    <CartContext.Provider value={cart}>
      <CartActionsContext.Provider value={dispatch}>
        {children}
      </CartActionsContext.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;
