import styles from  "./AuthForm.module.scss"

export default function AuthForm({signUp = false}:  {signUp?: boolean}) {

  return (
    <div className={styles["form-container"]}>
        <div className={styles["labeled-input"]}>
            <label className={styles["label"]} htmlFor="email">Email:</label>
            <input className={styles["input"]} type="email"  id="email"/>
        </div>

        <div className={styles["labeled-input"]}>
            <label className={styles["label"]} htmlFor="password">Password:</label>
            <input className={styles["input"]} type="password"  id="password"/>
        </div>
        
        {
            signUp &&
            (
                <div className={styles["labeled-input"]}>
                    <label className={styles["label"]} htmlFor="confirm-password">Confirm Password:</label>
                    <input className={styles["input"]} type="password"  id="confirm-password" />
                </div>
            )
        }

        <button className={styles["submit"]}>
            Submit
        </button>

    </div>
  )
}
