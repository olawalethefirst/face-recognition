// APIs
import { memo } from "react";

// Components
import RouteWrapper from "../../components/RouteWrapper/RouteWrapper";
import AuthForm from "../../components/AuthForm/AuthForm";

function Signin() {
  return (
    <RouteWrapper>
      <section className="section">
        <AuthForm
          authError={""}
          handleSubmit={(values) => console.log(values)}
        />
      </section>
    </RouteWrapper>
  );
}

export default memo(Signin);
