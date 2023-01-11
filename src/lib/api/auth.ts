import axios from "axios";

import { API_URL } from "../../constant/api";
import { errorHandler } from "./errorHandler";

export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(API_URL + "/users/login", {
      email,
      password,
    });
    localStorage.setItem("token", res.data.token);
    return res;
  } catch (e) {
    errorHandler(e);
  }
};

export const signup = async (email: string, password: string) => {
  try {
    const res = await axios.post(API_URL + "/users/create", {
      email,
      password,
    });
    localStorage.setItem("token", res.data.token);
    return res;
  } catch (e) {
    errorHandler(e);
  }
};
