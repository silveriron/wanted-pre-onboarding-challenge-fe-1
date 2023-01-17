import { createBrowserRouter } from "react-router-dom";
import AuthHOC from "../components/HOC/AuthHOC";

import AuthPage from "../pages/AuthPage";
import MainPage from "../pages/MainPage";
import TodoDetailPage from "../pages/TodoDetailPage";
import { haveAuthMessage, needAuthMessage } from "../constant/auth";
import { getToken } from "../lib/api/getToken";

const needToken = () => {
  const token = getToken();

  if (token) {
    return false;
  } else {
    return true;
  }
};

const haveToken = () => {
  const token = getToken();

  if (token) {
    return true;
  } else {
    return false;
  }
};

const ProtectedMainPage = AuthHOC(MainPage, needToken, needAuthMessage, "/");

const ProtectedTodoDetailPage = AuthHOC(
  TodoDetailPage,
  needToken,
  needAuthMessage,
  "/"
);

const ProtectedAuthPage = AuthHOC(
  AuthPage,
  haveToken,
  haveAuthMessage,
  "/todo"
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedAuthPage />,
  },
  {
    path: "/todo",
    element: <ProtectedMainPage />,
  },
  {
    path: "/todo/:id",
    element: <ProtectedTodoDetailPage />,
  },
]);

export default router;
