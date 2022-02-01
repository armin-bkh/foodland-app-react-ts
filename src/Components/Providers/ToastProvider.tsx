import { useState } from "react";
import { ToastContext } from "../../Context/ToastContext";

type verticalDirection = "center" | "top" | "bottom";
type horizentalDirection = "center" | "left" | "right";

interface toastProviderProps {
  children: React.ReactChild;
  autoDisMiss: boolean;
  duration: number;
  direction: Exclude<`${verticalDirection}-${horizentalDirection}`, 'center-center'> | "center";
}

const ToastProvider = ({ children, autoDisMiss, duration, direction }: toastProviderProps) => {
  const [toast, setToast] = useState();

  return <ToastContext.Provider value={null}>{children}</ToastContext.Provider>;
};

export default ToastProvider;
