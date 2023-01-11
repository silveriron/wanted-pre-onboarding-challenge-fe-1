import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';
import router from './routers/router';

const RootContainer = styled.div`
  width: 400px;
  height: 800px;
  background-color: rgb(241, 249, 255);
  border-radius: 4px;
  position: relative;
`

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RootContainer>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools/>
    </QueryClientProvider>
    </RootContainer>
  </React.StrictMode>
);
