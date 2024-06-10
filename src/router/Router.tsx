import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "../routes/Home/Home";
import SignIn from "../routes/Signin/Signin";
import SignUp from "../routes/Signup/Signup";
import PrivateRoutes from "../routes/PrivateRoutes/PrivateRoutes";
import { routes } from "../constants";
import AuthRoutes from "../routes/AuthRoutes/AuthRoutes";
import ErrorBoundary from "../routes/ErrorBoundary/ErrorBoundary";

const router = createHashRouter([
  {
    path: routes.app,
    element: <PrivateRoutes />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
  {
    path: routes.auth,
    element: <AuthRoutes />,
    children: [
      {
        path: "",
        element: <ErrorBoundary />,
      },
      {
        path: routes.signin,
        element: <SignIn />,
      },
      {
        path: routes.signup,
        element: <SignUp />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
