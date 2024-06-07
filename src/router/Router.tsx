import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../routes/Home/Home";
import SignIn from "../routes/Signin/Signin";
import SignUp from "../routes/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
