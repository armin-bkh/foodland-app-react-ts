import { useContext, useEffect, useReducer } from "react";
import { CartActionsContext, CartContext } from "../../Context/CartContext";
import {
  actionType,
  cartCases,
  cartItemType,
  cartType,
} from "./cartProvider.type";

interface cartProviderProps {
  children: React.ReactChild;
}

const initialValue = {
  loading: false,
  error: null,
  cart: [],
};

const reducer = (state: cartType, action: actionType) => {
  switch (action.type) {
    case cartCases.GETDATA: {
      const savedCart = JSON.parse(localStorage.getItem("foodLandCart")!) || [];
      return { ...state, cart: savedCart };
    }
    case cartCases.ADDFOOD: {
      const cloneCart = [...state.cart];
      const isExistFood = cloneCart.find(
        (item) => item.id === action.payload?.id
      );
      if (isExistFood) {
        const index = cloneCart.findIndex(
          (item) => item.id === action.payload?.id
        );
        const selectedItem = { ...cloneCart[index] };
        if (selectedItem.quantity) selectedItem.quantity++;
        cloneCart[index] = selectedItem;
      } else action.payload && cloneCart.push(action.payload);
      return {
        loading: false,
        error: null,
        cart: cloneCart,
      };
    }
    default:
      return state;
  }
};

const CartProvider = ({ children }: cartProviderProps) => {
  const [cart, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    dispatch({ type: cartCases.GETDATA });
  }, []);

  useEffect(() => {
    localStorage.setItem("foodLandCart", JSON.stringify(cart.cart));
  }, [cart]);

  return (
    <CartContext.Provider value={cart}>
      <CartActionsContext.Provider value={dispatch}>
        {children}
      </CartActionsContext.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);

export const useCartActions = () => {
  const dispatch = useContext(CartActionsContext);
  
  const addHandler = (food: cartItemType) => {
    dispatch({ type: cartCases.ADDFOOD, payload: food });
  };

  return { addHandler };
};
