import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { FaGithub, FaUsers, FaUserPlus, FaBook, FaStar, FaGlobe } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function GitHubStats() {
  const username = "vestionz"; // USERNAME GITHUB
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return null;

  return (
    <>
      <style>{`
        body {
          background: #000;
          color: #fff;
        }

        .github-page {
          min-height: 100vh;
          padding: 80px 16px 140px;
        }

        .github-container {
          max-width: 720px;
          margin: 0 auto;
          padding: 28px 24px;
          border-radius: 28px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 20px 60px rgba(0,0,0,0.7);
        }

        .github-title {
          text-align: center;
          font-size: 28px;
          font-weight: 700;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .github-line {
          width: 70px;
          height: 4px;
          background: #3b82f6;
          margin: 14px auto;
          border-radius: 10px;
        }

        .github-sub {
          text-align: center;
          font-size: 14px;
          opacity: 0.75;
          max-width: 340px;
          margin: 0 auto 36px;
          line-height: 1.5;
        }

        .github-card {
          background: #050505;
          border-radius: 26px;
          padding: 34px 20px;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .profile {
          text-align: center;
        }

        .avatar {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          margin-bottom: 14px;
        }

        .name {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          font-size: 22px;
          font-weight: 600;
        }

        .verified {
          color: #3b82f6;
          font-size: 18px;
        }

        .username {
          font-size: 14px;
          opacity: 0.7;
          margin-top: 4px;
        }

        .info {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 10px;
          font-size: 13px;
          opacity: 0.75;
        }

        .info a {
          color: #3b82f6;
        }

        .stats {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .stat {
          background: #000;
          border-radius: 16px;
          padding: 18px 8px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .stat-icon {
          font-size: 18px;
          margin-bottom: 6px;
          opacity: 0.9;
        }

        .stat-value {
          font-size: 18px;
          font-weight: 700;
        }

        .stat-label {
          font-size: 12px;
          opacity: 0.7;
          margin-top: 2px;
        }

        @media (max-width: 520px) {
          .stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <Navbar />

      <div className="github-page">
        <div className="github-container">
          <div className="github-title">
            <FaGithub /> GitHub Stats
          </div>

          <div className="github-line" />

          <div className="github-sub">
            Statistics and information from my GitHub profile
          </div>

          <div className="github-card">
            <div className="profile">
              <img src={data.avatar_url} className="avatar" />

              <div className="name">
                {data.name || data.login}
                <MdVerified className="verified" />
              </div>

              <div className="username">@{data.login}</div>

              <div className="info">
                {data.location && <span>{data.location}</span>}
                {data.blog && (
                  <a href={data.blog} target="_blank" rel="noreferrer">
                    <FaGlobe />
                  </a>
                )}
              </div>
            </div>

            <div className="stats">
              <div className="stat">
                <FaUsers className="stat-icon" />
                <div className="stat-value">{data.followers}</div>
                <div className="stat-label">Followers</div>
              </div>

              <div className="stat">
                <FaUserPlus className="stat-icon" />
                <div className="stat-value">{data.following}</div>
                <div className="stat-label">Following</div>
              </div>

              <div className="stat">
                <FaBook className="stat-icon" />
                <div className="stat-value">{data.public_repos}</div>
                <div className="stat-label">Repositories</div>
              </div>

              <div className="stat">
                <FaStar className="stat-icon" />
                <div className="stat-value">{data.public_gists}</div>
                <div className="stat-label">Starred</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
