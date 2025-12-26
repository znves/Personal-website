import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Editor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [activeFile, setActiveFile] = useState("");

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("sk_projects")) || [];
    const found = projects.find(p => String(p.id) === id);

    if (!found) {
      navigate("/myproject");
      return;
    }

    setProject(found);
    setActiveFile(found.entry);
  }, [id, navigate]);

  const updateFile = (content) => {
    const updated = {
      ...project,
      files: {
        ...project.files,
        [activeFile]: { content }
      }
    };

    setProject(updated);

    const projects = JSON.parse(localStorage.getItem("sk_projects")) || [];
    const newProjects = projects.map(p =>
      p.id === updated.id ? updated : p
    );

    localStorage.setItem("sk_projects", JSON.stringify(newProjects));
  };

  if (!project) return null;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="flex h-[calc(100vh-80px)]">
        <aside className="w-64 bg-zinc-950 border-r border-zinc-800 p-4">
          <h3 className="text-lg font-semibold mb-4">Files</h3>

          {Object.keys(project.files).map(file => (
            <div
              key={file}
              onClick={() => setActiveFile(file)}
              className={`p-2 rounded cursor-pointer ${
                activeFile === file
                  ? "bg-sky-500/20 text-sky-400"
                  : "hover:bg-zinc-800"
              }`}
            >
              {file}
            </div>
          ))}
        </aside>

        <main className="flex-1 p-6">
          <textarea
            value={project.files[activeFile].content}
            onChange={(e) => updateFile(e.target.value)}
            className="w-full h-full bg-zinc-900 text-white p-4 rounded-xl outline-none font-mono text-sm"
          />
        </main>
      </div>
    </div>
  );
}
