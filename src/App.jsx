import { FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function AboutMe() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .about-page {
          min-height: 100vh;
          background: #000;
          color: #fff;
          padding: 60px 20px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .profile {
          text-align: center;
        }

        .profile-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 16px;
        }

        .name {
          font-size: 28px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .verified {
          color: #1d9bf0;
          font-size: 22px;
        }

        .socials {
          margin-top: 14px;
          display: flex;
          justify-content: center;
          gap: 18px;
        }

        .socials a {
          color: #fff;
          font-size: 22px;
          opacity: 0.8;
          transition: 0.2s;
        }

        .socials a:hover {
          opacity: 1;
          transform: translateY(-2px);
        }

        .about-text {
          max-width: 600px;
          margin: 40px auto 80px;
          text-align: center;
          line-height: 1.7;
          opacity: 0.9;
        }

        /* MARQUEE */
        .marquee-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 90px;
        }

        .marquee {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee 20s linear infinite;
        }

        .marquee-track img {
          height: 48px;
          margin: 0 40px;
          opacity: 0.9;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* SHADOW */
        .shadow {
          position: absolute;
          top: 0;
          width: 80px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
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
        {/* PROFILE */}
        <div className="profile">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="profile-img"
          />

          <div className="name">
            Aprilio <MdVerified className="verified" />
          </div>

          <div className="socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>

        {/* ABOUT ME */}
        <div className="about-text">
          Aku adalah developer yang fokus ke web modern, UI/UX,
          dan eksperimen produk digital. Suka bikin sesuatu yang
          simpel, clean, tapi tetap impactful.
        </div>

        {/* RUNNING LOGO */}
        <div className="marquee-wrapper">
          <div className="shadow left" />
          <div className="shadow right" />

          <div className="marquee">
            <div className="marquee-track">
              <img src="/logo1.png" />
              <img src="/logo2.png" />
              <img src="/logo3.png" />

              {/* duplikat supaya infinite */}
              <img src="/logo1.png" />
              <img src="/logo2.png" />
              <img src="/logo3.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
