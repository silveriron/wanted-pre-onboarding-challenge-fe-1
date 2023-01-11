import { ACCESS_TOKEN_KEY } from "../../constant/api";

export const getToken = () => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  return token;
};
