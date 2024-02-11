// APIs
import { useContext } from "react";
import { faceDetectionContext } from "../../Providers/FaceDetectionProvider";

//Components
import { ThreeCircles } from "react-loader-spinner";

import { FaceBoundary } from "../../types";

import styles from "./ImagePreview.module.scss";

export default function ImagePreview({
  facesLocation,
}: {
  facesLocation: { top: string; bottom: string; left: string; right: string }[];
}) {
  const { isDetectingFaces, imageURL, facesBoundary } =
    useContext(faceDetectionContext);

  if (isDetectingFaces)
    return (
      <ThreeCircles
        height="140"
        width="140"
        wrapperClass={styles["loader-wrapper"]}
        color="gold"
        ariaLabel="audio-loading"
        visible
      />
    );

  return (
    <div className={styles["container"]}>
      {imageURL && (
        <div className={styles["imageContainer"]}>
          <img
            alt="heads detected using AI"
            className={styles["image"]}
            src={imageURL}
          />
          {facesBoundary.map(({ top, right, bottom, left }, index) => (
            <div
              key={`${index}`}
              style={{
                position: "absolute",
                border: "2px solid black",
                top: `${top * 100}%`,
                right: `${right * 100}%`,
                bottom: `${bottom * 100}%`,
                left: `${left * 100}%`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
