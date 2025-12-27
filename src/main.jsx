import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Create from "./pages/Create";
import Coding from "./pages/Coding";
import MyProjects from "./pages/MyProjects";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<Create />} />
        <Route path="/coding/:id" element={<Coding />} />
        <Route path="/myproject" element={<MyProjects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
