import { signin } from "../services/auth";
import { useMutation } from "@tanstack/react-query";

export default function useSignin() {
  const query = useMutation({
    mutationKey: [signin.name],
    mutationFn: signin,
  });

  return query;
}
