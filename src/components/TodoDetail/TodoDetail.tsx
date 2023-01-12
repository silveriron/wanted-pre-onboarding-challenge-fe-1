import styled from "@emotion/styled";
import { IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import AddTodo from "../AddTodo/AddTodo";
import { useDeleteTodo, useGetTodo } from "../../hooks/todos/useTodoQuery";

const Main = styled.main`
  overflow-y: scroll;
  height: 100%;
`;

const ButtonDiv = styled.div`
  text-align: right;
  margin: 20px auto;
  padding: 20px 0;
  width: 80%;
  border-bottom: 1px solid black;
`;

const TodoDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isAddModal, setIsAddModal] = useState(false);
  const { data: todo, isSuccess } = useGetTodo(id!);
  const deleteTodo = useDeleteTodo();

  const onClickEdit = () => {
    setIsAddModal(true);
  };

  const onClickDelete = async () => {
    const updateConfirm = window.confirm("정말 삭제하시겠습니까?");
    if (!updateConfirm || !todo) {
      return;
    }
    deleteTodo.mutate(todo.id);
    navigate("/todo");
  };

  return (
    <Main>
      <Typography
        variant="h1"
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: 10,
        }}
      >
        {isSuccess && todo.title}
      </Typography>
      <AddTodo
        isAddModal={isAddModal}
        setIsAddModal={setIsAddModal}
        todo={todo}
      />
      <ButtonDiv>
        <IconButton color="primary" onClick={onClickEdit}>
          <EditIcon />
        </IconButton>
        <IconButton color="primary" onClick={onClickDelete}>
          <DeleteIcon />
        </IconButton>
      </ButtonDiv>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        {isSuccess && todo.content}
      </Typography>
    </Main>
  );
};

export default TodoDetail;
