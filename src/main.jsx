import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Socials from "./Socials";
import Stats from "./Stats";
import Blog from "./Blog";
import ScrollToTop from "./components/ScrollToTop";

import NotFound from "./NotFound";

const clickSound = new Audio("/click.ogg");
clickSound.volume = 0.3;

let unlocked = false;

document.addEventListener("click", () => {
  if (!unlocked) {
    clickSound.play().then(() => {
      clickSound.pause();
      clickSound.currentTime = 0;
      unlocked = true;
    }).catch(() => {});
    return;
  }

  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
