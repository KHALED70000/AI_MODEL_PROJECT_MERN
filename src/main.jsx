import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './LayOut/Root.jsx';
import Home from './PAGEs/HOME/Home.jsx';
import Login from './PAGEs/LOGIN/Login.jsx';
import Ragister from './PAGEs/RAGISTER/Ragister.jsx';
import AuthProvider from './CONTEXT/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index: true,
        path: '/',
        Component: Home,
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/ragister',
        Component: Ragister,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
