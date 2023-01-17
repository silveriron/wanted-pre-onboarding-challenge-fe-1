import {useState} from 'react'
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

import AddTodo from "../AddTodo/AddTodo";
import { Todo } from '../../types/todo';

interface EditButtonProps {
    todo: Todo
}

const EditButton: React.FC<EditButtonProps> = ({todo}) => {
  const [isAddModal, setIsAddModal] = useState(false);

    const onClickEdit = () => {
        setIsAddModal(true);
      };

  return (
    <>
    <IconButton color="primary" onClick={onClickEdit}>
          <EditIcon />
    </IconButton>
    <AddTodo
        isAddModal={isAddModal}
        setIsAddModal={setIsAddModal}
        todo={todo}
      />
    </>
  )
}

export default EditButton