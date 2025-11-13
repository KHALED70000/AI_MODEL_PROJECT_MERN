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
import Addmodel from './PAGEs/ADDMODEL/Addmodel.jsx';
import Allmodel from './PAGEs/ALLMODEL/Allmodel.jsx';
import Privetrout from './PRIVETr/Privetrout.jsx';
import Viewmodel from './COMPONENTS/Viewmodel.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },
      {
        path: '/addmodel',
        element: <Privetrout>
          <Addmodel></Addmodel>
        </Privetrout>
      },
      {
        path: '/allmodels',
        element: <Privetrout>
          <Allmodel></Allmodel>
        </Privetrout>
      },
      {
        path: "/viewmodel/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/AllModels/${params.id}`),
        hydrateFallbackElement: <div>Loading...</div>,
        element: <Privetrout>
          <Viewmodel></Viewmodel>
        </Privetrout>
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
