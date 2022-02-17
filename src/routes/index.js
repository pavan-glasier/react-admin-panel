import React from 'react';
import { Navigate } from 'react-router-dom';
import Dashboard from "../components/Dashboard";
import Basicform from "../components/forms/Basicform";
import FormLocal from "../components/forms/FormLocal";
import Formdemo from "../components/Formdemo";
import Localdemo from "../components/Localdemo";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Profile from "../Authentication/Profile";
import TestingForm from '../components/forms/TestingForm';
import Users from '../Authentication/Users';


const authProtectedRoutes = [
  { path: '/dashboard', element: <Dashboard title="Dashboard" name="dashboard" /> },
  { path: '/basic-form', element: <Basicform title="Basic form" name="basic-form" /> },
  { path: '/local-form', element: <FormLocal title="Form Local" name="local-form" /> },
  { path: '/demo-form', element: <Formdemo title="Form demo" name="demo-form" /> },
  { path: '/local-demo', element: <Localdemo title="Local demo" name="local-demo" /> },
  { path: '/test', element: <TestingForm title="Testing Form" name="test" />},
  { path: '/users', element: <Users title="All Users" name="users" />},
  { path: '/', element: <Dashboard title="Dashboard" name="dashboard" /> },
];
const publicRoutes = [
  { path: '/register', element: <Register title="Register" /> },
  { path: '/login', element: <Login title="Login" /> },
];

export { authProtectedRoutes, publicRoutes };
