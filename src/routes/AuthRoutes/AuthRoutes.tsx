import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../../Providers/UserProvider";
import { routes } from "../../constants";

export default function AuthRoutes() {
  const { user } = useContext(userContext);

  return user ? <Navigate to={routes.app} replace /> : <Outlet />;
}
