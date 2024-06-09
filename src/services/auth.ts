import { faceDetectionInstance } from "../APIs/axios";
import { setUserToken } from "../utils/auth";
import { AxiosError, AxiosResponse } from "axios";
import { ErrorResponse, User } from "../types";

interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: User;
  };
}

export const signup = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response: AxiosResponse<AuthResponse> =
      await faceDetectionInstance.post("/auth/register", userData);

    const {
      data: {
        data: { token, user },
      },
    } = response;
    setUserToken(token);

    return user;
  } catch (error) {
    const remoteError = (error as AxiosError<ErrorResponse>).response?.data;

    console.error("Error registering user, error: ", remoteError || error);

    throw new Error(remoteError?.message || "Signup Failed! please try again.");
  }
};

export const signin = async (userData: { email: string; password: string }) => {
  try {
    const response: AxiosResponse<AuthResponse> =
      await faceDetectionInstance.post("/auth/signin", userData);

    const {
      data: {
        data: { token, user },
      },
    } = response;
    setUserToken(token);

    return user;
  } catch (error) {
    const remoteError = (error as AxiosError<ErrorResponse>).response?.data;

    console.error("Error registering user, error: ", remoteError || error);

    throw new Error(remoteError?.message || "Signup Failed! please try again.");
  }
};
