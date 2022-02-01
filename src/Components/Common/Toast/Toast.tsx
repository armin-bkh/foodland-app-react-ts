import {
  appearnceType,
  horizentalDirection,
  verticalDirection,
} from "../../Providers/ToastProvider";
import styles from "./toast.module.scss";
import { IoMdClose } from "react-icons/io";

interface toastProps {
  value: string;
  appearance?: appearnceType;
  position?:
    | Exclude<`${verticalDirection}-${horizentalDirection}`, "center-center">
    | "center";
  handleClose: () => void;
}

const Toast = ({ value, appearance, position, handleClose }: toastProps) => {
  return (
    <div
      className={`${styles.toastContainer} ${
        !appearance
          ? styles.info
          : appearance === "success"
          ? styles.success
          : appearance === "error"
          ? styles.error
          : appearance === "warning"
          ? styles.warning
          : styles.info
      } ${
        !position
          ? styles.defaultPosition
          : position === "top-right"
          ? styles.topRightPosition
          : position === "top-center"
          ? styles.topCenterPosition
          : position === "center"
          ? styles.centerPosition
          : position === "center-left"
          ? styles.centerLeftPosition
          : position === "center-right"
          ? styles.centerRightPosition
          : position === "bottom-left"
          ? styles.bottomLeftPosition
          : position === "bottom-center"
          ? styles.bottomCenterPosition
          : styles.bottomRightPosition
      }`}
    >
      <p>{value}</p>
      <span onClick={handleClose} className={styles.closeBtn}>
        <IoMdClose />
      </span>
    </div>
  );
};

export default Toast;
