import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// --- IMPOR IKON FONT AWESOME DARI REACT-ICONS ---
import { 
  FaLock, FaBolt, FaMagic, FaGlobe, FaUserSlash, FaRocket, 
  FaCode, FaFolderOpen, FaBug, FaArrowRight, FaCheckCircle 
} from 'react-icons/fa';

// --- DATA ICON MAPPING ---
const IconMap = {
    FaLock, FaBolt, FaMagic, FaGlobe, FaUserSlash, FaRocket, 
    FaCode, FaFolderOpen, FaBug, FaArrowRight, FaCheckCircle
};

const RenderFaIcon = ({ iconName, className = "text-sky-400" }) => {
    const IconComponent = IconMap[iconName];
    if (!IconComponent) return null;
    return <IconComponent className={className} />;
};
// --------------------------------------------------------------------

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
      staggerChildren: 0.1,
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

  // FUNGSI INI MENGGUNAKAN navigate() YANG COMPATIBLE DENGAN main.js
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
    // Navigasi ke rute Editor dengan ID proyek baru
    navigate(`/myproject/${nextId}`); 
  };

  const FeatureCard = ({ title, description, icon, index }) => (
    <motion.div
      variants={fadeIn}
      transition={{ delay: index * 0.1 }}
      className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-sky-500 hover:shadow-sky-500/20 transition-all duration-300 shadow-xl space-y-4"
    >
      <div className="text-3xl mb-3">
        <RenderFaIcon iconName={icon} className="text-4xl text-sky-400"/>
      </div>
      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>
      <p className="text-zinc-400 text-md">
        {description}
      </p>
    </motion.div>
  );

  const WhyChooseData = [
    { title: "Private First", description: "Your projects stay on your device.", icon: "FaLock" },
    { title: "Fast Execution", "description": "Run code instantly without setup.", icon: "FaBolt" },
    { title: "Modern UI", "description": "Clean, focused, distraction-free.", icon: "FaMagic" },
    { title: "Multi Language", "description": "Designed to scale with more languages.", icon: "FaGlobe" },
    { title: "No Accounts", "description": "No signups. No tracking.", icon: "FaUserSlash" },
    { title: "Future Ready", "description": "Built for growth and extensibility.", icon: "FaRocket" },
  ];

  const TestimonialsData = [
    { quote: "Skynefh changed how I prototype ideas. It's truly instant and the privacy focus is great.", name: "Alex J.", role: "Lead Engineer", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
    { quote: "The best tool for teaching beginners. Simple interface and zero setup friction.", name: "Maria L.", role: "Code Educator", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
    { quote: "Finally, a coding playground that respects privacy. Fast, clean, and effective.", name: "David C.", role: "Full-Stack Dev", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { quote: "Sangat *reliable* untuk eksperimen cepat tanpa perlu *setting* lingkungan lokal.", name: "Rina S.", role: "Junior Developer", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
    { quote: "Tampilan yang bersih dan ringan membuat coding terasa lebih fokus.", name: "Kenji T.", role: "UI/UX Designer", avatar: "https://randomuser.me/api/portraits/men/88.jpg" },
    { quote: "Kemampuan *multi-file* benar-benar membedakannya dari *playground* lain.", name: "Sarah P.", role: "Backend Specialist", avatar: "https://randomuser.me/api/portraits/women/23.jpg" },
  ];
  
  const TechnicalFeatures = [
    { title: "WebAssembly Ready", description: "Future-proof engine for high-performance execution.", icon: "FaCode" },
    { title: "File System API", description: "Simulated local file structure for complex projects.", icon: "FaFolderOpen" },
    { title: "Error Tracing", description: "Clear, helpful error output for easy debugging.", icon: "FaBug" },
  ];

  // --- Komponen Running Testimonials (Otomatis/Marquee) ---
  const RunningTestimonials = () => {
    // Duplikasi data untuk transisi loop yang mulus
    const duplicatedTestimonials = [...TestimonialsData, ...TestimonialsData];
    
    // Perhitungan lebar total yang harus digeser 
    const cardWidth = 350 + 32; // (Lebar Card 350px + Gap/Space 32px)
    const totalWidth = cardWidth * TestimonialsData.length; 

    return (
      <div className="overflow-hidden whitespace-nowrap py-16">
        <motion.div 
          className="flex space-x-8"
          initial={{ x: 0 }}
          animate={{ x: `-${totalWidth}px` }} 
          transition={{
            duration: 40, 
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {duplicatedTestimonials.map((item, i) => (
            <div
              key={i}
              className="inline-block w-[350px] flex-shrink-0 p-6 rounded-xl bg-zinc-900 border border-zinc-800 shadow-xl"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-sky-400"
                />
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-zinc-500">{item.role}</p>
                </div>
              </div>
              <p className="text-lg text-zinc-300">
                "{item.quote}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };
  

  return (
    <div className="bg-black text-white overflow-x-hidden min-h-screen">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12">
        {/* ... (Konten Hero Section) ... */}
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
              className="flex gap-4 flex-wrap pt-4"
            >
              <button
                onClick={createProject} // Navigasi ke /myproject/:id
                className="px-8 py-4 rounded-full bg-sky-500 text-black font-bold text-md hover:bg-sky-400 hover:scale-[1.02] transition-transform shadow-lg shadow-sky-500/40 flex items-center space-x-2"
              >
                <span>Start Coding Now</span> <RenderFaIcon iconName="FaArrowRight" className="text-black"/>
              </button>

              <button
                onClick={() => navigate("/myproject")} // Navigasi ke /myproject
                className="px-8 py-4 rounded-full border border-white/20 text-white text-md hover:border-sky-400 hover:text-sky-400 transition-all duration-300"
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
              <pre className="text-sm text-zinc-300 leading-relaxed pt-4 font-mono overflow-auto h-64">
{`const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Start heavy calculation
const result = fibonacci(15);
console.log('Fib(15):', result);
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
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
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
              <motion.li variants={fadeIn} className="flex items-center space-x-3"><RenderFaIcon iconName="FaCheckCircle"/> <span>Instant environment setup</span></motion.li>
              <motion.li variants={fadeIn} className="flex items-center space-x-3"><RenderFaIcon iconName="FaCheckCircle"/> <span>Multi-file workspace support</span></motion.li>
              <motion.li variants={fadeIn} className="flex items-center space-x-3"><RenderFaIcon iconName="FaCheckCircle"/> <span>Private by default (Local Storage)</span></motion.li>
              <motion.li variants={fadeIn} className="flex items-center space-x-3"><RenderFaIcon iconName="FaCheckCircle"/> <span>Lightweight & fast execution</span></motion.li>
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
      
      {/* 4. TECHNICAL FEATURES (IMAGE + TEXT) */}
      <section className="py-24 md:py-40 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
                className="space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={staggerContainer}
            >
                <motion.h2 variants={fadeIn} className="text-5xl font-extrabold text-sky-400">
                    Technical Edge
                </motion.h2>

                <motion.p variants={fadeIn} className="text-zinc-400 text-lg">
                    We use modern browser technologies to ensure your coding environment is always fast, secure, and ready for advanced projects.
                </motion.p>
                
                <motion.div 
                    className="grid grid-cols-1 gap-6 pt-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    {TechnicalFeatures.map((item, i) => (
                        <motion.div key={i} variants={fadeIn} className="flex space-x-4 items-start">
                            <RenderFaIcon iconName={item.icon} className="text-2xl mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-semibold text-xl text-white">{item.title}</h4>
                                <p className="text-zinc-500">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            
            <motion.img
                src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2670&auto=format&fit=crop"
                alt="Cloud computing network"
                className="rounded-3xl shadow-2xl border border-zinc-800"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            />
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION (RUNNING HORIZONTAL - OTOMATIS) */}
      <section className="py-24 bg-zinc-950 overflow-hidden">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Community <span className="text-sky-400">Feedback</span>
        </motion.h2>
        
        <RunningTestimonials />
        
      </section>


      {/* 6. CALL TO ACTION FINAL */}
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
            className="mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 text-black font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-cyan-400/40 flex items-center space-x-2"
          >
            <span>Create Your First Project</span> <RenderFaIcon iconName="FaCode" className="text-black"/>
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
      }
