import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';

import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Routes/Route';
import AuthProvider from './AuthProvider/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className=' max-w-7xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>

    </AuthProvider>



  </React.StrictMode>,
)
