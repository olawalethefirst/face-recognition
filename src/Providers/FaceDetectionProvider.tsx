// APIs
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import notify from "../APIs/notify";
import preloadImageAsync from "../utils/preloadImageAsync";
import useDetectFaces from "../hooks/useDetectFaces";

import { FaceBoundary } from "../types";

const initialContextValue: {
  imageURL: string | undefined;
  detectFaces: (url: string) => unknown;
  isDetectingFaces: boolean;
  facesBoundary: FaceBoundary[];
  error: string | undefined;
} = {
  imageURL: undefined,
  detectFaces: () => {},
  isDetectingFaces: false,
  facesBoundary: [],
  error: undefined,
};
export const faceDetectionContext =
  createContext<typeof initialContextValue>(initialContextValue);

export default function FaceDetectionProvider({
  children,
}: PropsWithChildren<{}>) {
  const [imageURL, setImageURL] = useState<string | undefined>();
  const {
    mutateAsync: detectFacesAsync,
    data,
    isPending,
    error,
  } = useDetectFaces();

  const detectFaces = useCallback(
    async (imageURL: string) => {
      setImageURL(undefined);

      try {
        await detectFacesAsync(imageURL);
        await preloadImageAsync(imageURL);
        setImageURL(imageURL);
      } catch (error) {
        notify("Error detecting faces! Please try again.");
      }
    },
    [detectFacesAsync]
  );

  const contextValue = useMemo<typeof initialContextValue>(
    () => ({
      detectFaces,
      isDetectingFaces: isPending,
      facesBoundary: data || [],
      imageURL,
      error: error?.message,
    }),
    [detectFaces, isPending, data, imageURL, error]
  );

  return (
    <faceDetectionContext.Provider value={contextValue}>
      {children}
    </faceDetectionContext.Provider>
  );
}
