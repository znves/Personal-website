import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Stats() {
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

        .notfound {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 5px;
        }

        .nf-box {
          max-width: 436px;
        }

        .nf-code {
          font-size: 50px;
          font-weight: 800;
          letter-spacing: 2px;
          opacity: 0.9;
        }

        .nf-title {
          margin-top: 8px;
          font-size: 22px;
          font-weight: 600;
        }

        .nf-desc {
          margin-top: 12px;
          font-size: 14px;
          opacity: 0.7;
          line-height: 1.6;
        }

        .nf-btn {
          display: inline-block;
          margin-top: 28px;
          padding: 10px 22px;
          border-radius: 14px;
          background: #fff;
          color: #000;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: 0.2s ease;
        }

        .nf-btn:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
      `}</style>

      <Navbar />
      
      <div className="notfound">
        <div className="nf-box">
          <div className="nf-code">Coming Soon</div>
          <div className="nf-title">Sorry...</div>
          <div className="nf-desc">
            This page will be available very soon.
          </div>

          <Footer />
          
        </div>
      </div>
    </>
  );
}
