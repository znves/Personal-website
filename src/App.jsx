import { useState } from "react";
import { FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function AboutMe() {
  const [loading, setLoading] = useState(false);

  const WEBHOOK_URL = "PASTE_DISCORD_WEBHOOK_DI_SINI";

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "AboutMe Contact",
        embeds: [
          {
            title: "📩 New Message",
            color: 3447003,
            fields: [
              { name: "Name", value: data.name || "-", inline: false },
              { name: "Email", value: data.email || "-", inline: false },
              { name: "Message", value: data.message || "-", inline: false },
            ],
            footer: { text: "AboutMe Page" },
          },
        ],
      }),
    });

    form.reset();
    setLoading(false);
    alert("Message sent 🚀");
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box }
        body { margin: 0 }

        .about-page {
          min-height: 100vh;
          background: #000;
          color: #fff;
          padding: 60px 24px;
          font-family: system-ui, sans-serif;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
        }

        /* PROFILE */
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
          margin-top: 12px;
          display: flex;
          gap: 16px;
        }

        .socials a {
          color: #fff;
          font-size: 22px;
          opacity: 0.8;
        }

        /* ABOUT */
        .section {
          margin-top: 48px;
        }

        .section h2 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
          letter-spacing: 1px;
        }

        .about-text {
          line-height: 1.7;
          opacity: 0.85;
        }

        /* CONTACT CARD */
        .contact-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .contact-card {
          width: 100%;
          max-width: 420px;
          background: #0d0d0d;
          padding: 24px;
          border-radius: 14px;
          border: 1px solid #1f1f1f;
        }

        .contact-card h3 {
          margin-bottom: 14px;
          font-size: 18px;
        }

        .contact-card input,
        .contact-card textarea {
          width: 100%;
          margin-bottom: 12px;
          padding: 10px 12px;
          background: #000;
          border: 1px solid #222;
          color: #fff;
          border-radius: 8px;
        }

        .contact-card button {
          width: 100%;
          padding: 10px;
          background: #1d9bf0;
          border: none;
          color: #fff;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
        }

        /* MARQUEE */
        .marquee-wrapper {
          position: relative;
          overflow: hidden;
          margin-top: 20px;
          height: 80px;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: run 20s linear infinite;
        }

        .marquee-track img {
          height: 44px;
          margin: 0 40px;
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
          <img src="/profile.jpg" className="profile-img" />
          <div className="name">
            Aprilio <MdVerified className="verified" />
          </div>

          <div className="socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaGithub /></a>
          </div>

          {/* ABOUT */}
          <div className="section">
            <h2>ABOUT ME</h2>
            <div className="about-text">
              <strong>Aprilio</strong> adalah developer yang fokus
              ke web modern, UI clean, dan produk digital yang
              fungsional serta scalable.
            </div>
          </div>

          {/* CONTACT */}
          <div className="contact-wrapper">
            <form className="contact-card" onSubmit={sendMessage}>
              <h3>Contact</h3>
              <input name="name" placeholder="Name" />
              <input name="email" placeholder="Email" />
              <textarea name="message" rows="4" placeholder="Message" />
              <button disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
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
