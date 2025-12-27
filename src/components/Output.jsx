export default function Output({ language, html, css, output }) {
  if (language === "html") {
    return (
      <iframe
        title="preview"
        style={{ width: "100%", height: 300, border: "1px solid #333" }}
        srcDoc={`${html || ""}<style>${css || ""}</style>`}
      />
    );
  }

  return (
    <pre style={{ background: "#000", color: "#0f0", padding: 12 }}>
      {output}
    </pre>
  );
}
