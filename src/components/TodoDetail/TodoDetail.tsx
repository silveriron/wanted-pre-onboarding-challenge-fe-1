import styled from "@emotion/styled";
import { IconButton, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDeleteTodo, useGetTodo } from "../../hooks/todos/useTodoQuery";
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
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: todo, isSuccess } = useGetTodo(id!);
  const deleteTodo = useDeleteTodo();

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
      
      <ButtonDiv>
        { isSuccess && <EditButton todo={todo}/>}
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
