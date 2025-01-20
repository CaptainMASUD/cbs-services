import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import LoginPage from './components/Login/Login';
import AdminDashboard from './Admindashboard';
import LoanVerificationForm from './formdesgin';



// Create browser router and configure routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'form', element: < LoanVerificationForm/> },
      { path: 'admin', element: <AdminDashboard /> },

    ],
  },
]);

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
        <RouterProvider router={router} />
      
  </React.StrictMode>
);
