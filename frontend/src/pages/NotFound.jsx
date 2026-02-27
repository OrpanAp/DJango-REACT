import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.code}>404</h1>
        <h2 style={styles.title}>Oops! Page Not Found</h2>
        <p style={styles.text}>
          The page you're looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        <Link to="/" style={styles.button}>
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2, #6ee7b7)",
    fontFamily: "'Inter', sans-serif",
    padding: "20px"
  },
  card: {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "60px 50px",
    borderRadius: "24px",
    textAlign: "center",
    boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
    maxWidth: "450px",
    width: "100%",
  },
  code: {
    fontSize: "90px",
    margin: "0",
    fontWeight: "800",
    background: "linear-gradient(90deg, #667eea, #764ba2)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  title: {
    marginTop: "10px",
    fontSize: "26px",
    fontWeight: "600",
    color: "#333",
  },
  text: {
    margin: "20px 0 35px",
    fontSize: "16px",
    color: "#666",
    lineHeight: "1.6",
  },
  button: {
    display: "inline-block",
    padding: "14px 32px",
    borderRadius: "12px",
    background: "linear-gradient(90deg, #667eea, #764ba2)",
    color: "#fff",
    fontWeight: "600",
    textDecoration: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 25px rgba(102,126,234,0.4)",
  }
}

export default NotFound