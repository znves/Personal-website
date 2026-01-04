import { FaBlog, FaSearch, FaShareAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdBanner from "./components/AdBanner";
import FooterSpacer from "./components/FooterSpacer";
import blogData from "./data/blog.json";

/* slug generator */
const slugify = text =>
  text.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-");

export default function Blog() {
  const { slug } = useParams();
  const blog = slug
    ? blogData.find(b => slugify(b.title) === slug)
    : null;

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

        .blog-page {
          padding: 10px 16px 24px;
        }

        .blog-container {
          max-width: 720px;
          margin: 0 auto;
          padding: 14px 22px;
          background: rgba(255,255,255,0.015);
          border-radius: 22px;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.02),
            0 20px 60px rgba(0,0,0,0.6);
        }

        /* HEADER */
        .blog-header {
          text-align: center;
          margin-top: 8px;
          margin-bottom: 36px;
        }

        .blog-header h1 {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          font-size: 24px;
          font-weight: 600;
          color: #fff;
        }

        .blog-line {
          width: 50px;
          height: 3px;
          background: #3b82f6;
          margin: 10px auto 0;
          border-radius: 10px;
        }

        .blog-desc {
          margin-top: 12px;
          font-size: 14px;
          opacity: 0.75;
          line-height: 1.6;
        }

        /* SEARCH */
        .search-box {
          margin: 28px 0 36px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: #050505;
          border: 1px solid rgba(255,255,255,0.25);
        }

        .search-box input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-size: 14px;
        }

        /* LIST */
        .blog-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .blog-card {
          padding: 16px 18px;
          border-radius: 18px;
          background: #050505;
          border: 1px solid rgba(255,255,255,0.35);
          color: #fff;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .blog-card:hover {
          transform: translateY(-2px);
          border-color: #3b82f6;
        }

        .blog-card h3 {
          font-size: 16px;
          font-weight: 600;
          margin: 0;
        }

        /* DETAIL */
        .detail-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .detail-line {
          height: 2px;
          background: #3b82f6;
          margin-bottom: 20px;
        }

        .detail-author {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
          opacity: 0.9;
        }

        .detail-author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        .detail-author button {
          margin-left: auto;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          font-size: 16px;
        }

        .detail-image {
          width: 100%;
          border-radius: 16px;
          margin: 20px 0;
        }

        .detail-content {
          white-space: pre-line;
          line-height: 1.8;
          opacity: 0.9;
        }

        .back-btn {
          display: inline-block;
          margin-top: 36px;
          color: #3b82f6;
          font-weight: 600;
          text-decoration: none;
        }
      `}</style>

      <Navbar />

      <div className="blog-page">
        <div className="blog-container">

          {/* ===== DETAIL MODE ===== */}
          {blog ? (
            <>
              <div className="detail-title">{blog.title}</div>
              <div className="detail-line" />

              <div className="detail-author">
                <img src="/profile.webp" />
                <span>Vestionz</span>
                <MdVerified />
                <button title="Share">
                  <FaShareAlt />
                </button>
              </div>

              <img src={blog.image} className="detail-image" />

              <div className="detail-content">
                {blog.content}
              </div>

              <Link to="/blog" className="back-btn">
                ← Back to List Blog
              </Link>
            </>
          ) : (
            <>
              {/* ===== LIST MODE ===== */}
              <div className="blog-header">
                <h1>
                  <FaBlog /> Blog
                </h1>
                <div className="blog-line" />
                <div className="blog-desc">
                  Articles, notes, and personal stories
                </div>
              </div>

              <div className="search-box">
                <FaSearch />
                <input placeholder="Search blog..." />
              </div>

              <div className="blog-list">
                {blogData.map((b, i) => (
                  <Link
                    key={i}
                    to={`/blog/${slugify(b.title)}`}
                    className="blog-card"
                  >
                    <h3>{b.title}</h3>
                  </Link>
                ))}
              </div>
            </>
          )}

        </div>
      </div>

      <AdBanner />
      <FooterSpacer />
      <Footer />
    </>
  );
}
