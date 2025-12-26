import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MyProjects() {
  const navigate = useNavigate();
  const projects = JSON.parse(localStorage.getItem("sk_projects")) || [];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-10 py-24">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>

        {projects.length === 0 && (
          <p className="text-zinc-500">No projects yet</p>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              onClick={() => navigate(`/myproject/${project.id}`)}
              className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-sky-400 cursor-pointer transition"
            >
              <h2 className="text-2xl font-semibold">
                {project.name}
              </h2>
              <p className="text-zinc-400 mt-2">
                Language: {project.language}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
