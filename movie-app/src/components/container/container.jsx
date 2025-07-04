import React from "react";

const Container = ({ children, style }) => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;