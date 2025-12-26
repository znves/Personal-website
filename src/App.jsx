import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  FaLock,
  FaBolt,
  FaCode,
  FaFolderOpen,
  FaUserSlash,
  FaRocket,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const features = [
  {
    icon: <FaLock />,
    title: "Private by Default",
    desc: "All projects live locally. No login, no server, no tracking."
  },
  {
    icon: <FaBolt />,
    title: "Instant Setup",
    desc: "Create projects in seconds without configuration."
  },
  {
    icon: <FaFolderOpen />,
    title: "Project Mode",
    desc: "Work with files, not just snippets."
  },
  {
    icon: <FaCode />,
    title: "Multi Language",
    desc: "C++, Python, HTML — more coming."
  },
  {
    icon: <FaUserSlash />,
    title: "No Accounts",
    desc: "No signups, no emails, no passwords."
  },
  {
    icon: <FaRocket />,
    title: "Fast Workflow",
    desc: "Built for speed and focus."
  }
];

export default function App() {
  const navigate = useNavigate();
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("sk_projects")) || [];
    setProjectCount(stored.length);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-sky-900/40" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1 variants={fadeUp} className="text-6xl font-extrabold">
              Build Code.<br />
              <span className="text-sky-400">Privately.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-zinc-400 text-xl max-w-xl">
              Skynefh is a private coding workspace that runs entirely in your browser.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-4">
              <button
                onClick={() => navigate("/create")}
                className="px-8 py-4 bg-sky-500 text-black font-bold rounded-full flex items-center gap-2"
              >
                Create Project <FaArrowRight />
              </button>
              <button
                onClick={() => navigate("/myproject")}
                className="px-8 py-4 border border-white/20 rounded-full"
              >
                My Projects
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="text-sm text-zinc-500">
              {projectCount} projects stored locally
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-10 bg-sky-500/30 blur-[70px] rounded-3xl animate-pulse" />
            <div className="relative bg-zinc-900 border border-sky-400/30 rounded-3xl p-8">
              <pre className="text-sm text-zinc-300 font-mono">
{`#include <iostream>
int main() {
  std::cout << "Hello Skynefh";
}`}
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-4xl font-bold mb-16"
          >
            Why Skynefh?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800"
              >
                <div className="text-sky-400 text-2xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-zinc-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-r from-sky-500/10 to-transparent">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-4xl font-bold mb-6"
          >
            Ready to start coding?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-zinc-400 mb-10"
          >
            No setup. No login. Just code.
          </motion.p>
          <motion.button
            variants={fadeUp}
            onClick={() => navigate("/create")}
            className="px-10 py-4 bg-sky-500 text-black font-bold rounded-full inline-flex items-center gap-2"
          >
            Get Started <FaCheckCircle />
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
