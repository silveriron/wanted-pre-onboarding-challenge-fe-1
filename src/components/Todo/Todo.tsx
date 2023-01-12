import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { useState } from "react";

import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import { useGetTodos } from "../../hooks/todos/useTodoQuery";

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

const TodoPage = () => {
  const [isAddModal, setIsAddModal] = useState(false);
  const { data: todos } = useGetTodos();

  const modalHandler = () => {
    setIsAddModal(true);
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
        Todo App
      </Typography>
      <ButtonDiv>
        <Button onClick={modalHandler} variant="contained">
          할일 추가
        </Button>
      </ButtonDiv>
      <AddTodo isAddModal={isAddModal} setIsAddModal={setIsAddModal} />
      {todos && <TodoList todos={todos} />}
    </Main>
  );
};

export default TodoPage;
