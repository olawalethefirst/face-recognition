import RouteWrapper from "../../components/RouteWrapper/RouteWrapper"
import AuthForm from "../../components/AuthForm/AuthForm"

export default function SignUp() {
  return (
    <RouteWrapper>
      <section className="section">
        <AuthForm signUp/>
      </section>
    </RouteWrapper>
  )
}
