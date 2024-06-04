import { localStorageKeys } from "../../constants";

// Sets user token
export const setUserToken = (token: string) => {
  localStorage.setItem(localStorageKeys.userToken, token);
};

// remove user token
export const removeUserToken = () => {
  localStorage.removeItem(localStorageKeys.userToken);
};

// returns user token
export const getUserToken = () =>
  localStorage.getItem(localStorageKeys.userToken);
