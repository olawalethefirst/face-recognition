import { useNavigate } from "react-router-dom";
import { removeUserToken } from "../utils/auth";

export default function useSignout() {
  const navigate = useNavigate();

  const signout = () => {
    navigate("/signin");

    removeUserToken();
  };

  return {
    signout,
  };
}
