import { FaBlog, FaSearch, FaShareAlt } from "react-icons/fa";
import {
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaTiktok,
  FaLink,
} from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdBanner from "./components/AdBanner";
import FooterSpacer from "./components/FooterSpacer";
import blogData from "./data/blog.json";

const slugify = text =>
  text.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-");

export default function Blog() {
  const { slug } = useParams();
  const [query, setQuery] = useState("");
  const [showShare, setShowShare] = useState(false);

  const blog = slug
    ? blogData.find(b => slugify(b.title) === slug)
    : null;

  const filteredBlogs = blogData.filter(b =>
    b.title.toLowerCase().includes(query.toLowerCase())
  );

  const shareUrl = `${window.location.origin}/blog/${slug}`;
  const shareText = blog ? blog.title : "Check this blog";

  return (
    <>
      <style>{`
        * { box-sizing: border-box }
        body { margin: 0; background:#000; color:#fff; font-family: system-ui }

        .blog-page { padding: 10px 16px 24px }
        .blog-container {
          max-width: 720px;
          margin: 0 auto;
          padding: 14px 22px;
          background: rgba(255,255,255,0.015);
          border-radius: 22px;
          box-shadow: 0 20px 60px rgba(0,0,0,.6);
        }

        .blog-header { text-align:center; margin-bottom:36px }
        .blog-header h1 {
          display:flex; justify-content:center; align-items:center;
          gap:8px; font-size:24px;
        }

        .blog-line {
          width:50px; height:3px;
          background:#3b82f6;
          margin:10px auto;
          border-radius:6px;
        }

        .blog-desc { font-size:14px; opacity:.75 }

        .search-box {
          margin:28px 0 36px;
          display:flex; gap:10px;
          padding:12px 14px;
          border-radius:14px;
          background:#050505;
          border:1px solid rgba(255,255,255,.25);
        }

        .search-box input {
          flex:1; background:none; border:none;
          outline:none; color:#fff;
        }

        .blog-list {
          display:flex;
          flex-direction:column;
          gap:14px;
        }

        .blog-card {
          padding:16px 18px;
          border-radius:18px;
          background:#050505;
          border:1px solid rgba(255,255,255,.35);
          color:#fff;
          text-decoration:none;
          transition:.2s;
        }

        .blog-card:hover {
          transform:translateY(-2px);
          border-color:#3b82f6;
        }

        .not-found {
          text-align:center;
          opacity:.6;
          padding:40px 0;
        }

        /* DETAIL */
        .detail-title { font-size:24px; font-weight:700 }
        .detail-line {
          height:2px;
          background:#3b82f6;
          margin:6px 0 20px;
        }

        .detail-author {
          display:flex; align-items:center;
          gap:8px; margin-bottom:18px;
        }

        .detail-author img {
          width:32px; height:32px;
          border-radius:50%;
        }

        .detail-author button {
          margin-left:auto;
          background:none;
          border:none;
          color:#fff;
          cursor:pointer;
          font-size:18px;
        }

        .detail-image {
          width:100%;
          border-radius:16px;
          margin:20px 0;
        }

        .detail-content {
          white-space:pre-line;
          line-height:1.8;
          opacity:.9;
        }

        .back-btn {
          display:inline-block;
          margin-top:36px;
          color:#3b82f6;
          font-weight:600;
          text-decoration:none;
        }

        /* SHARE POPUP */
        .share-popup {
          position:fixed;
          inset:0;
          background:rgba(0,0,0,.6);
          display:flex;
          justify-content:center;
          align-items:center;
          z-index:99;
        }

        .share-box {
          background:#050505;
          padding:20px;
          border-radius:18px;
          border:1px solid rgba(255,255,255,.25);
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:18px;
        }

        .share-box a {
          color:#fff;
          font-size:26px;
          text-align:center;
        }
      `}</style>

      <Navbar />

      <div className="blog-page">
        <div className="blog-container">

          {blog ? (
            <>
              <div className="detail-title">{blog.title}</div>
              <div className="detail-line" />

              <div className="detail-author">
                <img src="/profile.webp" />
                <span>Aprilio</span>
                <MdVerified />
                <button onClick={() => setShowShare(true)}>
                  <FaShareAlt />
                </button>
              </div>

              <img src={blog.image} className="detail-image" />

              <div className="detail-content">{blog.content}</div>

              <Link to="/blog" className="back-btn">
                ← Back to List Blog
              </Link>
            </>
          ) : (
            <>
              <div className="blog-header">
                <h1><FaBlog /> Blog</h1>
                <div className="blog-line" />
                <div className="blog-desc">
                  Articles, notes, and stories
                </div>
              </div>

              <div className="search-box">
                <FaSearch />
                <input
                  placeholder="Search blog..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
              </div>

              <div className="blog-list">
                {filteredBlogs.length ? (
                  filteredBlogs.map((b, i) => (
                    <Link
                      key={i}
                      to={`/blog/${slugify(b.title)}`}
                      className="blog-card"
                    >
                      {b.title}
                    </Link>
                  ))
                ) : (
                  <div className="not-found">
                    Blog not found
                  </div>
                )}
              </div>
            </>
          )}

        </div>
      </div>

      <AdBanner />
      <FooterSpacer />
      <Footer />

      {showShare && (
        <div className="share-popup" onClick={() => setShowShare(false)}>
          <div className="share-box" onClick={e => e.stopPropagation()}>
            <a href={`https://wa.me/?text=${shareText} ${shareUrl}`} target="_blank"><FaWhatsapp /></a>
            <a href={`https://t.me/share/url?url=${shareUrl}&text=${shareText}`} target="_blank"><FaTelegram /></a>
            <a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a>
            <a href="https://www.tiktok.com/" target="_blank"><FaTiktok /></a>
            <a href={`https://line.me/R/msg/text/?${shareText} ${shareUrl}`} target="_blank">LINE</a>
            <a onClick={() => navigator.clipboard.writeText(shareUrl)}>
              <FaLink />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
