import { useNavigate } from "react-router-dom";
import { removeUserToken } from "../utils/auth";
import { useCallback, useContext } from "react";
import { routes } from "../constants";
import { userContext } from "../Providers/UserProvider";

export default function useSignout() {
  const navigate = useNavigate();
  const { updateUser } = useContext(userContext);

  return useCallback(() => {
    navigate(routes.signin);
    updateUser(null);
    removeUserToken();
  }, [navigate, updateUser]);
}
