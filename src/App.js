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


function App() {
  return (
    <>
    {/* <Dashboard /> */}
    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/basic-form" element={<Basicform />} />
          <Route path="/local-form" element={<FormLocal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
