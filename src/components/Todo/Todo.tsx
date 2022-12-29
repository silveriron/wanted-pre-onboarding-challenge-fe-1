import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import React, {useState} from 'react'
import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'

const ButtonDiv = styled.div`
  text-align: right;
  margin: 20px auto;
  padding: 20px 0;
  width: 80%;
  border-bottom: 1px solid black;
`

const Todo = () => {
  const [isAddModal, setIsAddModal] = useState(false)

  const onClick = () => {
    setIsAddModal(true)
  }

  return (
    <main>
        <Typography variant='h1' sx={{fontSize: "2rem", fontWeight: 'bold', textAlign: 'center', paddingTop: 10}} >Todo App</Typography>
        <ButtonDiv>
        <Button onClick={onClick} variant='contained'>할일 추가</Button>
        </ButtonDiv>
        <AddTodo isAddModal={isAddModal} setIsAddModal={setIsAddModal}/>
        <TodoList/>
    </main>
  )
}

export default Todo