import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../../Providers/UserProvider";
import { useContext } from "react";
import { routes } from "../../constants";

//https://stackoverflow.com/questions/66289122/how-to-create-a-protected-route-with-react-router-dom
export default function PrivateRoutes() {
  const { user } = useContext(userContext);

  return user ? <Outlet /> : <Navigate to={routes.signin} replace />;
}
