import { useNavigate } from "react-router-dom";
import { LANGUAGES } from "../data/languages";

export default function CreateProject() {
  const navigate = useNavigate();

  const handleCreate = (lang) => {
    const projects = JSON.parse(localStorage.getItem("sk_projects")) || [];
    const id = Date.now();

    projects.push({
      id,
      name: `${lang.name} Project`,
      language: lang.id,
      entry: lang.entry,
      files: {
        [lang.entry]: { content: lang.template }
      },
      createdAt: Date.now()
    });

    localStorage.setItem("sk_projects", JSON.stringify(projects));
    navigate(`/myproject/${id}`);
  };

  return (
    <div className="min-h-screen bg-black text-white px-10 py-20">
      <h1 className="text-4xl font-bold mb-10">Choose Language</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {LANGUAGES.map(lang => (
          <button
            key={lang.id}
            onClick={() => handleCreate(lang)}
            className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-sky-400 transition"
          >
            <h2 className="text-2xl font-semibold">{lang.name}</h2>
            <p className="text-zinc-400">{lang.entry}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
