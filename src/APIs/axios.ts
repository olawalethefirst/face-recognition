import axios from "axios";
import { faceDetectionAPIBaseURL } from "../constants";

export const faceDetectionInstance = axios.create({
  baseURL: faceDetectionAPIBaseURL,
  timeout: 120000,
});
