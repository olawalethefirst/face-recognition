import styles from "./UploadForm.module.scss";

export default function UploadForm() {
  return (
    <div className={styles["container"]}>
      <input className={styles["input"]} />

      <button className={styles["submit"]}>Detect</button>
    </div>
  );
}
