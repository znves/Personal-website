import { FaSearch, FaBlog, FaShareAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdBanner from "./AdBanner";
import blogData from "../data/blog.json";

/* slug generator */
const slugify = text =>
  text.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-");

export default function Blog() {
  const { slug } = useParams();

  // MODE DETAIL
  if (slug) {
    const blog = blogData.find(b => slugify(b.title) === slug);
    if (!blog) return <div>Blog not found</div>;

    return (
      <>
        <style>{`
          .blog-page { padding: 10px 16px 24px }
          .container { max-width: 720px; margin: 0 auto }
          .title { font-size: 26px; font-weight: 700 }
          .line { height: 2px; background: #fff; margin: 10px 0 20px }
          .author {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
          }
          .author img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }
          .author button {
            margin-left: auto;
            background: none;
            border: none;
            color: #fff;
            cursor: pointer;
          }
          .image {
            width: 100%;
            border-radius: 16px;
            margin: 20px 0;
          }
          .content {
            white-space: pre-line;
            line-height: 1.8;
            opacity: 0.9;
          }
          .back {
            display: inline-block;
            margin-top: 40px;
            color: #3b82f6;
            text-decoration: none;
            font-weight: 600;
          }
        `}</style>

        <Navbar />

        <div className="blog-page">
          <div className="container">
            <div className="title">{blog.title}</div>
            <div className="line" />

            <div className="author">
              <img src="/profile.webp" />
              <span>Vestionz</span>
              <MdVerified />
              <button><FaShareAlt /></button>
            </div>

            <img src={blog.image} className="image" />

            <div className="content">{blog.content}</div>

            <Link to="/blog" className="back">
              ← Back to List Blog
            </Link>
          </div>
        </div>

        <AdBanner />
        <div style={{ height: 120 }} />
        <Footer />
      </>
    );
  }

  // MODE LIST
  return (
    <>
      <style>{`
        .blog-page { padding: 10px 16px 24px }
        .container { max-width: 720px; margin: 0 auto }
        .header {
          text-align: center;
          margin-bottom: 24px;
        }
        .header h1 {
          display: flex;
          justify-content: center;
          gap: 10px;
          font-size: 26px;
          color: #3b82f6;
        }
        .desc {
          margin-top: 12px;
          font-size: 14px;
          opacity: 0.85;
        }
        .search {
          margin: 24px 0;
          display: flex;
          gap: 10px;
          background: #050505;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 12px 14px;
          border-radius: 14px;
        }
        .search input {
          flex: 1;
          background: transparent;
          border: none;
          color: #fff;
          outline: none;
        }
        .list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .card {
          padding: 16px;
          border-radius: 18px;
          background: #050505;
          border: 1px solid rgba(255,255,255,0.08);
          text-decoration: none;
          color: #fff;
        }
        .card:hover {
          border-color: #3b82f6;
          transform: translateY(-2px);
        }
      `}</style>

      <Navbar />

      <div className="blog-page">
        <div className="container">
          <div className="header">
            <h1><FaBlog /> Blog</h1>
            <div className="desc">
              Articles, notes, and personal stories
            </div>
          </div>

          <div className="search">
            <FaSearch />
            <input placeholder="Search blog..." />
          </div>

          <div className="list">
            {blogData.map((b, i) => (
              <Link
                key={i}
                to={`/blog/${slugify(b.title)}`}
                className="card"
              >
                {b.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <AdBanner />
      <div style={{ height: 120 }} />
      <Footer />
    </>
  );
}
