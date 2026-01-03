import { FaUser, FaChartBar, FaShareAlt } from "react-icons/fa";

export default function Navbar() {
  const path = window.location.pathname;

  let trail = [];

  // ROOT / PROFILE
  if (path === "/") {
    trail = [
      { label: "Profile", icon: <FaUser /> },
    ];
  }

  // STATS
  if (path === "/stats") {
    trail = [
      { label: "Profile", icon: <FaUser /> },
      { label: "Stats", icon: <FaChartBar /> },
    ];
  }

  // SOCIALS
  if (path === "/socials") {
    trail = [
      { label: "Profile", icon: <FaUser /> },
      { label: "Socials", icon: <FaShareAlt /> },
    ];
  }

  return (
    <>
      <style>{`
        .navbar {
          width: 100%;
          padding: 16px 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #000;
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #fff;
          opacity: 0.9;
        }

        .brand {
          font-weight: 600;
          margin-right: 6px;
        }

        .crumb {
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        .crumb svg {
          font-size: 14px;
          opacity: 0.9;
        }

        .separator {
          margin: 0 4px;
          opacity: 0.5;
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-inner">
          <span className="brand">Aprilio</span>

          {trail.map((item, i) => (
            <span key={i} className="crumb">
              <span className="separator">|</span>
              {item.icon}
              <span>{item.label}</span>
              {i !== trail.length - 1 && (
                <span className="separator">&gt;</span>
              )}
            </span>
          ))}
        </div>
      </nav>
    </>
  );
}
