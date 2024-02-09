import Tilt from "react-parallax-tilt";
import logoImage from "../../assets/images/logo.png";

import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div>
      <Tilt>
        <div className={styles["logo-container"]}>
          <img className={styles["logo-image"]} src={logoImage} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
}
