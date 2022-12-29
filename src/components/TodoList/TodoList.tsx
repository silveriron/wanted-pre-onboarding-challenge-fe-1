import React, {useState, useEffect} from 'react'
import { getTodos } from '../../lib/api/todo'
import TodoItem from '../TodoItem/TodoItem'

type Todo = {
  id: string,
  title: string,
  content: string,
  createdAt: string
}


const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])


  useEffect(() => {
    const help = async () => {
      const res = await getTodos() 
      setTodos(res?.data.data)
    }
    help()
    
  }, [setTodos])

  return (
    <ul>
    {
      todos.map((todo) => <TodoItem key={todo.id} title={todo.title} content={todo.content} createAt={todo.createdAt} />)
    }
    </ul>
  )
}

export default TodoList