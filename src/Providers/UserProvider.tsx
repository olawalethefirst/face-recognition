import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { User } from "../types";

import { localStorageKeys } from "../constants";

export const userContext = createContext<{
  user: User | null;
  updateUser: (user: User | null) => unknown;
}>({
  user: null,
  updateUser: () => {},
});

export default function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const persistedStringifiedUser = localStorage.getItem(
      localStorageKeys.user
    );
    if (persistedStringifiedUser) {
      const persistedUser = JSON.parse(persistedStringifiedUser);
      setUser(persistedUser as User);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem(localStorageKeys.user, JSON.stringify(user) || "");
    } else {
      localStorage.removeItem(localStorageKeys.user);
    }
  }, [user]);

  const value = useMemo(() => ({ user, updateUser: setUser }), [user]);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
