import React from "react";
function SectionHeading({ eyebrow, title, description, align = "center", light = false }) {
  return (
    <header
      className={`section-heading section-heading--${align}${light ? " section-heading--light" : ""}`}
    >
      {eyebrow && <p className="section-heading__eyebrow">— {eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </header>
  );
}

export default SectionHeading;
