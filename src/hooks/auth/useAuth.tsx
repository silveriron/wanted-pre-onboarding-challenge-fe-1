import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { login, signup } from '../../lib/api/auth'

interface UseAuthProps {
  email: string
  password: string
}

const useAuth = ({email, password}: UseAuthProps): [boolean, boolean, () => Promise<void>, () => Promise<void>, () => void] => {
  const [isError, setIsError] = useState(false);
  const { search } = useLocation();

  const navigate = useNavigate();


  const isSignup = search.split("?")[1] === "signup";

  const signupHandler = async () => {
    const res = await signup(email, password);
      res ? navigate("/todo") : setIsError(true);
  }

  const loginHandler = async () => {
    const res = await login(email, password);
      res ? navigate("/todo") : setIsError(true);
  }

  const formChangeHandler = () => {
    if (isSignup) {
      navigate("/");
    } else {
      navigate("/?signup");
    }
  }

  useEffect(() => {
    setIsError(false);
  }, [email, password]);
  
  return [isError, isSignup, signupHandler, loginHandler, formChangeHandler]
}

export default useAuth