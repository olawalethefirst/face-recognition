export interface FaceBoundary {
  top: number;
  bottom: number;
  right: number;
  left: number;
}

export interface User {
  name: string;
  rank: number;
}

export interface FaceBoundary {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface ErrorResponse {
  success: true;
  message: string;
  data: any;
}
