// APIS
import { memo, useContext } from "react";

// Components
import RouteWrapper from "../../components/RouteWrapper/RouteWrapper";
import AuthForm from "../../components/AuthForm/AuthForm";

// hooks
import useSignup from "../../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import notify from "../../APIs/notify";
import { routes } from "../../constants";
import { userContext } from "../../Providers/UserProvider";

function Signup() {
  const navigate = useNavigate();
  const { mutateAsync, error, isPending } = useSignup();
  const { updateUser } = useContext(userContext);

  const handleSignup = async (userData: {
    name: string;
    email: string;
    password: string;
  }) => {
    const user = await mutateAsync(userData);
    updateUser(user);
    notify("Registered user successfully", "SUCCESS");
    navigate(routes.app);
  };

  return (
    <RouteWrapper>
      <section className="section">
        <AuthForm
          signup
          authError={error?.message}
          handleSubmit={handleSignup}
          submitting={isPending}
        />
      </section>
    </RouteWrapper>
  );
}

export default memo(Signup);
