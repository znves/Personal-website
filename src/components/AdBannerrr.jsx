import { useEffect, useRef, useState } from "react";

export default function AdDualEdge() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [canShow, setCanShow] = useState(false);

  // desktop only + offset konten
  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setCanShow(true);

      // geser konten + pastikan bg hitam
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
    if (!canShow || !leftRef.current) return;
    if (window.__ADSTERRA_LEFT__) return;
    window.__ADSTERRA_LEFT__ = true;

    window.atOptions = {
      key: "170efe53479927171645a301d1c7a00a",
      format: "iframe",
      height: 300,
      width: 160,
      params: {}
    };

    const s = document.createElement("script");
    s.src =
      "https://www.highperformanceformat.com/170efe53479927171645a301d1c7a00a/invoke.js";
    s.async = true;
    leftRef.current.appendChild(s);

    setTimeout(() => {
      try { delete window.atOptions; } catch {}
    }, 1500);
  }, [canShow]);

  // RIGHT AD (delay dikit)
  useEffect(() => {
    if (!canShow || !rightRef.current) return;
    if (window.__ADSTERRA_RIGHT__) return;
    window.__ADSTERRA_RIGHT__ = true;

    setTimeout(() => {
      window.atOptions = {
        key: "170efe53479927171645a301d1c7a00a",
        format: "iframe",
        height: 300,
        width: 160,
        params: {}
      };

      const s = document.createElement("script");
      s.src =
        "https://www.highperformanceformat.com/170efe53479927171645a301d1c7a00a/invoke.js";
      s.async = true;
      rightRef.current.appendChild(s);

      setTimeout(() => {
        try { delete window.atOptions; } catch {}
      }, 1500);
    }, 600);
  }, [canShow]);

  if (!canShow) return null;

  return (
    <>
      <style>{`
        /* WRAPPER FIXED FULL HITAM */
        .ad-edge {
          position: fixed;
          top: 0;
          bottom: 0;
          width: 180px;
          background: #000;
          z-index: 10;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 90px;
          user-select: none;
        }

        .ad-left {
          left: 0;
        }

        .ad-right {
          right: 0;
        }

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

        /* anti putih saat kosong */
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
