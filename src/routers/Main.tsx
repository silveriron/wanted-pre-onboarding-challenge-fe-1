import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Todo from '../components/Todo/Todo'

const Main = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/auth')
    } 

  }, [navigate])
  

  return (
    <Todo/>
  )
}

export default Main