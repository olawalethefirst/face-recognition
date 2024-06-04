import styles from "./Navigation.module.scss";
import useSignout from "../../hooks/useSignout";

export default function Navigation() {
  const { signout } = useSignout();

  return (
    <nav className={styles["nav-container"]}>
      <button onClick={signout} className={styles["action-button"]}>
        Sign Out
      </button>
    </nav>
  );
}
