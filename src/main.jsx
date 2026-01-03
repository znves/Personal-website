import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Socials from "./Socials";
import Stats from "./Stats";
import NotFound from "./NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
