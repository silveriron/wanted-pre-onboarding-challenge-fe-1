import styled from '@emotion/styled'
import { TextField, Button, Typography, Dialog } from '@mui/material'
import React from 'react'
import useInput from '../../hooks/useInput'
import { createTodo } from '../../lib/api/todo'

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
  setIsAddModal: React.Dispatch<React.SetStateAction<boolean>>
}


const AddTodo = ({isAddModal, setIsAddModal}: AppTodoProps) => {
  const [title, onChangeTitle] =  useInput()
  const [content, onChangeContent] =  useInput()

  const onClickClose = () => setIsAddModal(false)

  const onSubmitTodo = async (e:React.FormEvent) => {
    e.preventDefault();
    const res = await createTodo(title, content)
    if (res) {
      onClickClose()
    }
  }

  return (
    <Dialog onClose={onClickClose} open={isAddModal} >
    <Form onSubmit={onSubmitTodo}>
      <Typography variant='h2' sx={{fontWeight: "bold", textAlign: 'center', fontSize: '1.5rem'}} >Add Todo</Typography>
      <TextField onChange={onChangeTitle} size='small' variant='outlined' type="text" label="할 일" />
      <TextField onChange={onChangeContent}  size='small' variant='outlined' type="text" label="내용" />
      <Button type="submit" variant="contained" >등록</Button>
      <Button onClick={onClickClose} type='button' variant="outlined" >취소</Button>
    </Form>
    </Dialog>
  )
}

export default AddTodo