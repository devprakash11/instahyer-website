import React from "react";

function BrandLogo({ light = false }) {
  return (
    <span
      className={`logo-placeholder${light ? " logo-placeholder--light" : ""}`}
      aria-label="Instahyer"
      role="img"
    >
      <span className="logo-placeholder__box">Instahyer</span>
    </span>
  );
}

export default BrandLogo;
