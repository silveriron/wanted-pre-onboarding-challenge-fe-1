import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';
import Auth from './routers/Auth';
import Main from './routers/Main';
import styled from '@emotion/styled';
import TodoDetail from './components/TodoDetail/TodoDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/auth',
    element: <Auth/>,
  },
  {
    path: '/todo/:id',
    element: <TodoDetail/>
  }
])

const RootContainer = styled.div`
  width: 400px;
  height: 800px;
  background-color: rgb(241, 249, 255);
  border-radius: 4px;
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RootContainer>
    <RouterProvider router={router} />
    </RootContainer>
  </React.StrictMode>
);
