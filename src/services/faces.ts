import { faceDetectionInstance } from "../APIs/axios";
import { getUserToken } from "../utils/auth";
import { FaceBoundary } from "../types";
import { AxiosResponse } from "axios";

interface DetectFacesResponse {
  success: boolean;
  message: string;
  data: {
    entries: "1";
    faces: FaceBoundary[];
  };
}
export const detectFaces = async (imageURL: string) => {
  const token = getUserToken();

  if (!token) throw new Error("Request is unauthorized");

  if (!imageURL) throw new Error("Please provide an imageURL parameter");

  try {
    const response: AxiosResponse<DetectFacesResponse> =
      await faceDetectionInstance.put(
        "/detection",
        { imageUrl: imageURL },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    const {
      data: {
        data: { faces },
      },
    } = response;

    return faces;
  } catch (error) {
    console.error("Error detecting face(s), error:", error);

    throw new Error("Error detecting faces! Please try again.");
  }
};
