import {
  FaDiscord,
  FaGithub,
  FaTiktok,
  FaInstagram,
  FaShareAlt,
} from "react-icons/fa";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          background: #000;
          color: #fff;
          font-family: system-ui, sans-serif;
        }

        .contact-page {
          min-height: 100vh;
          padding: 60px 16px 120px;
        }

        /* HEADER */
        .contact-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .contact-header h1 {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          font-size: 28px;
          font-weight: 700;
          color: #d4af37; /* GOLD */
        }

        .contact-line {
          width: 80px;
          height: 4px;
          background: #d4af37;
          margin: 14px auto 0;
          border-radius: 4px;
        }

        .contact-desc {
          margin-top: 16px;
          font-size: 15px;
          opacity: 0.85;
          line-height: 1.6;
        }

        /* LIST */
        .contact-list {
          max-width: 520px;
          margin: 48px auto 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          border-radius: 18px;
          background: #050505;
          border: 1px solid rgba(255,255,255,0.08);
          text-decoration: none;
          color: #fff;
          transition: 0.25s ease;
        }

        .contact-card:hover {
          transform: translateY(-2px);
          border-color: rgba(212,175,55,0.6);
        }

        .contact-icon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: #fff;
          flex-shrink: 0;
        }

        .discord { background: #5865f2; }
        .github { background: #111; }
        .tiktok { background: #000; border: 1px solid #25f4ee; }
        .instagram {
          background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af);
        }

        .contact-text {
          display: flex;
          flex-direction: column;
        }

        .contact-text strong {
          font-size: 15px;
          font-weight: 600;
        }

        .contact-text span {
          font-size: 13px;
          opacity: 0.8;
          margin-top: 2px;
        }
      `}</style>

      <div className="contact-page">
        {/* HEADER */}
        <div className="contact-header">
          <h1>
            <FaShareAlt /> Contact Me
          </h1>
          <div className="contact-line" />
          <div className="contact-desc">
            Feel free to reach out through any of these platforms
          </div>
        </div>

        {/* CONTACT LIST */}
        <div className="contact-list">
          <a
            href="https://discord.com/users/995913592253710356"
            target="_blank"
            className="contact-card"
          >
            <div className="contact-icon discord">
              <FaDiscord />
            </div>
            <div className="contact-text">
              <strong>@vestionz</strong>
              <span>Chat with me on Discord</span>
            </div>
          </a>

          <a
            href="https://github.com/vestionz"
            target="_blank"
            className="contact-card"
          >
            <div className="contact-icon github">
              <FaGithub />
            </div>
            <div className="contact-text">
              <strong>@vestionz</strong>
              <span>Check my Project on Github</span>
            </div>
          </a>

          <a
            href="https://tiktok.com/@akbaraprilioo"
            target="_blank"
            className="contact-card"
          >
            <div className="contact-icon tiktok">
              <FaTiktok />
            </div>
            <div className="contact-text">
              <strong>@akbaraprilioo</strong>
              <span>Follow me on Tiktok</span>
            </div>
          </a>

          <a
            href="https://instagram.com/akbaraprilioo"
            target="_blank"
            className="contact-card"
          >
            <div className="contact-icon instagram">
              <FaInstagram />
            </div>
            <div className="contact-text">
              <strong>@akbaraprilioo</strong>
              <span>Follow me on Instagram</span>
            </div>
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
