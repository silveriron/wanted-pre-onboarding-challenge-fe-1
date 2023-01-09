import { List, Typography } from '@mui/material'
import TodoItem from '../TodoItem/TodoItem'
import { Todo } from '../TodoPage/TodoPage'

interface TodoListProps {
  todos: Todo[]
}


const TodoList = ({todos}: TodoListProps) => {

  return (
    <List  sx={{ width: '100%', maxWidth: 330, margin: 'auto', }}>
    {
      todos.length > 0 ? todos.map((todo) => <TodoItem key={todo.id} id={todo.id} title={todo.title} content={todo.content} createAt={todo.createdAt} />)
    : <Typography variant='body1' sx={{textAlign: "center"}}>할 일 목록이 없습니다.</Typography>}
    </List>
  )
}

export default TodoList