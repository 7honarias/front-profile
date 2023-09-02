import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Profile from "./pages/Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/users/:id" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
