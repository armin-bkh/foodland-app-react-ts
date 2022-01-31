import { createContext } from "react";
import {
  actionType,
  cartType,
} from "../Components/Providers/cartProvider.type";

export const CartContext = createContext<cartType>(null!);
export const CartActionsContext = createContext<React.Dispatch<actionType>>(
  null!
);
