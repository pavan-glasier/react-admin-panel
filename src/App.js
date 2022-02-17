import React, { useEffect, useState } from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import Profile from "./Authentication/Profile";
import { authProtectedRoutes, publicRoutes } from "./routes";
function App() {
// console.log("publicRoutes", publicRoutes);
  return (
    <>
        <Routes>
          {publicRoutes.map((publicR) => <Route path={publicR.path} element={publicR.element} />)}
          {authProtectedRoutes.map((authR) => <Route path={authR.path} element={authR.element} />)}
          <Route path="/profile/:userId" element={<Profile name="profile"/>} />
          {/* <Route path="/story" element={ <Login home={publicRoutes[1].title} />} /> */}
        </Routes>
    </>
  );
}

export default App;
