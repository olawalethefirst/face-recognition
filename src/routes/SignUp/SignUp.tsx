// APIS
import { memo } from "react";

// Components
import RouteWrapper from "../../components/RouteWrapper/RouteWrapper";
import AuthForm from "../../components/AuthForm/AuthForm";

function Signup() {
  return (
    <RouteWrapper>
      <section className="section">
        <AuthForm
          signup
          authError={""}
          handleSubmit={(values) => console.log(values)}
        />
      </section>
    </RouteWrapper>
  );
}

export default memo(Signup);
