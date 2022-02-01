import { createContext } from "react";
import { toastType } from "../Components/Providers/ToastProvider";

export const ToastContext = createContext<
  React.Dispatch<React.SetStateAction<toastType | null>>
>(null!);
