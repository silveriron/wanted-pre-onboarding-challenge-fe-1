import { createBrowserRouter } from "react-router-dom";
import AuthHOC from "../components/HOC/AuthHOC";

import AuthPage from '../pages/AuthPage';
import MainPage from '../pages/MainPage';
import TodoDetailPage from "../pages/TodoDetailPage";

const AuthMainPage = AuthHOC(MainPage)

const AuthTodoDetailPage = AuthHOC(TodoDetailPage)

const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthMainPage />,
    },
    {
      path: '/auth',
      element: <AuthPage/>,
    },
    {
      path: '/todo/:id',
      element: <AuthTodoDetailPage/>
    }
  ])

  export default router