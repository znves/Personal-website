import { useEffect, useRef, useState } from "react";

export default function AdBanner() {
  const adRef = useRef(null);
  const [loadAd, setLoadAd] = useState(false);

  // delay IKLAN 3 detik (border tetap tampil)
  useEffect(() => {
    const t = setTimeout(() => setLoadAd(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // inject script adsterra (anti strict mode)
  useEffect(() => {
    if (!loadAd || !adRef.current) return;
    if (window.__ADSTERRA_LOADED__) return;
    window.__ADSTERRA_LOADED__ = true;

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
  }, [loadAd]);

  return (
    <>
      <style>{`
        .ad-box {
          margin: 32px auto;
          width: 320px;
          height: 50px;
          background: #050505;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 14px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .ad-label {
          position: absolute;
          top: -10px;
          left: 12px;
          font-size: 11px;
          padding: 2px 8px;
          background: #050505;
          color: #aaa;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
          user-select: none;
          z-index: 2;
        }

        .ad-slot {
          width: 320px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ad-box iframe {
          border: none;
        }
      `}</style>

      <div className="ad-box">
        <span className="ad-label">Advertisement from Adsterra</span>
        <div className="ad-slot" ref={adRef} />
      </div>
    </>
  );
}
