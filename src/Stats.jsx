import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import {
  FaGithub,
  FaUsers,
  FaUserPlus,
  FaBook,
  FaStar,
  FaGlobe,
  FaCode
} from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function GitHubStats() {
  const username = "vestionz"; // CHANGE USERNAME
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(setProfile);

    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then(res => res.json())
      .then(setRepos);
  }, []);

  if (!profile) return null;

  return (
    <>
      <style>{`
        body {
          background: #000;
          color: #fff;
        }

        .github-page {
          min-height: 100vh;
          padding: 5px 15px 120px;
        }

        /* NO BORDER HERE */
        .github-container {
          max-width: 720px;
          margin: 0 auto;
        }

        .github-title {
          text-align: center;
          font-size: 28px;
          font-weight: 700;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 70px;
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
          margin: 0 auto 28px;
          line-height: 1.5;
        }

        /* MAIN CARD */
        .github-card {
          background: #050505;
          border-radius: 26px;
          padding: 30px 20px;
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

        /* STATS */
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

        /* REPO SECTION */
        .repo-section {
          margin-top: 30px;
        }

        .repo-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .repo-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .repo-card {
          background: #000;
          border-radius: 16px;
          padding: 14px 16px;
          border: 1px solid rgba(255,255,255,0.08);
          text-decoration: none;
          color: #fff;
          transition: 0.25s;
        }

        .repo-card:hover {
          border-color: #3b82f6;
          transform: translateY(-2px);
        }

        .repo-name {
          font-size: 15px;
          font-weight: 600;
        }

        .repo-desc {
          font-size: 13px;
          opacity: 0.75;
          margin-top: 4px;
        }

        .repo-empty {
          font-size: 14px;
          opacity: 0.6;
          text-align: center;
          padding: 20px 0;
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
              <img src={profile.avatar_url} className="avatar" />

              <div className="name">
                {profile.name || profile.login}
                <MdVerified className="verified" />
              </div>

              <div className="username">@{profile.login}</div>

              <div className="info">
                {profile.location && <span>{profile.location}</span>}
                {profile.blog && (
                  <a href={profile.blog} target="_blank" rel="noreferrer">
                    <FaGlobe />
                  </a>
                )}
              </div>
            </div>

            <div className="stats">
              <div className="stat">
                <FaUsers className="stat-icon" />
                <div className="stat-value">{profile.followers}</div>
                <div className="stat-label">Followers</div>
              </div>

              <div className="stat">
                <FaUserPlus className="stat-icon" />
                <div className="stat-value">{profile.following}</div>
                <div className="stat-label">Following</div>
              </div>

              <div className="stat">
                <FaBook className="stat-icon" />
                <div className="stat-value">{profile.public_repos}</div>
                <div className="stat-label">Repositories</div>
              </div>

              <div className="stat">
                <FaStar className="stat-icon" />
                <div className="stat-value">{profile.public_gists}</div>
                <div className="stat-label">Starred</div>
              </div>
            </div>

            <div className="repo-section">
              <div className="repo-title">
                <FaCode /> Public Projects
              </div>

              {repos.length > 0 ? (
                <div className="repo-list">
                  {repos.map(repo => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="repo-card"
                    >
                      <div className="repo-name">{repo.name}</div>
                      {repo.description && (
                        <div className="repo-desc">{repo.description}</div>
                      )}
                    </a>
                  ))}
                </div>
              ) : (
                <div className="repo-empty">
                  This user does not have any public projects.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
