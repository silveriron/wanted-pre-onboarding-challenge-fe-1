import { createBrowserRouter } from "react-router-dom";
import { ProtectedAuthPage } from "../pages/AuthPage";
import { ProtectedMainPage } from "../pages/MainPage";
import { ProtectedTodoDetailPage } from "../pages/TodoDetailPage";

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
