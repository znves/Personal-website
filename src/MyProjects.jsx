import { useNavigate } from "react-router-dom";

export default function MyProjects() {
  const navigate = useNavigate();
  const projects = JSON.parse(localStorage.getItem("sk_projects")) || [];

  return (
    <div className="min-h-screen bg-black text-white px-10 py-20">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>

      {projects.length === 0 && (
        <p className="text-zinc-500">No projects yet</p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div
            key={p.id}
            onClick={() => navigate(`/myproject/${p.id}`)}
            className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-sky-400 cursor-pointer"
          >
            <h2 className="text-2xl">{p.name}</h2>
            <p className="text-zinc-400">{p.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
