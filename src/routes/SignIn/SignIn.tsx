// APIs
import { memo } from "react";

// Components
import RouteWrapper from "../../components/RouteWrapper/RouteWrapper";
import AuthForm from "../../components/AuthForm/AuthForm";

function SignIn() {
  return (
    <RouteWrapper>
      <section className="section">
        <AuthForm />
      </section>
    </RouteWrapper>
  );
}

export default memo(SignIn);
