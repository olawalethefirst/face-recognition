import { getUser } from "../services/user";
import { useQuery } from "@tanstack/react-query";

export default function useUserDetails() {
  const query = useQuery({
    queryKey: [useQuery.name],
    queryFn: getUser,
  });

  return query;
}
