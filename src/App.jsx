import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 15 } 
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
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

    setProjectCount(nextId);
    navigate(`/myproject/${nextId}`);
  };

  const FeatureCard = ({ title, description, icon, index }) => (
    <motion.div
      variants={fadeIn}
      transition={{ delay: index * 0.1 }}
      className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-sky-500 hover:shadow-sky-500/20 transition-all duration-300 shadow-xl space-y-4"
    >
      <div className="text-3xl text-sky-400 mb-3">{icon}</div>
      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>
      <p className="text-zinc-400 text-md">
        {description}
      </p>
    </motion.div>
  );

  const WhyChooseData = [
    { title: "Private First", description: "Your projects stay on your device.", icon: "🔒" },
    { title: "Fast Execution", description: "Run code instantly without setup.", icon: "⚡️" },
    { title: "Modern UI", description: "Clean, focused, distraction-free.", icon: "✨" },
    { title: "Multi Language", description: "Designed to scale with more languages.", icon: "🌐" },
    { title: "No Accounts", description: "No signups. No tracking.", icon: "🚫" },
    { title: "Future Ready", description: "Built for growth and extensibility.", icon: "🔭" },
  ];

  const TestimonialsData = [
    { quote: "Skynefh changed how I prototype ideas. It's truly instant.", name: "Alex J.", role: "Lead Engineer" },
    { quote: "The best tool for teaching beginners. Zero setup friction.", name: "Maria L.", role: "Code Educator" },
    { quote: "Finally, a coding playground that respects privacy. Fast and clean.", name: "David C.", role: "Full-Stack Dev" },
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden min-h-screen">
      <Navbar />

      {/* 1. HERO SECTION (UPGRADED) */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12">
        <img
          src="https://images.unsplash.com/photo-1549490349-012b1d556554?q=80&w=2600&auto=format&fit=crop"
          alt="Abstract code background"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-cyan-900/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tighter"
            >
              The Future<br />
              of <span className="text-sky-400">Private Coding</span>
            </motion.h1>

            <motion.p 
              variants={fadeIn}
              className="text-zinc-300 text-xl max-w-xl"
            >
              Skynefh CodeLab is a modern, privacy-first coding playground built
              for rapid experiments, learning, and focused development—all on your device.
            </motion.p>

            <motion.div 
              variants={fadeIn}
              className="flex gap-6 flex-wrap pt-4"
            >
              <button
                onClick={createProject}
                className="px-12 py-5 rounded-full bg-sky-500 text-black font-bold text-lg hover:bg-sky-400 hover:scale-[1.03] transition-transform shadow-lg shadow-sky-500/40"
              >
                Start Coding Now 🚀
              </button>

              <button
                onClick={() => navigate("/myproject")}
                className="px-12 py-5 rounded-full border border-white/20 text-white text-lg hover:border-sky-400 hover:text-sky-400 transition-all duration-300"
              >
                View My Projects
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-10 bg-sky-500/30 blur-[60px] rounded-3xl animate-pulse-slow"></div>
            <div className="relative bg-zinc-900/90 backdrop-blur-md border border-sky-400/30 rounded-3xl p-10 shadow-2xl transition-transform hover:scale-[1.01] duration-500">
              <div className="flex justify-between items-center pb-4 border-b border-zinc-700/50">
                  <span className="text-sky-400 font-mono text-lg">Editor.js</span>
                  <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
              </div>
              <pre className="text-sm text-zinc-300 leading-relaxed pt-4 font-mono overflow-auto">
{`const greet = (user) => {
  return \`console.log('Hello, \${user}!');\`;
};

// Start your rapid experiment here
console.log(greet("Skynefh User"));

// Output:
// Hello, Skynefh User!
`}
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US (IMAGE + TEXT) */}
      <section className="py-24 md:py-40 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop"
            alt="Developer working on multiple screens"
            className="rounded-3xl shadow-2xl border border-zinc-800"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-5xl font-extrabold text-sky-400">
              Built for Developers
            </motion.h2>

            <motion.p variants={fadeIn} className="text-zinc-400 text-lg">
              Designed with simplicity and performance in mind, Skynefh removes
              unnecessary complexity and lets you focus entirely on code.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-4 text-zinc-300 text-lg pt-4">
              <motion.li variants={fadeIn}>• Instant environment setup</motion.li>
              <motion.li variants={fadeIn}>• Multi-file workspace support</motion.li>
              <motion.li variants={fadeIn}>• Private by default (Local Storage)</motion.li>
              <motion.li variants={fadeIn}>• Lightweight & fast execution</motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE FEATURES GRID */}
      <section className="py-24 md:py-40 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-center mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Developers <span className="text-cyan-400">Choose Skynefh</span>
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {WhyChooseData.map((item, i) => (
              <FeatureCard 
                key={i} 
                title={item.title} 
                description={item.description} 
                icon={item.icon}
                index={i}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION (NEW) */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            What Our <span className="text-sky-400">Users Say</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {TestimonialsData.map((item, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-xl bg-zinc-900 border border-zinc-800 shadow-xl transition-transform hover:scale-[1.02] duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <p className="text-xl italic text-zinc-300 mb-6">
                  "{item.quote}"
                </p>
                <div className="pt-4 border-t border-zinc-700">
                  <p className="font-semibold text-sky-400">{item.name}</p>
                  <p className="text-sm text-zinc-500">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. CALL TO ACTION FINAL */}
      <section className="py-32 md:py-48 bg-gradient-to-br from-zinc-900 to-black">
        <motion.div
          className="max-w-5xl mx-auto px-6 text-center space-y-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-extrabold text-white">
            Start Building Today
          </h2>

          <p className="text-zinc-400 text-xl">
            No setup. No friction. Just pure coding in a modern environment
            designed for speed and focus. Your next project is just a click away.
          </p>

          <button
            onClick={createProject}
            className="mt-8 px-16 py-6 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 text-black font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-xl shadow-cyan-400/40"
          >
            Create Your First Project
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
                }
