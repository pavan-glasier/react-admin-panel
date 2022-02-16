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

const authProtectedRoutes = [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/basic-form', element: Basicform },
  { path: '/local-form', element: FormLocal },
  { path: '/demo-form', element: Formdemo },
  { path: '/', element: () => <Navigate replace to="/dashboard" /> },
];

const publicRoutes = [
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/profile', element: <Profile /> },
];

export { authProtectedRoutes, publicRoutes };
