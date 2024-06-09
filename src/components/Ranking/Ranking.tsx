import styles from "./Ranking.module.scss";

export default function Ranking({
  username,
  ranking,
}: {
  username: string;
  ranking: number;
}) {
  return (
    <div>
      <h1 className={styles["heading"]}>
        {"Welcome, "} <span className={styles.username}>{username}</span>
      </h1>

      <p className={styles["ranking-details"]}>
        {"Your current ranking is:  "} {ranking}
      </p>
    </div>
  );
}
