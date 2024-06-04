import { signup } from "../services/auth";
import { useMutation } from "@tanstack/react-query";

export default function useSignup() {
  const query = useMutation({
    mutationKey: [signup.name],
    mutationFn: signup,
  });

  return query;
}
