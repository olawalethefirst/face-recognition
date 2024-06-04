import { PropsWithChildren } from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import FaceDetectionProvider from "./FaceDetectionProvider";

export default function RootProvider({ children }: PropsWithChildren) {
  return (
    <ReactQueryProvider>
      <FaceDetectionProvider>{children}</FaceDetectionProvider>
    </ReactQueryProvider>
  );
}
