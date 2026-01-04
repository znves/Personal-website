import { useEffect, useRef, useState } from "react";

export default function AdBanner() {
  const adRef = useRef(null);
  const [loadAd, setLoadAd] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoadAd(true), 1000);
    return () => clearTimeout(t);
  }, []);

  // inject script adsterra (safe for React StrictMode)
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
        .ad-wrapper {
          width: 320px;
          margin: 0 auto;
          user-select: none;
        }

        /* LABEL MENYATU DENGAN BORDER */
        .ad-label {
          display: inline-block;
          font-size: 11px;
          color: #aaa;
          padding: 0px 10px;
          border: 1px solid rgba(255,255,255,0.2);
          border-bottom: none;
          border-radius: 10px 10px 0 0;
          background: #050505;
          margin-left: 12px;
        }

        .ad-box {
          width: 320px;
          height: 50px;
          background: #050505;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 14px;
          border-top-left-radius: 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ad-slot {
          width: 320px;
          height: 50px;
        }

        .ad-box iframe {
          border: none;
        }
      `}</style>

      <div className="ad-wrapper">
        <div className="ad-label">Advertisement from Adsterra</div>

        <div className="ad-box">
          <div className="ad-slot" ref={adRef} />
        </div>
      </div>
    </>
  );
}
