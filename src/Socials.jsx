import {
  FaDiscord,
  FaGithub,
  FaTiktok,
  FaInstagram,
  FaShareAlt
} from "react-icons/fa";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AdBanner from "./components/AdBanner";
import FooterSpacer from "./components/FooterSpacer";

export default function Contact() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: #000;
          color: #fff;
          font-family: system-ui, sans-serif;
        }

        .contact-page {
        padding: 10px 16px 24px;
        }

        .contact-container {
          max-width: 720px;
          margin: 0 auto;
          padding: 14px 22px;
          background: rgba(255,255,255,0.015);
          border-radius: 22px;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.02),
            0 20px 60px rgba(0,0,0,0.6);
        }

        .contact-header {
          text-align: center;
          margin-top: 8px; 
          margin-bottom: 36px;
        }

        .contact-header h1 {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          font-size: 24px;
          font-weight: 600;
          color: #ffffff; 
        }

        .contact-line {
          width: 50px;
          height: 3px;
          background: #3b82f6;
          margin: 10px auto 0;
          border-radius: 10px;
        }

        .contact-desc {
          margin-top: 12px;
          font-size: 14px;
          opacity: 0.75;
          line-height: 1.6;
        }

        .contact-list {
          max-width: 520px;
          margin: 42px auto 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
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
          border-color: rgba(59,130,246,0.6); 
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
        .tiktok {
          background: #000;
          border: 1px solid #25f4ee;
        }
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

      <Navbar />

      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-header">
            <h1>
              <FaShareAlt /> Contact Me
            </h1>
            <div className="contact-line" />
            <div className="contact-desc">
              Feel free to reach out through any of these platforms
            </div>
          </div>

          <div className="contact-list">
            <a
              href="https://discord.com/users/995913592253710356"
              target="_blank"
              rel="noreferrer"
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
              rel="noreferrer"
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
              rel="noreferrer"
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
              rel="noreferrer"
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
      </div>

      <AdBanner />
      <FooterSpacer />
      <Footer />
    </>
  );
}
