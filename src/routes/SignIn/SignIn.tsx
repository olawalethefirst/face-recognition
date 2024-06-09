// APIs
import { memo, useContext } from "react";

// Components
import RouteWrapper from "../../components/RouteWrapper/RouteWrapper";
import AuthForm from "../../components/AuthForm/AuthForm";

// hooks
import useSignin from "../../hooks/useSignin";
import { useNavigate } from "react-router-dom";
import notify from "../../APIs/notify";
import { routes } from "../../constants";
import { userContext } from "../../Providers/UserProvider";

function Signin() {
  const navigate = useNavigate();
  const { mutateAsync, error, isPending } = useSignin();
  const { updateUser } = useContext(userContext);

  const handleSignin = async (userData: {
    password: string;
    email: string;
  }) => {
    const user = await mutateAsync(userData);
    updateUser(user);
    notify("Signed in successfully", "SUCCESS");
    navigate(routes.app);
  };

  return (
    <RouteWrapper>
      <section className="section">
        <AuthForm
          authError={error?.message}
          handleSubmit={handleSignin}
          submitting={isPending}
        />
      </section>
    </RouteWrapper>
  );
}

export default memo(Signin);
