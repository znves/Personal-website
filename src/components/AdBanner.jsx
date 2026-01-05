import { useEffect, useRef, useState } from "react";

export default function AdBannerTop() {
  const adRef = useRef(null);
  const [loadAd, setLoadAd] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoadAd(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loadAd || !adRef.current) return;
    if (window.__ADSTERRA_320x50__) return;
    window.__ADSTERRA_320x50__ = true;

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

    // cleanup GLOBAL config (WAJIB)
    const cleanup = setTimeout(() => {
      try {
        delete window.atOptions;
      } catch {}
    }, 1500);

    return () => clearTimeout(cleanup);
  }, [loadAd]);

  return (
    <>
      <style>{`
        .ad-wrapper-320 {
          width: 320px;
          margin: 0 auto;
          user-select: none;
        }

        .ad-label {
          display: inline-block;
          font-size: 11px;
          color: #aaa;
          padding: 0 10px;
          border: 1px solid rgba(255,255,255,0.2);
          border-bottom: none;
          border-radius: 10px 10px 0 0;
          background: #050505;
          margin-left: 12px;
        }

        .ad-box-320 {
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

        .ad-slot-320 {
          width: 320px;
          height: 50px;
        }

        .ad-box-320 iframe {
          border: none;
        }
      `}</style>

      <div className="ad-wrapper-320">
        <div className="ad-label">Advertisement</div>
        <div className="ad-box-320">
          <div className="ad-slot-320" ref={adRef} />
        </div>
      </div>
    </>
  );
}
