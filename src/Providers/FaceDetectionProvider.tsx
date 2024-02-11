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

// Variables
import {
  clarifaiAppID,
  clarifaiFaceDetectionModelID,
  clarifaiUserID,
  clarifaiPAT,
  clarifaiBaseURL,
} from "../constants";
import { FaceBoundary } from "../types";

type ImageUrl = undefined | string;
type Region = {
  region_info: {
    bounding_box: {
      bottom_row: number;
      left_col: number;
      right_col: number;
      top_row: number;
    };
  };
};

const initialContextValue = {
  imageURL: undefined as ImageUrl,
  detectFaces: (url: string) => {},
  isDetectingFaces: false,
  facesBoundary: [] as FaceBoundary[],
};
export const faceDetectionContext =
  createContext<typeof initialContextValue>(initialContextValue);

export default function FaceDetectionProvider({
  children,
}: PropsWithChildren<{}>) {
  const [imageURL, setImageURL] = useState<ImageUrl>(undefined);
  const [isDetectingFaces, setIsDetectingFaces] = useState(false);
  const [facesBoundary, setFacesBoundary] = useState<FaceBoundary[]>([]);

  const detectFaces = useCallback(async (_imageURL: string) => {
    setIsDetectingFaces(true);

    try {
      const body = JSON.stringify({
        user_app_id: {
          user_id: clarifaiUserID,
          app_id: clarifaiAppID,
        },
        inputs: [
          {
            data: {
              image: {
                url: _imageURL,
                // "base64": IMAGE_BYTES_STRING
              },
            },
          },
        ],
      });

      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Key " + clarifaiPAT,
        },
        body,
      };

      const response = await fetch(
        `${clarifaiBaseURL}/${clarifaiFaceDetectionModelID}/outputs`,
        requestOptions
      );

      if (response.ok) {
        const serializedResponse = await response.json();

        const { status, outputs } = serializedResponse;

        if (status.description?.toLowerCase() === "ok") {
          const prioritizedOutput = outputs[0];

          const regions = (prioritizedOutput?.data?.regions || []) as Region[];

          const facesBoundary = regions.map(
            ({
              region_info: {
                bounding_box: { top_row, bottom_row, left_col, right_col },
              },
            }) => ({
              top: top_row,
              bottom: 1 - bottom_row,
              left: left_col,
              right: 1 - right_col,
            })
          );

          const preloadedImageUrl = await preloadImageAsync(_imageURL);
          setFacesBoundary(facesBoundary);
          setImageURL(preloadedImageUrl);
        } else {
          console.warn("something wrong may have happened: ", status);
          notify("Something may be wrong, please try again.", "WARNING");
        }
      } else throw new Error(await response.json());
    } catch (error) {
      console.error("An error occured: ", error);
      notify("An error occurred, please try again", "ERROR");
    }

    setIsDetectingFaces(false);
  }, []);

  const contextValue = useMemo<typeof initialContextValue>(
    () => ({ imageURL, detectFaces, isDetectingFaces, facesBoundary }),
    [imageURL, detectFaces, isDetectingFaces, facesBoundary]
  );

  return (
    <faceDetectionContext.Provider value={contextValue}>
      {children}
    </faceDetectionContext.Provider>
  );
}
