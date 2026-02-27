import React from "react"

const Note = ({ note, onDelete }) => {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

  const cardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "8px",
  }

  const contentStyle = {
    fontSize: "14px",
    color: "#555",
    marginBottom: "12px",
  }

  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }

  const dateStyle = {
    fontSize: "12px",
    color: "#999",
  }

  const buttonStyle = {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  }

  return (
    <div style={cardStyle}>
      <div>
        <h3 style={titleStyle}>{note.title}</h3>
        <p style={contentStyle}>{note.content}</p>
      </div>
      <div style={footerStyle}>
        <span style={dateStyle}>{formattedDate}</span>
        <button style={buttonStyle} onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default Note