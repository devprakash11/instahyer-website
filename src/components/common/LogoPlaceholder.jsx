import React from "react";
function LogoPlaceholder({ light = false }) {
  return (
    <div
      className={`logo-placeholder${light ? " logo-placeholder--light" : ""}`}
      aria-label="Logo placeholder"
    >
      <span className="logo-placeholder__box">People First</span>
      {/* <span className="logo-placeholder__caption">HR Professional</span> */}
    </div>
  );
}

export default LogoPlaceholder;
