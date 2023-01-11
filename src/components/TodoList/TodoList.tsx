import { List, Typography } from '@mui/material'

import TodoItem from '../TodoItem/TodoItem'
import { Todo } from '../../types/todo'

interface TodoListProps {
  todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({todos}) => {

  return (
    <List  sx={{ width: '100%', maxWidth: 330, margin: 'auto', }}>
    {
      todos.length > 0 ? todos.map((todo) => <TodoItem key={todo.id} id={todo.id} title={todo.title} content={todo.content} createdAt={todo.createdAt} />)
    : <Typography variant='body1' sx={{textAlign: "center"}}>할 일 목록이 없습니다.</Typography>}
    </List>
  )
}

export default TodoList