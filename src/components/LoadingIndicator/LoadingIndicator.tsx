import { ImSpinner9 } from "react-icons/im";
import { IconBaseProps } from "react-icons";

// styles
import styles from "./LoadingIndicator.module.scss";

export default function LoadingIndicator({
  size = 18,
  className,
  ...props
}: IconBaseProps & { size?: number; className?: string }) {
  return (
    <ImSpinner9
      className={`${styles.spinner} ${className}`}
      size={size}
      {...props}
    />
  );
}
