import styles from "./toast.module.scss";

interface toastProps {
  value: string;
  appearance?: string;
}

const Toast = ({ value, appearance }: toastProps) => {
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
      }`}
    >
      <p>{value}</p>
    </div>
  );
};

export default Toast;
