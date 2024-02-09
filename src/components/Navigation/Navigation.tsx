import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={styles["nav-container"]}>
      <button className={styles["action-button"]}>Sign Out</button>
    </nav>
  );
}
