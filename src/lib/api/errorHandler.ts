import { serverErrMsg } from "../../constant/api";

export const errorHandler = (e: any) => {
  if (e.response) {
    return false;
  } else {
    alert(serverErrMsg);
  }
};
