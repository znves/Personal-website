import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CodeEditor from "../components/CodeEditor";
import Output from "../components/Output";
import { getProjectById, updateProject } from "../utils/storage";
import { runPython } from "../utils/runPython";

export default function Coding() {
  const { id } = useParams();
  const project = getProjectById(id);

  const [files, setFiles] = useState(project.files);
  const [activeFile, setActiveFile] = useState(
    Object.keys(project.files)[0]
  );
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const save = () => {
    updateProject({ ...project, files });
    alert("Saved");
  };

  const run = async () => {
    setError("");
    setOutput("");

    if (project.language === "python") {
      const res = await runPython(files["main.py"]);
      setOutput(res.output);
      setError(res.error);
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: 20 }}>
        <h2>{project.name}</h2>

        {Object.keys(files).map(f => (
          <button key={f} onClick={() => setActiveFile(f)}>
            {f}
          </button>
        ))}

        <CodeEditor
          language={activeFile.endsWith(".py") ? "python" : activeFile.endsWith(".css") ? "css" : "html"}
          code={files[activeFile]}
          setCode={v => setFiles({ ...files, [activeFile]: v })}
        />

        <br />
        <button onClick={save}>Save</button>
        {project.language === "python" && (
          <button onClick={run} style={{ marginLeft: 8 }}>
            Run
          </button>
        )}

        {error && <pre style={{ color: "red" }}>{error}</pre>}

        <Output
          language={project.language}
          html={files["index.html"]}
          css={files["style.css"]}
          output={output}
        />
      </div>

      <Footer />
    </>
  );
}
