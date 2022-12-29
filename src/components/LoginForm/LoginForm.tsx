import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import {useNavigate, useLocation} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import useInput from '../../hooks/useInput'
import { login, signup } from '../../lib/api/auth'

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
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsError(false)
    }, [email, password])

    const {search} = useLocation()

    const formState = search.split("?")[1] === "signup"

    const navigate = useNavigate()

    const onChangeState = () => {
        if (formState) {
            navigate('/auth')
        } else {
            navigate('/auth?signup')
        }
    }

    const onSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        if (formState) {
            const res = await signup(email, password)
            res ? navigate('/') : setIsError(true)
        } else {
            const res = await login(email, password)
            res ? navigate('/')  : setIsError(true)
            }
    }
  return (
    <Form onSubmit={onSubmit}>
        <Typography sx={{fontSize: "1.5rem", fontWeight: 'bold'}} variant='h1'>안녕하세요. Todo앱 입니다.</Typography>
        <Typography variant='body1'>{formState ? "가입 정보를 입력해주세요." : "로그인을 해주세요."}</Typography>
        <TextField error={isError}  onChange={onChangeEmail} value={email} type="email" label="이메일" size="small" variant='outlined' />
        <TextField error={isError} onChange={onChangePassword} value={password}  label="비밀번호" size="small" type="password" variant='outlined' />
        {isError && <Typography variant='body1' sx={{color: 'red', textAlign: 'center'}}>{formState ?"이미 가입한 이메일입니다." :   "입력 정보를 확인해주세요."}</Typography>}
        <Button disabled={ !isValidEmail || !isValidPassword } type="submit" >{formState ? "회원가입" : "로그인"}</Button>
        <Button type='button' onClick={onChangeState}>{formState ? "로그인하러가기": "가입하러가기"}</Button>
    </Form>
  )
}

export default LoginForm