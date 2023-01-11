import { ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { Todo } from '../../types/todo'

const TodoItem: React.FC<Todo> = ({title, id, createdAt}) => {
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
                {createdAt.split("T")[0]}
              </Typography>
            </React.Fragment>
          }
        />
    </ListItem>
          </Link>
  )
}

export default TodoItem