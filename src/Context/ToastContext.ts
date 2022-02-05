import { createContext } from "react";
import { toastType } from "../Components/Providers/ToastProvider";

export const ToastContext = createContext<{
  toasts: toastType[],
  setToasts: React.Dispatch<React.SetStateAction<toastType[]>>
}
  
>(null!);
