import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProjects, deleteProject } from "../utils/storage";
import { useNavigate } from "react-router-dom";

export default function MyProjects() {
  const navigate = useNavigate();
  const projects = getProjects();

  return (
    <>
      <Navbar />

      <div style={{ padding: 40 }}>
        <h2>My Projects</h2>

        {projects.length === 0 && <p>No projects yet.</p>}

        {projects.map(p => (
          <div key={p.id} style={{ marginBottom: 10 }}>
            <strong>{p.name}</strong> ({p.language})
            <br />
            <button onClick={() => navigate(`/coding/${p.id}`)}>
              Open
            </button>
            <button
              style={{ marginLeft: 8 }}
              onClick={() => {
                deleteProject(p.id);
                location.reload();
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
