import { useEffect, useRef, useState } from "react";

export default function AdDualEdge() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [show, setShow] = useState(false);

  // Desktop only + offset konten
  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setShow(true);
      document.body.style.paddingLeft = "180px";
      document.body.style.paddingRight = "180px";
      document.body.style.backgroundColor = "#000";
    }

    return () => {
      document.body.style.paddingLeft = "";
      document.body.style.paddingRight = "";
      document.body.style.backgroundColor = "";
    };
  }, []);

  // LEFT AD
  useEffect(() => {
    if (!show || !leftRef.current) return;

    window.atOptions = {
      key: "KEY_LEFT_160x300", // 🔴 GANTI KEY KIRI
      format: "iframe",
      height: 300,
      width: 160,
      params: {}
    };

    const s = document.createElement("script");
    s.src =
      "https://www.highperformanceformat.com/KEY_LEFT_160x300/invoke.js";
    s.async = true;

    leftRef.current.appendChild(s);

    setTimeout(() => {
      try { delete window.atOptions; } catch {}
    }, 1200);
  }, [show]);

  // RIGHT AD (delay biar gak bentrok)
  useEffect(() => {
    if (!show || !rightRef.current) return;

    setTimeout(() => {
      window.atOptions = {
        key: "KEY_RIGHT_160x300", // 🔴 GANTI KEY KANAN
        format: "iframe",
        height: 300,
        width: 160,
        params: {}
      };

      const s = document.createElement("script");
      s.src =
        "https://www.highperformanceformat.com/KEY_RIGHT_160x300/invoke.js";
      s.async = true;

      rightRef.current.appendChild(s);

      setTimeout(() => {
        try { delete window.atOptions; } catch {}
      }, 1200);
    }, 600);
  }, [show]);

  if (!show) return null;

  return (
    <>
      <style>{`
        .ad-edge {
          position: fixed;
          top: 0;
          bottom: 0;
          width: 180px;
          background: #000;
          z-index: 10;
          display: flex;
          justify-content: center;
          padding-top: 90px;
          user-select: none;
        }

        .ad-left { left: 0; }
        .ad-right { right: 0; }

        .ad-inner {
          width: 160px;
        }

        .ad-label {
          font-size: 11px;
          color: #888;
          margin: 0 0 6px 6px;
        }

        .ad-box {
          width: 160px;
          height: 300px;
          background: #000;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }

        /* anti putih */
        .ad-box::before {
          content: "";
          position: absolute;
          inset: 0;
          background: #000;
          z-index: 0;
        }

        .ad-box iframe {
          position: relative;
          z-index: 1;
          border: none;
          background: transparent;
        }
      `}</style>

      {/* LEFT */}
      <div className="ad-edge ad-left">
        <div className="ad-inner">
          <div className="ad-label">Advertisement from Adsterra</div>
          <div className="ad-box">
            <div ref={leftRef} />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="ad-edge ad-right">
        <div className="ad-inner">
          <div className="ad-label">Advertisement from Adsterra</div>
          <div className="ad-box">
            <div ref={rightRef} />
          </div>
        </div>
      </div>
    </>
  );
}
