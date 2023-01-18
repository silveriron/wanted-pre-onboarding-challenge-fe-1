import AuthHOC from "../components/HOC/AuthHOC";
import LoginForm from "../components/LoginForm/LoginForm";
import { haveAuthMessage } from "../constant/auth";
import { notNeedToken } from "../lib/utils/pageAuth";

const AuthPage = () => {
  return <LoginForm />;
};

export const ProtectedAuthPage = AuthHOC(
  AuthPage,
  notNeedToken,
  haveAuthMessage,
  "/todo"
);

export default AuthPage;
