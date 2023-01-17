import { ACCESS_TOKEN_KEY } from "../../constant/api";

export const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.location.replace("/");
};
