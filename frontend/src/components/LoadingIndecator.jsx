import React from "react"

const LoadingIndicator = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "150px",
    backgroundColor: "#f0f2f5",
  }

  const spinnerStyle = {
    width: "50px",
    height: "50px",
    border: "6px solid #e0e0e0",
    borderTop: "6px solid #3498db",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  }

  const textStyle = {
    marginTop: "12px",
    fontSize: "16px",
    color: "#555",
    fontWeight: "500",
  }

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center" }}>
        <div style={spinnerStyle}></div>
        <div style={textStyle}>Loading...</div>
      </div>

      {/* Inline keyframes for spin animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  )
}

export default LoadingIndicator