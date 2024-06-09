import { PropsWithChildren, useCallback, useContext, useMemo } from "react";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ParticlesBg from "particles-bg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AxiosInterceptor from "../AxiosInterceptor/AxiosInterceptor";

// Hooks
import useSignout from "../../hooks/useSignout";

// Providers
import { userContext } from "../../Providers/UserProvider";

// constants
import { routes } from "../../constants";

export default function RouteWrapper({ children }: PropsWithChildren<{}>) {
  const signOut = useSignout();
  const { user } = useContext(userContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const createHandleNavigate = useCallback(
    (route: string) => () => {
      navigate(route);
    },
    [navigate]
  );

  const navAction: {
    label: string;
    handler: () => unknown;
  } = useMemo(() => {
    const action = { label: "", handler: () => {} };

    switch (pathname) {
      case routes.signin:
        action.handler = createHandleNavigate(routes.signup);
        action.label = "Sign Up";
        break;
      case routes.signup:
        action.handler = createHandleNavigate(routes.signin);
        action.label = "Sign In";
        break;
      default:
        if (user) {
          action.handler = signOut;
          action.label = "Sign Out";
        } else {
          action.handler = createHandleNavigate(routes.signin);
          action.label = "Sign In";
        }
    }

    return action;
  }, [pathname, user, createHandleNavigate, signOut]);

  return (
    <AxiosInterceptor>
      <div>
        <header className="section header">
          <Link to={routes.app}>
            <Logo />
          </Link>
          <Navigation
            actionLabel={navAction.label}
            handleNavAction={navAction.handler}
          />
        </header>

        {children}

        {/* particle liibrary background */}
        <ParticlesBg type="cobweb" bg />
      </div>
    </AxiosInterceptor>
  );
}
