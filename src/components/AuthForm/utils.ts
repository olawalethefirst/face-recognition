import * as Yup from "yup";
// import YupPassword from "yup-password";
// YupPassword(Yup);

export const getValidationSchema = (signup: boolean) =>
  Yup.object({
    name: signup
      ? Yup.string()
          .max(30, "Must be 30 characters or less!")
          .required("Required!")
      : Yup.string(),
    email: Yup.string()
      .email("A valid email must be supplied!")
      .max(30, "Must be 30 characters or less!")
      .required("Required!"),
    password: Yup.string()
      .min(6, "Must be at least 8 characters!")
      .max(20, "Must be 20 characters or less!")
      .required("Required!"),
    confirmPassword: signup
      ? Yup.string()
          .required("Required!")
          .oneOf([Yup.ref("password")], "Passwords must match!")
      : Yup.string(),
  });
