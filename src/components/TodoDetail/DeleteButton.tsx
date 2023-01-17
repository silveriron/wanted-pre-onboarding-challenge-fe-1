import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

import { useDeleteTodo } from "../../hooks/todos/useTodoQuery";
import { Todo } from "../../types/todo";

interface DeleteButtonProps {
  todo: Todo;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ todo }) => {
  const deleteTodo = useDeleteTodo();
  const navigate = useNavigate();

  const onClickDelete = async () => {
    const updateConfirm = window.confirm("정말 삭제하시겠습니까?");
    if (!updateConfirm || !todo) {
      return;
    }
    deleteTodo.mutate(todo.id);
    navigate("/todo");
  };

  return (
    <IconButton color="primary" onClick={onClickDelete}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
