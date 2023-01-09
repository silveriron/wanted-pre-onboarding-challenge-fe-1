import { ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

interface TodoItemProps {
  title: string,
  content: string,
  createAt: string,
  id: string
}

const TodoItem = ({title, content, id, createAt}: TodoItemProps) => {
  return (
    <Link to={`/todo/${id}`}>
    <ListItem alignItems="center" sx={{border: '1px solid black', marginBottom: "10px"}}>
      <ListItemText
          primary={title}
          sx={{textAlign: "center"}}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {createAt.split("T")[0]}
              </Typography>
            </React.Fragment>
          }
        />
    </ListItem>
          </Link>
  )
}

export default TodoItem