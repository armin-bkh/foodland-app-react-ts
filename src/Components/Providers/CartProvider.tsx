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
    case cartCases.INCREMENTFOOD: {
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
    case cartCases.DECREMENTFOOD: {
      let cloneCart = [...state.cart];
      const index = cloneCart.findIndex(
        (item) => item.id === action.payload?.id
      );
      const selectedItem = { ...cloneCart[index] };
      if (selectedItem.quantity) {
        if (selectedItem.quantity === 1) {
          cloneCart = cloneCart.filter(
            (item) => item.id !== action.payload?.id
          );
        } else {
          selectedItem.quantity--;
          cloneCart[index] = selectedItem;
        }
      }
      console.log(cloneCart);
      return { loading: false, error: null, cart: cloneCart };
    }
    case cartCases.REMOVEFOOD: {
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload?.id
      );
      return { loading: false, error: null, cart: filteredCart };
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

  const incrementHandler = (food: cartItemType) => {
    dispatch({ type: cartCases.INCREMENTFOOD, payload: food });
  };

  const removeHandler = (food: cartItemType) => {
    dispatch({ type: cartCases.REMOVEFOOD, payload: food });
  };

  const decrementHandler = (food: cartItemType) => {
    dispatch({ type: cartCases.DECREMENTFOOD, payload: food });
  };

  return { incrementHandler, removeHandler, decrementHandler };
};
