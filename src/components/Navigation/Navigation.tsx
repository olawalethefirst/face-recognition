import styles from "./Navigation.module.scss";

export default function Navigation({
  handleNavAction,
  actionLabel,
}: {
  handleNavAction: () => unknown;
  actionLabel: string;
}) {
  return (
    <nav className={styles["nav-container"]}>
      <button onClick={handleNavAction} className={styles["action-button"]}>
        {actionLabel}
      </button>
    </nav>
  );
}
