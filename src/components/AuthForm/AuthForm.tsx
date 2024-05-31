import styles from "./AuthForm.module.scss";
import { useFormik } from "formik";
import { getValidationSchema } from "./utils";
import { useEffect } from "react";

const Field = ({
  label,
  name,
  inputType,
  error,
  onChange,
  onBlur,
  value,
}: {
  label: string;
  name: string;
  inputType: string;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => unknown;
}) => {
  return (
    <div className={styles["labeled-input"]}>
      <label className={styles["label"]} htmlFor={name}>
        {label}:
      </label>
      <input
        onChange={onChange}
        className={styles["input"]}
        type={inputType}
        name={name}
        id={name}
        value={value}
        onBlur={onBlur}
      />
      <p className={styles.fieldError}>{error}</p>
    </div>
  );
};

export default function AuthForm({
  signup = false,
  authError,
  handleSubmit,
}: {
  signup?: boolean;
  authError?: string;
  handleSubmit: (
    formData:
      | {
          name: string;
          email: string;
          password: string;
          confirmPassword: string;
        }
      | { email: string; password: string }
  ) => unknown;
}) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit: handleFormSubmit,
    isSubmitting,
    isValid,
  } = useFormik({
    initialValues: { name: "", email: "", password: "", confirmPassword: "" },
    validationSchema: getValidationSchema(signup),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const { email, password } = values;
      try {
        await handleSubmit(signup ? values : { email, password });
        setSubmitting(false);
        resetForm();
      } catch (error) {
        console.error("AuthForm Error:", error);
      }
    },
  });
  const submitDisabled = isSubmitting || !isValid;

  useEffect(() => {}, []);

  return (
    <form onSubmit={handleFormSubmit} className={styles["form-container"]}>
      {signup && (
        <Field
          label={"Name"}
          name={"name"}
          inputType={"text"}
          error={touched.name ? errors.name : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
      )}

      <Field
        label={"Email"}
        name={"email"}
        inputType={"email"}
        error={touched.email ? errors.email : ""}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />

      <Field
        label={"Password"}
        name={"password"}
        inputType={"password"}
        error={touched.password ? errors.password : ""}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
      />

      {signup && (
        <Field
          label={"Confirm Password"}
          name={"confirmPassword"}
          inputType={"password"}
          error={touched.confirmPassword ? errors.confirmPassword : ""}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.confirmPassword}
        />
      )}
      <button
        disabled={isSubmitting || !isValid}
        type="submit"
        className={`${styles["submit"]} ${
          submitDisabled ? styles["submitDisabled"] : ""
        }`}
      >
        Submit
      </button>

      {authError && <p className={styles.authError}>{authError}</p>}

      {signup && (
        <p className={styles["auth-method-switch"]}>
          {"Have an account already? "}
          <span>Sign in instead.</span>
        </p>
      )}

      {!signup && (
        <p className={styles["auth-method-switch"]}>
          {"New user? "}
          <span>Sign in instead.</span>
        </p>
      )}
    </form>
  );
}
