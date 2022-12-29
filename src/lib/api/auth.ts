import axios from "axios";

const API_URL = "http://localhost:8080";

const serverErrMsg =
  "서버에 알 수 없는 문제가 발생했습니다. 잠시 후에 다시 시도해주세요.";

const errorHandler = (e: any) => {
  if (e.response) {
    return false;
  } else {
    alert(serverErrMsg);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(API_URL + "/users/login", {
      email,
      password,
    });
    localStorage.setItem("token", res.data.token);
    return res;
  } catch (e: any) {
    errorHandler(e);
  }
};

export const signup = async (email: string, password: string) => {
  try {
    const res = await axios.post(API_URL + "/users/create", {
      email,
      password,
    });
    return res;
  } catch (e) {
    errorHandler(e);
  }
};
