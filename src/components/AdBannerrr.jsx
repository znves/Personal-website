import { useEffect, useRef, useState } from "react";

export default function AdSidebar() {
  const adRef = useRef(null);
  const [canShow, setCanShow] = useState(false);

  // 1️⃣ Desktop only (block mobile totally)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 1024) {
      setCanShow(true);
    }
  }, []);

  // 2️⃣ Load Adsterra (safe for SPA & StrictMode)
  useEffect(() => {
    if (!canShow || !adRef.current) return;
    if (window.__ADSTERRA_160x300__) return;
    window.__ADSTERRA_160x300__ = true;

    // set GLOBAL config (Adsterra requirement)
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

    // 3️⃣ Cleanup global config (ANTI BLANK)
    const cleanup = setTimeout(() => {
      try {
        delete window.atOptions;
      } catch {}
    }, 1500);

    return () => clearTimeout(cleanup);
  }, [canShow]);

  // 🚫 Mobile = render nothing + no request
  if (!canShow) return null;

  return (
    <>
      <style>{`
        /* SIDEBAR + STICKY */
        .ad-sidebar {
          position: sticky;
          top: 90px; /* sesuaikan tinggi navbar */
          width: 160px;
          height: fit-content;
          user-select: none;
        }

        /* LABEL */
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

        /* BOX */
        .ad-box {
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

        /* SLOT */
        .ad-slot {
          width: 160px;
          height: 300px;
        }

        .ad-box iframe {
          border: none;
        }
      `}</style>

      <aside className="ad-sidebar">
        <div className="ad-label">Advertisement from Adsterra</div>

        <div className="ad-box">
          <div className="ad-slot" ref={adRef} />
        </div>
      </aside>
    </>
  );
}
