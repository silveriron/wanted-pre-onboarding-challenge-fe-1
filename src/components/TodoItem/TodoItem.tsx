import { Typography } from '@mui/material'
import React from 'react'

interface TodoItemProps {
  title: string,
  content: string,
  createAt: string
}

const TodoItem = ({title, content, createAt}: TodoItemProps) => {
  return (
    <li>
      <Typography variant='h3'>{title}</Typography>
      <Typography variant='body2' >{createAt.split("T")[0]}</Typography>
    </li>
  )
}

export default TodoItem