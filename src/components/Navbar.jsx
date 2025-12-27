import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 16, borderBottom: "1px solid #333" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/create">Create</Link> |{" "}
      <Link to="/myproject">My Projects</Link>
    </nav>
  );
}
