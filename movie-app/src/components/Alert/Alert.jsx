import React from "react";

function Alert({ message, type = "info" }) {
  const getColor = () => {
    switch (type) {
      case "success":
        return "#d4edda";
      case "error":
        return "#f8d7da";
      case "warning":
        return "#fff3cd";
      default:
        return "#d1ecf1";
    }
  };

  const style = {
    background: getColor(),
    color: "#333",
    padding: "12px 20px",
    borderRadius: "4px",
    margin: "10px 0",
    border: "1px solid #ccc",
  };

  if (!message) return null;

  return <div style={style}>{message}</div>;
}

export default Alert;