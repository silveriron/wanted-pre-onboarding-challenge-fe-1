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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/auth',
    element: <Auth/>,
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='root-container'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
