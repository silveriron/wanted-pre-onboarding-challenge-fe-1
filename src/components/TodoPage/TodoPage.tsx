import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import {useState, useEffect} from 'react'

import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'
import { getTodos } from '../../lib/api/todo'

export type Todo = {
  id: string,
  title: string,
  content: string,
  createdAt: string
}

const Main = styled.main`
  overflow-y: scroll;
  height: 100%;
`

const ButtonDiv = styled.div`
  text-align: right;
  margin: 20px auto;
  padding: 20px 0;
  width: 80%;
  border-bottom: 1px solid black;
`

const TodoPage = () => {
  const [isAddModal, setIsAddModal] = useState(false)
  const [isLatest, setIsLatest] = useState(true)
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const help = async () => {
      const res = await getTodos() 
      if (res?.data.data) {
        const data = res.data.data.reverse()
        setTodos(data)
        setIsLatest(true)
      }
    }
    
    help()
    
  }, [setTodos, isLatest])

  const onClick = () => {
    setIsAddModal(true)
  }

  return (
    <Main>
        <Typography variant='h1' sx={{fontSize: "2rem", fontWeight: 'bold', textAlign: 'center', paddingTop: 10}} >Todo App</Typography>
        <ButtonDiv>
        <Button onClick={onClick} variant='contained'>할일 추가</Button>
        </ButtonDiv>
        <AddTodo setIsLatest={setIsLatest} isAddModal={isAddModal} setIsAddModal={setIsAddModal}/>
        <TodoList todos={todos}/>
    </Main>
  )
}

export default TodoPage