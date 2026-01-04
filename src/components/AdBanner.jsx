import { useEffect, useRef, useState } from "react";

export default function AdBanner() {
  const adRef = useRef(null);
  const [show, setShow] = useState(false);

  // delay 3 detik
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // inject ads (anti double run)
  useEffect(() => {
    if (!show || !adRef.current) return;
    if (window.__ADSTERRA_DONE__) return;
    window.__ADSTERRA_DONE__ = true;

    window.atOptions = {
      key: "25606089ca02f01002442e7b9fe6935d",
      format: "iframe",
      height: 50,
      width: 320,
      params: {}
    };

    const s = document.createElement("script");
    s.src =
      "https://www.highperformanceformat.com/25606089ca02f01002442e7b9fe6935d/invoke.js";
    s.async = true;

    adRef.current.appendChild(s);
  }, [show]);

  if (!show) return null;

  return (
    <>
      <style>{`
        .ad-box {
          margin: 32px auto;
          padding: 12px 8px 8px;
          max-width: 360px;
          background: #050505;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 14px;
          position: relative;
          display: flex;
          justify-content: center;
        }

        .ad-label {
          position: absolute;
          top: -10px;
          left: 14px;
          font-size: 11px;
          padding: 2px 8px;
          background: #050505;
          color: #aaa;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
          user-select: none;
        }

        .ad-box iframe {
          border: none;
        }
      `}</style>

      <div className="ad-box">
        <span className="ad-label">Advertisement</span>
        <div ref={adRef} />
      </div>
    </>
  );
}
