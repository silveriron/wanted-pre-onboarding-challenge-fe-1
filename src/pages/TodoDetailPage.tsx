import AuthHOC from "../components/HOC/AuthHOC";
import TodoDetail from "../components/TodoDetail/TodoDetail";
import { needAuthMessage } from "../constant/auth";
import { needToken } from "../lib/utils/pageAuth";

const TodoDetailPage = () => {
  return <TodoDetail />;
};

export const ProtectedTodoDetailPage = AuthHOC(
  TodoDetailPage,
  needToken,
  needAuthMessage,
  "/"
);

export default TodoDetailPage;
