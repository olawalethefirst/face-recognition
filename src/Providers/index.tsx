import { PropsWithChildren } from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import FaceDetectionProvider from "./FaceDetectionProvider";
import UserProvider from "./UserProvider";

export default function RootProvider({ children }: PropsWithChildren) {
  return (
    <ReactQueryProvider>
      <UserProvider>
        <FaceDetectionProvider>{children}</FaceDetectionProvider>
      </UserProvider>
    </ReactQueryProvider>
  );
}
