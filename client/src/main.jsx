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
import LoanVerificationForm from './Formdesgin';
import SuccessMessage from './components/SuccessMessage';
import ManagerDashboard from './components/Manager/ManagerDashboard';
import PrivacyPolicy from './components/Privacy and Policy/PrivacyProlicy';
import TermsOfService from './components/TermsOfService/TermsOfService';
import EmplyeeDashboard from './components/EmplyeeDashBoard/EmplyeeDashboard';



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
      { path: 'successsmsg', element: <SuccessMessage /> },
      { path: 'manager', element: <ManagerDashboard /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-of-services', element: <TermsOfService /> },
      { path: 'forms', element: <EmplyeeDashboard /> },

    ],
  },
]);

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
        <RouterProvider router={router} />
      
  </React.StrictMode>
);
