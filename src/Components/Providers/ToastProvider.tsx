import { useContext, useEffect, useState } from "react";
import { ToastContext } from "../../Context/ToastContext";
import Toast from "../Common/Toast/Toast";
import styles from "../Common/Toast/toast.module.scss";

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
  id: number;
  value: string;
  appearance?: appearnceType;
};

const ToastProvider = ({
  children,
  autoDisMiss,
  duration,
  position,
}: toastProviderProps) => {
  const [toasts, setToasts] = useState<toastType[] | []>([]);

  const closeHandler = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const unMountToastHandler = (id: number) => {
    if (!autoDisMiss) return;
    window.setTimeout(
      () => {
        setToasts((prevToasts) =>
          prevToasts.filter((toasts) => toasts.id !== id)
        );
      },
      duration ? duration : 10000
    );
  };

  return (
    <ToastContext.Provider value={{ toasts, setToasts }}>
      {toasts &&
        toasts.map((toast, index) => (
          <Toast
            index={index}
            key={toast.id}
            value={toast?.value}
            appearance={toast?.appearance}
            handleClose={() => closeHandler(toast.id)}
            position={position}
            duration={duration}
            handleUnMount={() => unMountToastHandler(toast.id)}
          />
        ))}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;

export const useToasts = () => {
  const { toasts, setToasts } = useContext(ToastContext);

  const addToast = (value: string, type?: { appearance: appearnceType }) => {
    if (setToasts) {
      if (type?.appearance)
        setToasts([
          ...toasts,
          {
            value,
            appearance: type?.appearance,
            id: new Date().getTime(),
          },
        ]);
      else
        setToasts([
          ...toasts,
          {
            value,
            id: new Date().getTime(),
          },
        ]);
    }
  };

  return { addToast };
};
