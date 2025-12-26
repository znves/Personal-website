import { Routes, Route } from "react-router-dom";
import App from "./App";
import CreateProject from "./pages/CreateProject";
import MyProjects from "./pages/MyProjects";
import Editor from "./pages/Editor";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/create" element={<CreateProject />} />
      <Route path="/myproject" element={<MyProjects />} />
      <Route path="/myproject/:id" element={<Editor />} />
    </Routes>
  );
}
