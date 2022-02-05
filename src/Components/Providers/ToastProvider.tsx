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

  const closeHandler = () => {
    setToasts([]);
  };

  useEffect(() => {
    if (autoDisMiss) {
      const closeTimeout = window.setTimeout(
        () => {
          setToasts([]);
        },
        duration ? duration + 2000 : 10000
      );

      return () => {
        clearTimeout(closeTimeout);
      };
    }
  }, [toasts]);

  return (
    <ToastContext.Provider value={{ toasts, setToasts }}>
      {toasts && (
        <div className={styles.toastContainer}>
          {toasts.map((toast, index) => (
            <Toast
            count={index}
              key={index}
              value={toast?.value}
              appearance={toast?.appearance}
              handleClose={closeHandler}
              position={position}
              duration={duration}
            />
          ))}
        </div>
      )}
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
          {
            value,
            appearance: type?.appearance,
          },
          ...toasts,
        ]);
      else
        setToasts([
          {
            value,
          },
          ...toasts,
        ]);
    }
  };

  return { addToast };
};
