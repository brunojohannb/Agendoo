import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App.jsx';
import Login from './Routes/Login/Login.jsx';
import Forgot from './Routes/Forgot/Forgot.jsx';
import Create from './Routes/Create/Temp.jsx';
import Home from './Routes/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Login />, 
      },
      {
        path: "/ForgotPassword",
        element: <Forgot />,
      },
      {
        path: "/CreateAcount",
        element: <Create />,
      },
      {
        path: "home/:accountId",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

