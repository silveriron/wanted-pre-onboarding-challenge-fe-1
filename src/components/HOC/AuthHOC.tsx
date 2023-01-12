import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../lib/api/getToken";

const AuthHOC = (Component: ComponentType) => {
  const AuthCheck = () => {
    const navigate = useNavigate();
    const token = getToken();

    useEffect(() => {
      if (!token) {
        alert("로그인이 필요한 서비스입니다.");
        navigate("/");
      }
    }, [navigate, token]);

    return <Component />;
  };

  return AuthCheck;
};

export default AuthHOC;
