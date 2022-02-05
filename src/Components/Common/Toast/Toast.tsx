import {
  appearnceType,
  horizentalDirection,
  verticalDirection,
} from "../../Providers/ToastProvider";
import styles from "./toast.module.scss";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkOutline, IoWarningOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiErrorAlt } from "react-icons/bi";

interface toastProps {
  count: number;
  auto?: boolean;
  duration?: number;
  value: string;
  appearance?: appearnceType;
  position?:
    | Exclude<`${verticalDirection}-${horizentalDirection}`, "center-center">
    | "center";
  handleClose: () => void;
}

const Toast = ({
  count,
  value,
  appearance,
  position,
  handleClose,
  duration,
}: toastProps) => {
  return (
    <div
      style={{
        top: `${count ? count * 70 + "px" : "3px"}`,
        animationDuration: duration ? `${(duration / 1000) % 60}s` : "10s",
      }}
      className={`
      ${styles.autoClosing}
      ${styles.toastContainer} ${
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
          : position === "top-left"
          ? styles.defaultPosition
          : styles.bottomRightPosition
      }`}
    >
      <span className={styles.toastIcon}>
        {!appearance ? (
          <AiOutlineInfoCircle />
        ) : appearance === "success" ? (
          <IoCheckmarkOutline />
        ) : appearance === "error" ? (
          <BiErrorAlt />
        ) : appearance === "warning" ? (
          <IoWarningOutline />
        ) : (
          <AiOutlineInfoCircle />
        )}
      </span>
      <p>{value}</p>
      <span onClick={handleClose} className={styles.closeBtn}>
        <IoMdClose />
      </span>
    </div>
  );
};

export default Toast;
