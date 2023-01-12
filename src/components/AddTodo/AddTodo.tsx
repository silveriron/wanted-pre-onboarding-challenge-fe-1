import styled from "@emotion/styled";
import { TextField, Button, Typography, Dialog } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useEffect } from "react";
import { useCreateTodo, useUpdateTodo } from "../../hooks/todos/useTodoQuery";

import useInput from "../../hooks/useInput";
import { Todo } from "../../types/todo";

const Form = styled.form`
  width: 300px;
  height: 400px;
  margin: auto;
  padding: 50px 30px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

interface AppTodoProps {
  isAddModal: boolean;
  setIsAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  todo?: Todo;
}

const AddTodo = ({ isAddModal, setIsAddModal, todo }: AppTodoProps) => {
  const [title, onChangeTitle, titleValid, setTitle] = useInput();
  const [content, onChangeContent, contentValid, setContent] = useInput();
  const updateTodo = useUpdateTodo();
  const createTodo = useCreateTodo();

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setContent(todo.content);
    }
  }, [todo, setContent, setTitle]);

  const onClickClose = () => setIsAddModal(false);

  const onSubmitTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      const updateConfirm = window.confirm("정말 수정하시겠습니까?");
      if (!updateConfirm) {
        return;
      }
      updateTodo.mutate({ id: todo!.id, title, content });
    } else {
      createTodo.mutate({ title, content });
    }
    setContent("");
    setTitle("");
    onClickClose();
  };

  return (
    <Dialog onClose={onClickClose} open={isAddModal}>
      <Form onSubmit={onSubmitTodo}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", textAlign: "center", fontSize: "1.5rem" }}
        >
          Add Todo
        </Typography>
        <TextField
          onChange={onChangeTitle}
          size="small"
          variant="outlined"
          type="text"
          label="할 일"
          value={title}
        />
        <TextField
          onChange={onChangeContent}
          size="small"
          variant="outlined"
          type="text"
          label="내용"
          value={content}
        />
        {createTodo.isLoading ? (
          <LoadingButton loading>등록</LoadingButton>
        ) : (
          <Button type="submit" variant="contained">
            등록
          </Button>
        )}
        <Button onClick={onClickClose} type="button" variant="outlined">
          취소
        </Button>
      </Form>
    </Dialog>
  );
};

export default AddTodo;
