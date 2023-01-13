import styled from "@emotion/styled";
import { Typography, Button, TextField } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";

import useInput from "../../hooks/useInput";
import { validEmail, validPassword } from "../../lib/valid";
import useAuth from "../../hooks/auth/useAuth";

const Form = styled.form`
  width: 80%;
  margin: auto;
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const LoginForm = () => {
  const [email, onChangeEmail, isValidEmail] = useInput(validEmail);
  const [password, onChangePassword, isValidPassword] = useInput(validPassword);
  const [isError, isSignup, signupHandler, loginHandler, formChangeHandler] = useAuth({email, password})

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup) {
      signupHandler()
    } else {
      loginHandler()
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }} variant="h1">
        안녕하세요. Todo앱 입니다.
      </Typography>
      <Typography variant="body1">
        {isSignup ? "가입 정보를 입력해주세요." : "로그인을 해주세요."}
      </Typography>
      <TextField
        error={isError}
        onChange={onChangeEmail}
        value={email}
        type="email"
        label="이메일"
        size="small"
        variant="outlined"
      />
      <TextField
        error={isError}
        onChange={onChangePassword}
        value={password}
        label="비밀번호"
        size="small"
        type="password"
        variant="outlined"
      />
      {!isError && (
        <Typography variant="subtitle2">
          비밀번호 길이 9자 이상 입력해주세요.
        </Typography>
      )}
      {isError && (
        <Typography variant="body1" sx={{ color: "red", textAlign: "center" }}>
          {isSignup
            ? "이미 가입한 이메일입니다."
            : "입력 정보를 확인해주세요."}
        </Typography>
      )}
      <Button disabled={!isValidEmail || !isValidPassword} type="submit">
        {isSignup ? "회원가입" : "로그인"}
      </Button>
      <Button type="button" onClick={formChangeHandler}>
        {isSignup ? "로그인하러가기" : "가입하러가기"}
      </Button>
    </Form>
  );
};

export default LoginForm;
