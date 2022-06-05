import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Page404 from "./pages/404/Page404";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
