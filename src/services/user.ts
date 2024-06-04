import { faceDetectionInstance } from "../APIs/axios";
import { getUserToken } from "../utils/auth";
import { AxiosResponse } from "axios";

interface GetUserResponse {
  success: boolean;
  message: string;
  data: {
    name: string;
    entries: string;
  };
}
export const getUser = async () => {
  const token = getUserToken();

  if (!token) throw new Error("Request is unauthorized");

  try {
    const response: AxiosResponse<GetUserResponse> =
      await faceDetectionInstance.get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    const {
      data: {
        data: { name, entries },
      },
    } = response;

    return { name, rank: entries };
  } catch (error) {
    console.error("Error fetching user details:", error);

    throw new Error("Error fetching user details! Please try again.");
  }
};
