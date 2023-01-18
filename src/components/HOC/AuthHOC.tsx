import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../lib/utils/getToken";

const AuthHOC = (
  Component: ComponentType,
  authFn: () => boolean,
  message: string,
  path: string
) => {
  const AuthCheck = () => {
    const navigate = useNavigate();
    const token = getToken();

    useEffect(() => {
      if (authFn()) {
        alert(message);
        navigate(path);
      }
    }, [navigate, token]);

    return <Component />;
  };

  return AuthCheck;
};

export default AuthHOC;
