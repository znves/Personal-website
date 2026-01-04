import {
  FaUser,
  FaChartBar,
  FaUsers,
  FaBlog,
  FaFolderOpen,
  FaBloggerB,
} from "react-icons/fa";

export default function Navbar() {
  const path = window.location.pathname;

  let trail = [];

  if (path === "/") {
    trail = [{ label: "Profile", icon: <FaUser /> }];
  }

  else if (path === "/stats") {
    trail = [
      { label: "Profile", icon: <FaUser /> },
      { label: "Stats", icon: <FaChartBar /> },
    ];
  }

  else if (path === "/socials") {
    trail = [
      { label: "Profile", icon: <FaUser /> },
      { label: "Socials", icon: <FaUsers /> },
    ];
  }

  else if (path === "/blog") {
    trail = [
      { label: "Profile", icon: <FaUser /> },
      { label: "Blog", icon: <FaBlog /> },
    ];
  }

  else if (path.startsWith("/blog/")) {
    const slug = path.replace("/blog/", "").replace(/-/g, " ");

    trail = [
      { label: "Blog", icon: <FaBlog /> },
      { label: slug, icon: <FaBloggerB /> },
    ];
  }

  else if (path === "/project") {
    trail = [
      { label: "Profile", icon: <FaUser /> },
      { label: "Project", icon: <FaFolderOpen /> },
    ];
  }

  return (
    <>
      <style>{`
        .navbar {
          width: 100%;
          padding: 10px 6px;
          display: flex;
          justify-content: center;
          background: #000;
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #fff;
          opacity: 0.9;
          flex-wrap: wrap;
        }

        .brand {
          margin-right: 6px;
          font-weight: 600;
        }

        .pipe {
          margin-right: 6px;
          opacity: 0.6;
        }

        .crumb {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .arrow {
          margin: 0 6px;
          opacity: 0.5;
        }

        .crumb svg {
          font-size: 14px;
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-inner">
          <span className="brand">Aprilio</span>
          <span className="pipe">|</span>

          {trail.map((item, i) => (
            <span key={i} className="crumb">
              {item.icon}
              <span style={{ textTransform: "capitalize" }}>
                {item.label}
              </span>
              {i < trail.length - 1 && (
                <span className="arrow">&gt;</span>
              )}
            </span>
          ))}
        </div>
      </nav>
    </>
  );
}
