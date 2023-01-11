import { useMutation, useQuery, useQueryClient } from "react-query";

import {
  createTodo,
  getTodo,
  getTodos,
  putTodo,
  deleteTodo,
} from "../../lib/api/todo";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ title, content }: { title: string; content: string }) =>
      createTodo(title, content),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};

export const useGetTodos = () => useQuery("todos", getTodos);

export const useGetTodo = (id: string) =>
  useQuery(["todos", id], () => getTodo(id));

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (todo: { id: string; title: string; content: string }) =>
      putTodo(todo.id, todo.title, todo.content),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation((id: string) => deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};
