import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import TodoPage from '../components/TodoPage/TodoPage'

const Main = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/auth')
    } 

  }, [navigate])
  

  return (
    <TodoPage/>
  )
}

export default Main