import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  const navigate = useNavigate();
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const count = parseInt(localStorage.getItem("sk_project_count")) || 0;
    setProjectCount(count);
  }, []);

  const createProject = () => {
    const nextId = projectCount + 1;

    const projects = JSON.parse(localStorage.getItem("sk_projects")) || [];

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
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-screen flex items-center">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-sky-900/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
              The Future<br />
              of <span className="text-sky-400">Private Coding</span>
            </h1>

            <p className="text-zinc-300 text-xl max-w-xl">
              Skynefh CodeLab is a modern, private-first coding playground built
              for rapid experiments, learning, and focused development.
            </p>

            <div className="flex gap-6 flex-wrap">
              <button
                onClick={createProject}
                className="px-12 py-5 rounded-full bg-sky-500 text-black font-semibold text-lg hover:bg-sky-400 hover:scale-105 transition-all"
              >
                Create Project
              </button>

              <button
                onClick={() => navigate("/myproject")}
                className="px-12 py-5 rounded-full border border-white/20 text-white text-lg hover:border-sky-400 hover:text-sky-400 transition-all"
              >
                View Projects
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-sky-500/30 blur-3xl rounded-full"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <pre className="text-sm text-zinc-300 leading-relaxed">
{`project/
 ├── index.js
 ├── helper.js
 └── output

> Run
Hello Skynefh`}
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-40 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
            className="rounded-3xl shadow-2xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold">
              Built for Developers
            </h2>

            <p className="text-zinc-400 text-lg">
              Designed with simplicity and performance in mind, Skynefh removes
              unnecessary complexity and lets you focus entirely on code.
            </p>

            <ul className="space-y-4 text-zinc-300 text-lg">
              <li>• Instant environment setup</li>
              <li>• Multi-file workspace</li>
              <li>• Private by default</li>
              <li>• Lightweight & fast</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-40 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-5xl font-extrabold text-center mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Developers Choose Skynefh
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              ["Private First", "Your projects stay on your device."],
              ["Fast Execution", "Run code instantly without setup."],
              ["Modern UI", "Clean, focused, distraction-free."],
              ["Multi Language", "Designed to scale with more languages."],
              ["No Accounts", "No signups. No tracking."],
              ["Future Ready", "Built for growth and extensibility."],
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-10 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-sky-500 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {item[0]}
                </h3>
                <p className="text-zinc-400 text-lg">
                  {item[1]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-48 bg-gradient-to-br from-zinc-900 to-black">
        <motion.div
          className="max-w-5xl mx-auto px-6 text-center space-y-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-extrabold">
            Start Building Today
          </h2>

          <p className="text-zinc-400 text-xl">
            No setup. No friction. Just pure coding in a modern environment
            designed for speed and focus.
          </p>

          <button
            onClick={createProject}
            className="mt-8 px-16 py-6 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 text-black font-bold text-xl hover:scale-105 transition-transform"
          >
            Create Your First Project
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
