import { Navigate, Outlet, useLocation } from "react-router-dom";
import { userContext } from "../../Providers/UserProvider";
import { useContext } from "react";

export default function PrivateRoutes() {
  const location = useLocation();
  const { isLoading, user } = useContext(userContext);

  if (isLoading) {
    return null; // or loading indicator/spinner/etc //https://stackoverflow.com/questions/66289122/how-to-create-a-protected-route-with-react-router-dom

    // todo: continue work here
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
