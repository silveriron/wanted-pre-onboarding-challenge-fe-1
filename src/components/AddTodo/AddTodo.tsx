import styled from '@emotion/styled'
import { TextField, Button, Typography, Dialog } from '@mui/material'
import React, {useEffect} from 'react'

import useInput from '../../hooks/useInput'
import { createTodo, putTodos } from '../../lib/api/todo'
import { Todo } from '../TodoPage/TodoPage'

const Form = styled.form`
  width: 300px;
  height: 400px;
  margin: auto;
  padding: 50px 30px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

interface AppTodoProps {
  isAddModal: boolean,
  setIsAddModal: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLatest: React.Dispatch<React.SetStateAction<boolean>>,
  todo?: Todo
}

const AddTodo = ({isAddModal, setIsAddModal, setIsLatest, todo}: AppTodoProps) => {
  const [title, onChangeTitle, titleValid, setTitle] =  useInput()
  const [content, onChangeContent, contentValid, setContent] =  useInput()
  const isEdit = !!todo

  useEffect(()=> {
    if (todo) {
      setTitle(todo.title)
      setContent(todo.content)
    }
  }, [todo, setContent, setTitle])


  const onClickClose = () => setIsAddModal(false)

  const onSubmitTodo = async (e:React.FormEvent) => {
    e.preventDefault();
    if (isEdit) {
        const res = await putTodos(todo!.id, title, content)
        if (res) {
          setIsLatest(false)
          onClickClose()
        }
    } else {

      const res = await createTodo(title, content)
      if (res) {
        setIsLatest(false)
        onClickClose()
      }
    }
  }

  return (
    <Dialog onClose={onClickClose} open={isAddModal} >
    <Form onSubmit={onSubmitTodo}>
      <Typography variant='h2' sx={{fontWeight: "bold", textAlign: 'center', fontSize: '1.5rem'}} >Add Todo</Typography>
      <TextField onChange={onChangeTitle} size='small' variant='outlined' type="text" label="할 일" value={title} />
      <TextField onChange={onChangeContent}  size='small' variant='outlined' type="text" label="내용" value={content} />
      <Button type="submit" variant="contained" >등록</Button>
      <Button onClick={onClickClose} type='button' variant="outlined" >취소</Button>
    </Form>
    </Dialog>
  )
}

export default AddTodo