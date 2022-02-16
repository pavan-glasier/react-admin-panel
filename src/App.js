import React, { useEffect } from "react";
// import Basicform from "./components/forms/Basicform";
import Dashboard from "./components/Dashboard";
import Basicform from "./components/forms/Basicform";
import FormLocal from "./components/forms/FormLocal";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import $ from 'jquery';

import {
  Routes,
  Route
} from "react-router-dom";
import Formdemo from "./components/Formdemo";
import Localdemo from "./components/Localdemo";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Profile from "./Authentication/Profile";
import TestingForm from "./components/forms/TestingForm";
// import { useNavigate } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
          <Route path="/test" element={<TestingForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/basic-form" element={<Basicform />} />
          <Route path="/local-form" element={<FormLocal />} />
          <Route path="/demo-form" element={<Formdemo />} />
          <Route path="/local-demo" element={<Localdemo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
    </>
  );
}

export default App;
