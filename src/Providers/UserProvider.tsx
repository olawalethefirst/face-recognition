import { PropsWithChildren, createContext, useMemo } from "react";
import useUserDetails from "../hooks/useUserDetails";

export const userContext = createContext<{
  user:
    | {
        name: string;
        rank: string;
      }
    | undefined;
  isLoading: boolean;
}>({
  user: undefined,
  isLoading: true,
});

export default function UserProvider({ children }: PropsWithChildren) {
  const { data, isLoading } = useUserDetails();
  const value = useMemo(() => ({ user: data, isLoading }), [data, isLoading]);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
