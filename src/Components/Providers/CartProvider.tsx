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
      return { ...state, cart: action.payload };
    }
    case cartCases.ADDFOOD: {
      return {
        loading: false,
        error: null,
        cart: [...state.cart, { ...action.payload }],
      };
    }
    case cartCases.INCREMENTFOOD: {
      const cloneCart = [...state.cart];
      const index = cloneCart.findIndex((food) => food.id === action.payload);
      const selectedFood = { ...cloneCart[index] };
      if (selectedFood.quantity) selectedFood.quantity++;
      cloneCart[index] = selectedFood;
      return { loading: false, error: null, cart: cloneCart };
    }
    default:
      return state;
  }
};

const CartProvider = ({ children }: cartProviderProps) => {
  const [cart, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("foodLandCart")!) || [];
    dispatch({ type: cartCases.GETDATA, payload: savedCart });
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

  const incrementHandler = (id: number | string) => {
    dispatch({ type: cartCases.INCREMENTFOOD, payload: id });
  };

  return { addHandler, incrementHandler };
};
