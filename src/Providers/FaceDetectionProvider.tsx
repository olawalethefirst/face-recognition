// APIs
import { createContext, PropsWithChildren, useMemo } from "react";
import notify from "../APIs/notify";
import preloadImageAsync from "../utils/preloadImageAsync";

import { FaceBoundary } from "../types";

const initialContextValue: {
  imageURL: "";
  detectFaces: (url: string) => unknown;
  isDetectingFaces: boolean;
  facesBoundary: FaceBoundary[];
} = {
  imageURL: "",
  detectFaces: (url: string) => {},
  isDetectingFaces: false,
  facesBoundary: [],
};
export const faceDetectionContext =
  createContext<typeof initialContextValue>(initialContextValue);

export default function FaceDetectionProvider({
  children,
}: PropsWithChildren<{}>) {
  const contextValue = useMemo<typeof initialContextValue>(
    () => ({
      detectFaces: () => {},
      isDetectingFaces: false,
      facesBoundary: [],
      imageURL: "",
    }),
    [
      // detectFaces, isDetectingFaces, facesBoundary
    ]
  );

  return (
    <faceDetectionContext.Provider value={contextValue}>
      {children}
    </faceDetectionContext.Provider>
  );
}
