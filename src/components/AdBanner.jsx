import { useEffect, useRef, useState } from "react";

export default function AdBanner() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000); // delay 3 detik
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show || !ref.current || ref.current.childNodes.length) return;

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

    ref.current.appendChild(s);
  }, [show]);

  if (!show) return null;

  return (
    <>
      <style>{`
        .ad-wrap {
          position: relative;
          margin: 32px auto;
          padding: 14px 10px 10px;
          max-width: 360px;
          display: flex;
          justify-content: center;
          background: #050505;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 14px;
        }

        .ad-label {
          position: absolute;
          top: -10px;
          left: 14px;
          font-size: 11px;
          padding: 2px 8px;
          background: #050505;
          color: #aaa;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 999px;
          user-select: none;
        }

        .ad-wrap iframe {
          border: none;
          display: block;
        }
      `}</style>

      <div className="ad-wrap">
        <span className="ad-label">Advertisement</span>
        <div ref={ref} />
      </div>
    </>
  );
}
