// APIs
import { useState, useContext } from "react";

import { faceDetectionContext } from "../../Providers/FaceDetectionProvider";

import styles from "./UploadForm.module.scss";

export default function UploadForm() {
  const [imageURL, setImageURL] = useState("");
  const { detectFaces, isDetectingFaces } = useContext(faceDetectionContext);

  const urlPattern =
    /^(?:https:\/\/|http:\/\/|)(?:www.|)[a-z0-9]+[a-z0-9-.]*([a-z0-9]+.[a-z]+(?:\/\w+|)(?:\/.*|))$/i;
  const isValidUrl = urlPattern.test(imageURL);

  const disableDetectButton = isDetectingFaces || !isValidUrl;

  // functions
  const handleImageURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setImageURL(value);
  };
  const handleDetectFaces = () => {
    if (isValidUrl) {
      detectFaces(imageURL);
    }
  };

  console.log("detecting disabled: ", isValidUrl);

  return (
    <div className={styles["container"]}>
      <input
        value={imageURL}
        className={styles["input"]}
        onChange={handleImageURLChange}
      />

      <button
        className={`${styles["submit"]} ${
          disableDetectButton ? styles["submit-disabled"] : ""
        }`}
        onClick={handleDetectFaces}
        disabled={disableDetectButton}
      >
        Detect
      </button>
    </div>
  );
}
