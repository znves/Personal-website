import { FaFolderOpen, FaUser, FaChartBar } from "react-icons/fa";

export default function Footer() {
  const path = window.location.pathname;

  return (
    <>
      <style>{`
        /* FOOTER DIVIDER */
        .footer-divider {
          position: fixed;
          bottom: 64px;
          left: 0;
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.15);
          z-index: 9;
        }

        /* FOOTER */
        .footer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 64px;
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
          gap: 4px;
          padding: 6px 16px;
          border-radius: 14px;
          color: #aaa;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .footer-item svg {
          font-size: 20px;
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

      {/* GARIS PEMBATAS */}
      <div className="footer-divider" />

      <footer className="footer">
        <a
          href="/project"
          className={`footer-item ${path === "/project" ? "active" : ""}`}
        >
          <FaFolderOpen />
          <span>Project</span>
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
