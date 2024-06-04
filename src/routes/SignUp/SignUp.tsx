// APIS
import { memo } from "react";

// Components
import RouteWrapper from "../../components/RouteWrapper/RouteWrapper";
import AuthForm from "../../components/AuthForm/AuthForm";

// hooks
import useSignup from "../../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import notify from "../../APIs/notify";

function Signup() {
  const navigate = useNavigate();
  const { mutateAsync, error, isPending } = useSignup();

  const handleSignup = async (userData: {
    name: string;
    email: string;
    password: string;
  }) => {
    await mutateAsync(userData);
    notify("Registered user successfully", "SUCCESS");
    navigate("/");
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
