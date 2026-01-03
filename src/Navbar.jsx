import { FaUser, FaChartBar, FaUsers } from "react-icons/fa";

export default function Navbar() {
  const path = window.location.pathname;

  let trail = [];

  if (path === "/") {
    trail = [{ label: "Profile", icon: <FaUser /> }];
  }

  if (path === "/stats") {
    trail = [
      { label: "Profile", icon: <FaUser /> },
      { label: "Stats", icon: <FaChartBar /> },
    ];
  }

  if (path === "/socials") {
    trail = [
      { label: "Profile", icon: <FaUser /> },
      { label: "Socials", icon: <FaUsers /> },
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
        }

        .brand,
        .pipe,
        .crumb,
        .arrow {
          display: flex;
          align-items: center;
        }

        .brand { margin-right: 6px; font-weight: 600; }
        .pipe { margin-right: 6px; opacity: 0.6; }

        .crumb {
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
              <span>{item.label}</span>
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
