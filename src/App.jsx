import { useState } from "react";
import { FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function AboutMe() {
  const [loading, setLoading] = useState(false);

  const WEBHOOK_URL = "PASTE_DISCORD_WEBHOOK_DI_SINI";

  const sendMessage = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Semua field wajib diisi");
      return;
    }

    setLoading(true);

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "AboutMe Contact",
          embeds: [
            {
              title: "📩 New Contact Message",
              color: 3447003,
              fields: [
                { name: "Name", value: name },
                { name: "Email", value: email },
                { name: "Message", value: message },
              ],
              footer: { text: "AboutMe Page" },
            },
          ],
        }),
      });

      form.reset();
      alert("Message sent 🚀");
    } catch (err) {
      alert("Failed to send message");
    }

    setLoading(false);
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
          margin-top: 12px;
          display: flex;
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

        /* SECTION */
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

        /* CONTACT */
        .contact-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 48px;
        }

        .contact-card {
          width: 100%;
          max-width: 420px;
          background: #0d0d0d;
          padding: 24px;
          border-radius: 14px;
          border: 1px solid #1f1f1f;
        }

        .contact-card input,
        .contact-card textarea {
          width: 100%;
          margin-bottom: 12px;
          padding: 10px;
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

        .contact-title {
          text-align: center;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 14px;
          letter-spacing: 1px;
        }

        /* MARQUEE */
        .marquee-wrapper {
          position: relative;
          overflow: hidden;
          height: 80px;
          margin-top: 20px;
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
              <strong>Aprilio</strong> adalah developer yang fokus
              ke web modern, UI clean, dan produk digital yang
              fungsional serta scalable.
            </div>
          </div>

          {/* CONTACT */}
          <div className="contact-wrapper">
            <div>
              <div className="contact-title">CONTACT ME</div>
              <form className="contact-card" onSubmit={sendMessage}>
                <input name="name" placeholder="Name" required />
                <input name="email" type="email" placeholder="Email" required />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                />
                <button disabled={loading}>
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
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
