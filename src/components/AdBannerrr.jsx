import { useEffect, useRef, useState } from "react";

export default function AdDualEdge() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [canShow, setCanShow] = useState(false);

  // desktop only
  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setCanShow(true);

      // geser konten biar ga ketutup
      document.body.style.paddingLeft = "180px";
      document.body.style.paddingRight = "180px";
    }

    return () => {
      document.body.style.paddingLeft = "";
      document.body.style.paddingRight = "";
    };
  }, []);

  // load LEFT ad
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
      try {
        delete window.atOptions;
      } catch {}
    }, 1500);
  }, [canShow]);

  // load RIGHT ad (delay dikit)
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
        try {
          delete window.atOptions;
        } catch {}
      }, 1500);
    }, 600);
  }, [canShow]);

  // mobile = nothing
  if (!canShow) return null;

  return (
    <>
      <style>{`
        .ad-edge {
          position: fixed;
          top: 90px;
          width: 160px;
          z-index: 10;
          user-select: none;
        }

        .ad-left {
          left: 0;
        }

        .ad-right {
          right: 0;
        }

        .ad-label {
          font-size: 11px;
          color: #aaa;
          margin: 0 0 4px 8px;
        }

        .ad-box {
          width: 160px;
          height: 300px;
          background: #050505;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 12px;
          overflow: hidden;
        }

        .ad-box iframe {
          border: none;
        }
      `}</style>

      {/* LEFT */}
      <div className="ad-edge ad-left">
        <div className="ad-label">Advertisement from Adsterra</div>
        <div className="ad-box">
          <div ref={leftRef} />
        </div>
      </div>

      {/* RIGHT */}
      <div className="ad-edge ad-right">
        <div className="ad-label">Advertisement from Adsterra</div>
        <div className="ad-box">
          <div ref={rightRef} />
        </div>
      </div>
    </>
  );
}
