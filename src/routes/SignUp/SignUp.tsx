// APIS
import { memo } from "react";

// Components
import RouteWrapper from "../../components/RouteWrapper/RouteWrapper";
import AuthForm from "../../components/AuthForm/AuthForm";

function SignUp() {
  return (
    <RouteWrapper>
      <section className="section">
        <AuthForm signUp />
      </section>
    </RouteWrapper>
  );
}

export default memo(SignUp);
