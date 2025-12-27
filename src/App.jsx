import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div style={{ padding: 40 }}>
        <h1>Skynefh Code Playground</h1>
        <p>Learn HTML, CSS, and Python in your browser.</p>

        <button onClick={() => navigate("/create")}>
          Choose Programming Language
        </button>

        <button
          style={{ marginLeft: 10 }}
          onClick={() => navigate("/myproject")}
        >
          My Projects
        </button>
      </div>

      <Footer />
    </>
  );
}
