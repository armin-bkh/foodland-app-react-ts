import { useContext, useState } from "react";
import { ToastContext } from "../../Context/ToastContext";
import Toast from "../Common/Toast/Toast";

type verticalDirection = "center" | "top" | "bottom";
type horizentalDirection = "center" | "left" | "right";

interface toastProviderProps {
  children: React.ReactChild;
  autoDisMiss: boolean;
  duration: number;
  direction:
    | Exclude<`${verticalDirection}-${horizentalDirection}`, "center-center">
    | "center";
}

export type toastType = {
  value: string;
  appearance: "success" | "error" | "warning" | "info";
};

const ToastProvider = ({
  children,
  autoDisMiss,
  duration,
  direction,
}: toastProviderProps) => {
  const [toast, setToast] = useState<toastType>({} as toastType);

  return (
    <ToastContext.Provider value={setToast}>
      <Toast value={toast?.value} appearance={toast?.appearance} />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;

export const useToast = () => {
    const setToast = useContext(ToastContext);
}