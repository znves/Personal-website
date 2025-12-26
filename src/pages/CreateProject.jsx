import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const LANGUAGES = [
  {
    id: "cpp",
    name: "C++",
    entry: "main.cpp",
    template: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello from C++";
  return 0;
}`
  },
  {
    id: "python",
    name: "Python",
    entry: "main.py",
    template: `print("Hello from Python")`
  },
  {
    id: "html",
    name: "HTML",
    entry: "index.html",
    template: `<!DOCTYPE html>
<html>
<head>
  <title>Skynefh</title>
</head>
<body>
  <h1>Hello from HTML</h1>
</body>
</html>`
  }
];

export default function CreateProject() {
  const navigate = useNavigate();

  const createProject = (lang) => {
    const projects = JSON.parse(localStorage.getItem("sk_projects")) || [];
    const id = Date.now();

    const project = {
      id,
      name: `${lang.name} Project`,
      language: lang.id,
      entry: lang.entry,
      files: {
        [lang.entry]: {
          content: lang.template
        }
      },
      createdAt: Date.now()
    };

    localStorage.setItem("sk_projects", JSON.stringify([...projects, project]));
    navigate(`/myproject/${id}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-10 py-24">
        <h1 className="text-4xl font-bold mb-10">
          Choose Programming Language
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {LANGUAGES.map(lang => (
            <button
              key={lang.id}
              onClick={() => createProject(lang)}
              className="p-10 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-sky-400 hover:scale-[1.03] transition"
            >
              <h2 className="text-3xl font-semibold">{lang.name}</h2>
              <p className="text-zinc-400 mt-3">
                Main file: {lang.entry}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
