import { useContext, useEffect, useState } from "react";
import { ToastContext } from "../../Context/ToastContext";
import Toast from "../Common/Toast/Toast";

export type verticalDirection = "center" | "top" | "bottom";
export type horizentalDirection = "center" | "left" | "right";

interface toastProviderProps {
  children: React.ReactChild;
  autoDisMiss?: boolean;
  duration?: number;
  position?:
    | Exclude<`${verticalDirection}-${horizentalDirection}`, "center-center">
    | "center";
}

export type appearnceType = "success" | "error" | "warning" | "info";

export type toastType = {
  value: string;
  appearance?: appearnceType;
};

const ToastProvider = ({
  children,
  autoDisMiss,
  duration,
  position,
}: toastProviderProps) => {
  const [toast, setToast] = useState<toastType | null>(null);

  const closeHandler = () => {
    setToast(null);
  };

  useEffect(() => {
    if (autoDisMiss) {
      const closeTimeout = window.setTimeout(
        () => {
          setToast(null);
        },
        duration ? duration + 2000 : 10000
      );

      return () => {
        clearTimeout(closeTimeout);
      };
    }
  }, [toast]);

  return (
    <ToastContext.Provider value={setToast}>
      {toast?.value && (
        <Toast
          value={toast?.value}
          appearance={toast?.appearance}
          handleClose={closeHandler}
          position={position}
          duration={duration}
        />
      )}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;

export const useToasts = () => {
  const setToast = useContext(ToastContext);

  const addToast = (value: string, type?: { appearance: appearnceType }) => {
    if (setToast) {
      if (type?.appearance)
        setToast({
          value,
          appearance: type?.appearance,
        });
      else
        setToast({
          value,
        });
    }
  };

  return { addToast };
};
