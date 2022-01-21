import React from "react";
// import Basicform from "./components/forms/Basicform";
import Dashboard from "./components/Dashboard";
import Basicform from "./components/forms/Basicform";
import Header from "./components/Header";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
