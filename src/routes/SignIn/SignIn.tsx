// APIs
import { memo } from "react";

// Components
import RouteWrapper from "../../components/RouteWrapper/RouteWrapper";
import AuthForm from "../../components/AuthForm/AuthForm";

// hooks
import useSignin from "../../hooks/useSignin";
import { useNavigate } from "react-router-dom";
import notify from "../../APIs/notify";

function Signin() {
  const navigate = useNavigate();
  const { mutateAsync, error, isPending } = useSignin();

  const handleSignin = async (userData: {
    password: string;
    email: string;
  }) => {
    await mutateAsync(userData);
    notify("Signed in successfully", "SUCCESS");
    navigate("/home");
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
