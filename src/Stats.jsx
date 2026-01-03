import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import {
  FaGithub,
  FaUsers,
  FaUserPlus,
  FaBook,
  FaStar,
  FaGlobe,
  FaCode,
  FaBalanceScale,
  FaCodeBranch,
  FaEye,
  FaTag,
  FaClock
} from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function GitHubStats() {
  const username = "vestionz"; // CHANGE USERNAME
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(r => r.json())
      .then(setProfile);

    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then(r => r.json())
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

        .github-container {
          max-width: 720px;
          margin: 0 auto;
        }

        .github-title {
          text-align: center;
          font-size: 22px;
          font-weight: 600;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
        }

        .github-line {
          width: 48px;
          height: 3px;
          background: #3b82f6;
          margin: 8px auto;
          border-radius: 10px;
        }

        .github-sub {
          text-align: center;
          font-size: 12px;
          opacity: 0.7;
          max-width: 300px;
          margin: 0 auto 18px;
        }

        .github-card {
          background: #050505;
          border-radius: 20px;
          padding: 20px 16px;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .profile {
          text-align: center;
        }

        .avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          margin-bottom: 10px;
        }

        .name {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          font-size: 16px;
          font-weight: 600;
        }

        .verified {
          color: #3b82f6;
          font-size: 14px;
        }

        .username {
          font-size: 12px;
          opacity: 0.65;
        }

        .stats {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .stat {
          background: #000;
          border-radius: 12px;
          padding: 12px 6px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .stat-icon {
          font-size: 14px;
          margin-bottom: 4px;
        }

        .stat-value {
          font-size: 14px;
          font-weight: 600;
        }

        .stat-label {
          font-size: 10px;
          opacity: 0.65;
        }

        /* REPO SECTION */
        .repo-section {
          margin-top: 20px;
        }

        .repo-title {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .repo-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .repo-card {
          background: #000;
          border-radius: 14px;
          padding: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          text-decoration: none;
          color: #fff;
        }

        /* SMALL META LIST */
        .repo-meta {
          font-size: 11px;
          opacity: 0.65;
          line-height: 1.6;
          margin-bottom: 8px;
        }

        .repo-meta div {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .repo-name {
          font-size: 13px;
          font-weight: 600;
        }

        .repo-desc {
          font-size: 11px;
          opacity: 0.65;
          margin-top: 4px;
        }

        .repo-empty {
          font-size: 12px;
          opacity: 0.6;
          text-align: center;
          padding: 14px 0;
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
                <div className="stat-label">Repos</div>
              </div>
              <div className="stat">
                <FaStar className="stat-icon" />
                <div className="stat-value">{profile.public_gists}</div>
                <div className="stat-label">Stars</div>
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
                      <div className="repo-meta">
                        <div><FaBalanceScale /> {repo.license?.spdx_id || "No license"}</div>
                        <div><FaStar /> {repo.stargazers_count} stars</div>
                        <div><FaCodeBranch /> {repo.forks_count} forks</div>
                        <div><FaEye /> {repo.watchers_count} watching</div>
                        <div><FaCodeBranch /> 1 branch</div>
                        <div><FaTag /> 0 tags</div>
                        <div><FaClock /> Activity</div>
                      </div>

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
