import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", padding: "120px 24px" }}>
      <h1 style={{ fontSize: "48px", color: "#7B5CF0" }}>404</h1>
      <p style={{ fontSize: "20px", color: "#484554" }}>Strona nie istnieje</p>
      <Link to="/" style={{
        display: "inline-block", marginTop: "24px", padding: "16px 32px",
        background: "#7B5CF0", color: "#fff", borderRadius: "9999px",
        textDecoration: "none", fontFamily: "Manrope, sans-serif", fontWeight: 700
      }}>
        Wróć na stronę główną
      </Link>
    </div>
  );
}

export default NotFoundPage;