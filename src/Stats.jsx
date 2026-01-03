import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { FaGithub, FaStar, FaUserFriends, FaBook } from "react-icons/fa";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function GitHubStats() {
  const username = "vestionz"; // RENAME USERNAME GITHUB
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <>
      <style>{`
        .gh-wrapper {
          max-width: 720px;
          margin: 0 auto 60px;
          padding: 28px;
          border-radius: 24px;
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
        }

        .gh-header {
          text-align: center;
          margin-bottom: 28px;
        }

        .gh-title {
          font-size: 26px;
          font-weight: 700;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .gh-sub {
          margin-top: 10px;
          font-size: 14px;
          opacity: 0.8;
        }

        .gh-profile {
          text-align: center;
          margin-top: 30px;
        }

        .gh-avatar {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          margin-bottom: 14px;
        }

        .gh-name {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          font-size: 20px;
          font-weight: 600;
        }

        .verified {
          color: #1da1f2;
          font-size: 18px;
        }

        .gh-username {
          font-size: 14px;
          opacity: 0.7;
          margin-top: 2px;
        }

        .gh-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-top: 30px;
        }

        .stat-card {
          background: #050505;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 16px 10px;
          text-align: center;
        }

        .stat-icon {
          font-size: 20px;
          margin-bottom: 6px;
        }

        .stat-value {
          font-size: 18px;
          font-weight: 700;
        }

        .stat-label {
          font-size: 12px;
          opacity: 0.75;
          margin-top: 2px;
        }

        @media (max-width: 640px) {
          .gh-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <Navbar />
      
      <div className="gh-wrapper">
        <div className="gh-header">
          <div className="gh-title">
            <FaGithub /> GitHub Stats
          </div>
          <div className="gh-sub">
            Statistics and information from my GitHub profile
          </div>
        </div>

        <div className="gh-profile">
          <img src={data.avatar_url} alt="avatar" className="gh-avatar" />

          <div className="gh-name">
            {data.name || data.login}
            <MdVerified className="verified" />
          </div>

          <div className="gh-username">@{data.login}</div>
        </div>

        <div className="gh-stats">
          <div className="stat-card">
            <FaUserFriends className="stat-icon" />
            <div className="stat-value">{data.followers}</div>
            <div className="stat-label">Followers</div>
          </div>

          <div className="stat-card">
            <FaUserFriends className="stat-icon" />
            <div className="stat-value">{data.following}</div>
            <div className="stat-label">Following</div>
          </div>

          <div className="stat-card">
            <FaBook className="stat-icon" />
            <div className="stat-value">{data.public_repos}</div>
            <div className="stat-label">Repositories</div>
          </div>

          <div className="stat-card">
            <FaStar className="stat-icon" />
            <div className="stat-value">{data.public_gists}</div>
            <div className="stat-label">Starred</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
