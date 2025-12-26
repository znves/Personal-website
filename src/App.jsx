import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const navigate = useNavigate();
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const count = parseInt(localStorage.getItem("sk_project_count")) || 0;
    setProjectCount(count);
  }, []);

  const createProject = () => {
    const nextId = projectCount + 1;

    const projects =
      JSON.parse(localStorage.getItem("sk_projects")) || [];

    projects.push({
      id: nextId,
      createdAt: Date.now(),
      language: "javascript",
      files: {
        "index.js": "console.log('Welcome to Skynefh CodeLab');",
      },
    });

    localStorage.setItem("sk_projects", JSON.stringify(projects));
    localStorage.setItem("sk_project_count", nextId.toString());

    navigate(`/myproject/${nextId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-zinc-900 to-slate-900 text-white">
      <Navbar />

      <section className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              A Simple<br />
              <span className="text-sky-400">Private Code Playground</span>
            </h1>

            <p className="text-zinc-300 text-lg max-w-xl">
              Skynefh CodeLab lets you create small coding projects instantly.
              No setup. No login. Everything stays private on your device.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={createProject}
                className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-semibold transition-all duration-300 hover:scale-105"
              >
                Create Project
              </button>

              <button
                onClick={() => navigate("/myproject")}
                className="px-8 py-4 rounded-xl border border-zinc-700 hover:border-zinc-400 text-white transition-all duration-300 hover:scale-105"
              >
                Show Projects
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-sky-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl">
              <pre className="text-sm text-zinc-300 overflow-hidden">
{`project/
 ├── index.js
 └── output

> node index.js
Welcome to Skynefh CodeLab`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-black/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-sky-500 transition">
            <h3 className="text-xl font-semibold mb-3">Instant Projects</h3>
            <p className="text-zinc-400">
              Create a project in one click with a ready-to-code main file.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-sky-500 transition">
            <h3 className="text-xl font-semibold mb-3">Multi File Support</h3>
            <p className="text-zinc-400">
              Add, delete, or upload files inside your project workspace.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-sky-500 transition">
            <h3 className="text-xl font-semibold mb-3">Run & See Output</h3>
            <p className="text-zinc-400">
              Execute your code and see the result instantly below the editor.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Built for Focused Coding
          </h2>
          <p className="text-zinc-400 text-lg">
            No public sharing. No distractions. Just you, your code,
            and a clean environment to experiment.
          </p>

          <button
            onClick={createProject}
            className="mt-6 px-10 py-4 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 text-black font-bold hover:scale-105 transition-transform"
          >
            Start Coding Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
