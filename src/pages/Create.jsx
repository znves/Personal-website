import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createProject } from "../utils/storage";

export default function Create() {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("html");
  const navigate = useNavigate();

  const submit = () => {
    if (!name.trim()) return alert("Project name required");

    const id = Date.now().toString();

    const files =
      language === "html"
        ? {
            "index.html": `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Hello World</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`,
            "style.css": `body {
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: white;
  padding: 20px;
}`
          }
        : {
            "main.py": `print("Hello World")`
          };

    createProject({ id, name, language, files });
    navigate(`/coding/${id}`);
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: 40 }}>
        <h2>Create New Project</h2>

        <input
          placeholder="Project name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <br /><br />

        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="html">HTML + CSS</option>
          <option value="python">Python</option>
        </select>

        <br /><br />

        <button onClick={submit}>Create Project</button>
      </div>

      <Footer />
    </>
  );
}
