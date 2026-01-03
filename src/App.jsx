import { FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FaFolderOpen, FaUser, FaChartBar } from "react-icons/fa";
import Footer from "./Footer";

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
        }

        .about-text {
          line-height: 1.7;
          opacity: 0.9;
        }

        /* PERSONAL INFO */
        .personal-info {
          margin-top: 24px;
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
        .marquee-wrapper {
          position: relative;
          overflow: hidden;
          height: 100px;
          margin-top: 16px;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: run 22s linear infinite;
        }

        .project-item {
          margin: 0 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .project-item img {
          height: 44px;
          margin-bottom: 6px;
          opacity: 0.9;
          cursor: pointer;
        }

        .project-item img:hover {
          opacity: 1;
        }

        .project-name {
          font-size: 12px;
          color: #fff;
          opacity: 0.85;
          pointer-events: none;
        }

        @keyframes run {
          from { transform: translateX(-50%) }
          to { transform: translateX(0) }
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
            <img src="/profile.webp" className="profile-img" />
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
            <h2>About Me</h2>
            <div className="about-text">
              <strong>Aprilio</strong> adalah developer yang fokus ke web modern,
              UI clean, dan produk digital yang fungsional serta scalable.
            </div>

            {/* PERSONAL INFORMATION */}
            <div className="personal-info">
              <h2>Personal Information</h2>
              <ul>
                <li><strong>Name:</strong> Aprilio / Vestionz</li>
                <li><strong>Region:</strong> Majalengka, Jawa Barat</li>
                <li><strong>Favorite Food:</strong> Ayam Geprek</li>
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
                {[
                  { name: "Skynefh", img: "/skynefh.webp", link: "https://skynefh.my.id" },
                  { name: "Wiradaka", img: "/wiradaka.webp", link: "https://wiradaka.my.id" },
                  { name: "Rhinzan", img: "/rhinzan.webp", link: "https://rhinzan.pages.dev" },
                  { name: "WIW", img: "/wiw.webp", link: "https://wiw.my.id" },
                ].map((p, i) => (
                  <div className="project-item" key={i}>
                    <a href={p.link} target="_blank">
                      <img src={p.img} alt={p.name} />
                    </a>
                    <span className="project-name">{p.name}</span>
                  </div>
                ))}

                {/* DUPLIKAT BIAR JALAN TERUS */}
                {[
                  { name: "Skynefh", img: "/skynefh.webp", link: "https://skynefh.my.id" },
                  { name: "Wiradaka", img: "/wiradaka.webp", link: "https://wiradaka.my.id" },
                  { name: "Rhinzan", img: "/rhinzan.webp", link: "https://rhinzan.pages.dev" },
                  { name: "WIW", img: "/wiw.webp", link: "https://wiw.my.id" },
                ].map((p, i) => (
                  <div className="project-item" key={`dup-${i}`}>
                    <a href={p.link} target="_blank">
                      <img src={p.img} alt={p.name} />
                    </a>
                    <span className="project-name">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Footer />

        </div>
      </div>
    </>
  );
}
