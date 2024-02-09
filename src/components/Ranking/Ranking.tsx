import styles from "./Ranking.module.scss";

export default function Ranking() {
  return (
    <div>
      <h1 className={styles["heading"]}>
        {"Welcome back, "} <span>{"Black."}</span>
      </h1>

      <p className={styles["ranking-details"]}>
        {"Your current ranking is:  "} {"40"}
      </p>
    </div>
  );
}
