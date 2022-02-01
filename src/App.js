import React from "react";
// import Basicform from "./components/forms/Basicform";
import Dashboard from "./components/Dashboard";
import Basicform from "./components/forms/Basicform";
import FormLocal from "./components/forms/FormLocal";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Formdemo from "./components/Formdemo";
import Localdemo from "./components/Localdemo";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";



function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Login /> */}
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/basic-form" element={<Basicform />} />
          <Route path="/local-form" element={<FormLocal />} />
          <Route path="/demo-form" element={<Formdemo />} />
          <Route path="/local-demo" element={<Localdemo />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
