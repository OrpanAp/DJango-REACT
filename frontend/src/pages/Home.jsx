import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api"
import Note from "../components/Note"

const Home = () => {
  const navigate = useNavigate()
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    getNotes()
  }, [])

  const getNotes = () => {
    api.get("/api/notes/")
      .then((res) => setNotes(res.data))
      .catch((err) => alert(err))
  }

  const deleteNote = (id) => {
    api.delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) getNotes()
      })
      .catch((err) => alert(err))
  }

  const createNote = (e) => {
    e.preventDefault()
    api.post("/api/notes/", { title, content })
      .then((res) => {
        if (res.status === 201) {
          setTitle("")
          setContent("")
          getNotes()
        }
      })
      .catch((err) => alert(err))
  }

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login")
  }

  // Styles
  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    padding: "24px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: "relative",
  }

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
  }

  const logoutButtonStyle = {
    position: "absolute",
    top: "24px",
    right: "24px",
    padding: "10px 16px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.2s ease",
  }

  const logoutHover = (e) => (e.target.style.backgroundColor = "#c0392b")
  const logoutOut = (e) => (e.target.style.backgroundColor = "#e74c3c")

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  }

  const formContainerStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
  }

  const labelStyle = { display: "block", marginBottom: "6px", fontWeight: "600", color: "#555" }
  const inputStyle = { width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "16px", fontSize: "14px", outline: "none", boxSizing: "border-box" }
  const textareaStyle = { ...inputStyle, minHeight: "100px", resize: "vertical" }

  const submitButtonStyle = { width: "100%", padding: "12px", backgroundColor: "#4caf50", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "600", cursor: "pointer", transition: "background-color 0.2s ease" }
  const submitButtonHover = (e) => (e.target.style.backgroundColor = "#45a049")
  const submitButtonOut = (e) => (e.target.style.backgroundColor = "#4caf50")

  return (
    <div style={containerStyle}>
      <button
        style={logoutButtonStyle}
        onClick={handleLogout}
        onMouseEnter={logoutHover}
        onMouseLeave={logoutOut}
      >
        Logout
      </button>

      <h2 style={headingStyle}>My Notes</h2>

      <div style={gridStyle}>
        {notes.map((note) => (
          <Note key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </div>

      <div style={formContainerStyle}>
        <h3 style={{ ...headingStyle, fontSize: "22px" }}>Create a Note</h3>
        <form onSubmit={createNote}>
          <label style={labelStyle}>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={inputStyle} required />

          <label style={labelStyle}>Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} style={textareaStyle} required />

          <button type="submit" style={submitButtonStyle} onMouseEnter={submitButtonHover} onMouseLeave={submitButtonOut}>
            Create Note
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home