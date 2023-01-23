import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

//
import App from '@src/App';
import { QueryClientProvider, queryClient } from '@src/react-query/queryClient';
import '@src/index.css';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
