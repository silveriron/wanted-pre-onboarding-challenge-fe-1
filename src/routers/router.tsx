import { createBrowserRouter } from "react-router-dom";
import AuthHOC from "../components/HOC/AuthHOC";

import AuthPage from "../pages/AuthPage";
import MainPage from "../pages/MainPage";
import TodoDetailPage from "../pages/TodoDetailPage";

const ProtectedMainPage = AuthHOC(MainPage);

const ProtectedTodoDetailPage = AuthHOC(TodoDetailPage);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
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
