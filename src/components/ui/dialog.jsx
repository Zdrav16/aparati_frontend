import React from "react";

export function Dialog({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={dialogStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export function DialogTitle({ children }) {
  return <h2 style={{ marginBottom: "1rem" }}>{children}</h2>;
}

export function DialogContent({ children }) {
  return <div>{children}</div>;
}

// Basic styles for the modal
const backdropStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const dialogStyle = {
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "8px",
  width: "600px",
  maxHeight: "80vh",
  overflowY: "auto",
};
