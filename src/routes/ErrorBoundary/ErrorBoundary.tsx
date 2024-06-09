import React from "react";
import Image404 from "../../assets/images/404.svg";
import RouteWrapper from "../../components/RouteWrapper/RouteWrapper";
import styles from "./errorBoundary.module.scss";

export default function ErrorBoundary() {
  return (
    <RouteWrapper>
      <div className={styles.container}>
        <img className={styles.errorImg} alt="page not found" src={Image404} />
      </div>
    </RouteWrapper>
  );
}
