import styled from '@emotion/styled'
import { IconButton, Typography } from '@mui/material'
import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { deleteTodo, getTodo } from '../../lib/api/todo'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTodo from '../AddTodo/AddTodo'

type Todo = {
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

const TodoDetail = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [isAddModal, setIsAddModal] = useState(false)
    const [isLatest, setIsLatest] = useState(true)
    const [todo, setTodo] = useState<Todo>({id: "", title: "", content: "", createdAt: ""})

    useEffect(() => {
        const help = async() => {
            if (id) {
                const res = await getTodo(id)
                setTodo(res?.data.data)

            }
        }
        help()
    }, [setTodo, id, isLatest])

    const onClickEdit = () => {
      setIsAddModal(true)
    }

    const onClickDelete = async () => {
      const res = await deleteTodo(todo.id)
      if (res) {
        navigate('/')
      }
    }

  return (
    <Main>
        <Typography variant='h1' sx={{fontSize: "2rem", fontWeight: 'bold', textAlign: 'center', paddingTop: 10}} >{todo.title}
    </Typography>
    <AddTodo setIsLatest={setIsLatest} isAddModal={isAddModal} setIsAddModal={setIsAddModal} todo={todo}/>
    <ButtonDiv>
        <IconButton color='primary' onClick={onClickEdit}><EditIcon/></IconButton>
        <IconButton color='primary' onClick={onClickDelete}><DeleteIcon/></IconButton>
    </ButtonDiv>
    <Typography variant='body1'sx={{textAlign: "center"}} >
      {todo.content}
    </Typography>
    </Main>
  )
}

export default TodoDetail