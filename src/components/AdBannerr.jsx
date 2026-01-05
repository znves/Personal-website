import { useEffect, useRef, useState } from "react";

export default function AdBannerContent() {
  const adRef = useRef(null);
  const [loadAd, setLoadAd] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoadAd(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loadAd || !adRef.current) return;
    if (window.__ADSTERRA_300x250__) return;
    window.__ADSTERRA_300x250__ = true;

    window.atOptions = {
      key: "088de0ae32b436f1a0110168f4bc5a4f",
      format: "iframe",
      height: 250,
      width: 300,
      params: {}
    };

    const s = document.createElement("script");
    s.src =
      "https://www.highperformanceformat.com/088de0ae32b436f1a0110168f4bc5a4f/invoke.js";
    s.async = true;

    adRef.current.appendChild(s);

    // cleanup GLOBAL config (INI KUNCI FIX)
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
        .ad-wrapper-300 {
          width: 300px;
          margin: 24px auto;
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

        .ad-box-300 {
          width: 300px;
          height: 250px;
          background: #050505;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 14px;
          border-top-left-radius: 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ad-slot-300 {
          width: 300px;
          height: 250px;
        }

        .ad-box-300 iframe {
          border: none;
        }
      `}</style>

      <div className="ad-wrapper-300">
        <div className="ad-label">Advertisement</div>
        <div className="ad-box-300">
          <div className="ad-slot-300" ref={adRef} />
        </div>
      </div>
    </>
  );
}
