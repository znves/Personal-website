import { useEffect, useRef, useState } from "react";

export default function AdBannerSide() {
  const adRef = useRef(null);
  const [loadAd, setLoadAd] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoadAd(true), 2200); // delay paling akhir
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loadAd || !adRef.current) return;
    if (window.__ADSTERRA_160x300__) return;
    window.__ADSTERRA_160x300__ = true;

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

    adRef.current.appendChild(s);

    // 🧹 cleanup global config (WAJIB)
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
        .ad-wrapper-160 {
          width: 160px;
          margin: 24px auto;
          user-select: none;
        }

        .ad-label {
          display: inline-block;
          font-size: 11px;
          color: #aaa;
          padding: 0 8px;
          border: 1px solid rgba(255,255,255,0.2);
          border-bottom: none;
          border-radius: 10px 10px 0 0;
          background: #050505;
          margin-left: 8px;
        }

        .ad-box-160 {
          width: 160px;
          height: 300px;
          background: #050505;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 14px;
          border-top-left-radius: 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ad-slot-160 {
          width: 160px;
          height: 300px;
        }

        .ad-box-160 iframe {
          border: none;
        }
      `}</style>

      <div className="ad-wrapper-160">
        <div className="ad-label">Advertisement</div>

        <div className="ad-box-160">
          <div className="ad-slot-160" ref={adRef} />
        </div>
      </div>
    </>
  );
}
