import RouteWrapper from "../../components/RouteWrapper/RouteWrapper"
import AuthForm from "../../components/AuthForm/AuthForm"

export default function SignIn() {
  return (
    <RouteWrapper>
      <section className="section">
        <AuthForm />
      </section>
    </RouteWrapper>
  )
}
