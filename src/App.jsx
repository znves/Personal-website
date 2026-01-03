import { FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function AboutMe() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box }
        body { margin: 0 }

        .about-page {
          min-height: 100vh;
          background: #000;
          color: #fff;
          padding: 60px 16px;
          font-family: system-ui, sans-serif;
        }

        /* MAIN CONTAINER (NO BORDER) */
        .container {
          max-width: 720px;
          margin: 0 auto;
          padding: 48px 32px;
        }

        /* PROFILE */
        .profile {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .profile-img {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 14px;
        }

        .name {
          font-size: 26px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .verified {
          color: #1d9bf0;
          font-size: 20px;
        }

        .socials {
          margin-top: 14px;
          display: flex;
          gap: 18px;
        }

        .socials a {
          color: #fff;
          font-size: 22px;
          opacity: 0.85;
          transition: 0.2s;
        }

        .socials a:hover {
          opacity: 1;
          transform: translateY(-2px);
        }

        /* SECTION */
        .section {
          margin-top: 48px;
        }

        .section h2 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: 1px;
        }

        .about-text {
          line-height: 1.7;
          opacity: 0.9;
        }

        /* PERSONAL INFO */
        .personal-info {
          margin-top: 28px;
        }

        .personal-info h3 {
          margin-bottom: 10px;
        }

        .personal-info ul {
          padding-left: 16px;
          margin: 0;
        }

        .personal-info li {
          margin-bottom: 6px;
          opacity: 0.9;
        }

        /* PROJECT */
        .project-section {
          margin-top: 56px;
        }

        .project-section h2 {
          text-align: center;
          margin-bottom: 18px;
        }

        .marquee-wrapper {
          position: relative;
          overflow: hidden;
          height: 90px;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: run 22s linear infinite;
        }

        .marquee-track img {
          height: 48px;
          margin: 0 48px;
          opacity: 0.9;
        }

        @keyframes run {
          from { transform: translateX(0) }
          to { transform: translateX(-50%) }
        }

        .shadow {
          position: absolute;
          top: 0;
          width: 80px;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .shadow.left {
          left: 0;
          background: linear-gradient(to right, #000, transparent);
        }

        .shadow.right {
          right: 0;
          background: linear-gradient(to left, #000, transparent);
        }
      `}</style>

      <div className="about-page">
        <div className="container">

          {/* PROFILE */}
          <div className="profile">
            <img src="/profile.jpg" className="profile-img" />
            <div className="name">
              Aprilio <MdVerified className="verified" />
            </div>
            <div className="socials">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTiktok /></a>
              <a href="#"><FaGithub /></a>
            </div>
          </div>

          {/* ABOUT */}
          <div className="section">
            <h2>ABOUT ME</h2>
            <div className="about-text">
              <strong>Aprilio</strong> adalah developer yang fokus ke web modern,
              UI clean, dan produk digital yang fungsional serta scalable.
            </div>

            <div className="personal-info">
              <h3>Personal Information</h3>
              <ul>
                <li><strong>Name:</strong> Aprilio / Vestionz</li>
                <li><strong>Region:</strong> Majalengka, Jawa Barat</li>
                <li><strong>Favorite Food:</strong> Mie Ayam, Ayam Geprek</li>
              </ul>
            </div>
          </div>

          {/* PROJECT */}
          <div className="section">
            <h2>My Project</h2>

            <div className="marquee-wrapper">
              <div className="shadow left" />
              <div className="shadow right" />

              <div className="marquee-track">
                <img src="/logo1.png" />
                <img src="/logo2.png" />
                <img src="/logo3.png" />
                <img src="/logo1.png" />
                <img src="/logo2.png" />
                <img src="/logo3.png" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
