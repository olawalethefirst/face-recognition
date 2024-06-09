import { PropsWithChildren, useEffect } from "react";
import { faceDetectionInstance } from "../../APIs/axios";
import useSignout from "../../hooks/useSignout";
import notify from "../../APIs/notify";
import { useLocation } from "react-router-dom";

export default function AxiosInterceptor({ children }: PropsWithChildren) {
  const signout = useSignout();
  const { pathname } = useLocation();

  useEffect(() => {
    const interceptor = faceDetectionInstance.interceptors.response.use(
      null,
      (error) => {
        if (error.response.status === 401 && !pathname.includes("auth")) {
          console.log("happening");
          signout();
          notify("Session Expired! Please sign in again", "ERROR");
        }

        return Promise.reject(error);
      }
    );

    return () => {
      faceDetectionInstance.interceptors.response.eject(interceptor);
    };
  }, [signout, pathname]);

  return <>{children}</>;
}
