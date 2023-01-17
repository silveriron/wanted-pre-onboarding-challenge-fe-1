import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { useGetTodo } from "../../hooks/todos/useTodoQuery";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

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
  const { id } = useParams();
  const { data: todo, isSuccess } = useGetTodo(id!);

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

      <ButtonDiv>
        {isSuccess && <EditButton todo={todo} />}
        {isSuccess && <DeleteButton todo={todo} />}
      </ButtonDiv>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        {isSuccess && todo.content}
      </Typography>
    </Main>
  );
};

export default TodoDetail;
