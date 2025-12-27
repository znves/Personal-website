export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 40,
        padding: 16,
        borderTop: "1px solid #333",
        textAlign: "center",
        fontSize: 14,
      }}
    >
      © {new Date().getFullYear()} Skynefh Code Playground
    </footer>
  );
}
