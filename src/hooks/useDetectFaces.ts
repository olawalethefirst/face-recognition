import { detectFaces } from "../services/faces";
import { useMutation } from "@tanstack/react-query";

export default function useDetectFaces() {
  const query = useMutation({
    mutationKey: [detectFaces.name],
    mutationFn: detectFaces,
  });

  return query;
}
