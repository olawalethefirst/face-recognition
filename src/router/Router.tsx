import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../routes/Home";
import SignIn from "../routes/SignIn/SignIn";
import SignUp from "../routes/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
]);

export default function Router () {
    return (
        <RouterProvider router={router} />
    )
}
