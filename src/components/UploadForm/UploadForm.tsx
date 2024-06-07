// APIs
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "./UploadForm.module.scss";

export default function UploadForm({
  detectFaces,
}: {
  detectFaces: (imageURL: string) => unknown;
}) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid,
  } = useFormik({
    initialValues: { imageURL: "" },
    validationSchema: Yup.object({
      imageURL: Yup.string()
        .url("Invalid URL specified")
        .required("Image URL isRequired"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await detectFaces(values.imageURL);
        setSubmitting(false);
        resetForm();
      } catch (error) {
        console.error("AuthForm Error:", error);
      }
    },
  });

  const disableDetectButton = isSubmitting || !isValid;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["inputContainer"]}>
        <input
          value={values.imageURL}
          className={styles["input"]}
          onChange={handleChange}
          type={"text"}
          name={"imageURL"}
          id={"imageURL"}
          onBlur={handleBlur}
        />

        <button
          className={`${styles["submit"]} ${
            disableDetectButton ? styles["submit-disabled"] : ""
          }`}
          disabled={disableDetectButton}
          type="submit"
        >
          Detect
        </button>
      </div>

      {touched.imageURL && errors.imageURL && (
        <p className={styles.inputError}>{errors.imageURL}</p>
      )}
    </form>
  );
}
