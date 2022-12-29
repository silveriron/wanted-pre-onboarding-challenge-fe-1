import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import {useNavigate, useLocation} from 'react-router-dom'
import React from 'react'
import useInput from '../../hooks/useInput'

const Form = styled.form`
    width: 80%;
    margin: auto;
    padding-top: 140px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const validEmail = (value: string) => {
    if (!value.includes('@') || !value.includes('.') ) {
        return false
    } else {
        return true
    }
}

const validPassword = (value: string) => {
    if (value.length < 9) {
        return false
    } else {
        return true
    }
}

const LoginForm = () => {
    const [email, onChangeEmail, isValidEmail] = useInput(validEmail)
    const [password, onChangePassword, isValidPassword] = useInput(validPassword)

    const {search} = useLocation()

    const state = search.split("?")

    const signup = state[1] === "signup"

    const navigate = useNavigate()

    const onChangeState = () => {
        if (signup) {
            navigate('/auth')
        } else {
            navigate('/auth?signup')
        }
    }

    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        
    }
  return (
    <Form onSubmit={onSubmit}>
        <Typography sx={{fontSize: "1.5rem", fontWeight: 'bold'}} variant='h1'>안녕하세요. Todo앱 입니다.</Typography>
        <Typography variant='body1'>{signup ? "가입 정보를 입력해주세요." : "로그인을 해주세요."}</Typography>
        <TextField  onChange={onChangeEmail} value={email} type="email" label="이메일" size="small" variant='outlined' />
        <TextField onChange={onChangePassword} value={password}  label="비밀번호" size="small" type="password" variant='outlined' />
        <Button disabled={ !isValidEmail || !isValidPassword } type="submit" >{signup ? "회원가입" : "로그인"}</Button>
        <Button type='button' onClick={onChangeState}>{signup ? "로그인하러가기": "가입하러가기"}</Button>
    </Form>
  )
}

export default LoginForm