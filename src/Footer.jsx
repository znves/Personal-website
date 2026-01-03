import { FaUsers, FaUser, FaChartBar } from "react-icons/fa";

export default function Footer() {
  const path = window.location.pathname;

  return (
    <>
      <style>{`
        /* DIVIDER */
        .footer-divider {
          position: fixed;
          bottom: 52px;
          left: 0;
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.12);
          z-index: 9;
        }

        /* FOOTER */
        .footer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 52px; 
          background: rgba(0,0,0,0.95);
          display: flex;
          justify-content: space-around;
          align-items: center;
          z-index: 10;
        }

        /* ITEM */
        .footer-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          padding: 4px 12px;
          border-radius: 12px;
          color: #aaa;
          text-decoration: none;
          font-size: 10px; 
          transition: 0.2s ease;
        }

        .footer-item svg {
          font-size: 18px; 
        }

        /* ACTIVE */
        .footer-item.active {
          background: #fff;
          color: #000;
        }

        .footer-item.active svg {
          color: #000;
        }
      `}</style>

      {/* DIVIDER */}
      <div className="footer-divider" />

      <footer className="footer">
        <a
          href="/socials"
          className={`footer-item ${path === "/project" ? "active" : ""}`}
        >
          <FaUsers />
          <span>Socials</span>
        </a>

        <a
          href="/"
          className={`footer-item ${path === "/" ? "active" : ""}`}
        >
          <FaUser />
          <span>Profile</span>
        </a>

        <a
          href="/stats"
          className={`footer-item ${path === "/stats" ? "active" : ""}`}
        >
          <FaChartBar />
          <span>Stats</span>
        </a>
      </footer>
    </>
  );
}
