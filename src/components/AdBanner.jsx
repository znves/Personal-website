import { useEffect, useRef, useState } from "react";

export default function AdBanner() {
  const adRef = useRef(null);
  const [loadAd, setLoadAd] = useState(false);

  // delay IKLAN 3 detik
  useEffect(() => {
    const t = setTimeout(() => setLoadAd(true), 1000);
    return () => clearTimeout(t);
  }, []);

  // inject adsterra script
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
          margin: 32px auto;
          width: 320px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          user-select: none;
        }

        .ad-label {
          font-size: 11px;
          color: #aaa;
          padding-left: 8px;
        }

        .ad-box {
          width: 320px;
          height: 50px;
          background: #050505;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 14px;
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
