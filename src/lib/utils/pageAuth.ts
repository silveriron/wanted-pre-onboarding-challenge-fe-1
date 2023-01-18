import { getToken } from "./getToken";

export const needToken = () => {
  const token = getToken();

  if (token) {
    return false;
  } else {
    return true;
  }
};

export const notNeedToken = () => {
  const token = getToken();

  if (token) {
    return true;
  } else {
    return false;
  }
};
