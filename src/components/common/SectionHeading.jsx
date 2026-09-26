import React from "react";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  headingLevel = "h2",
}) {
  const Heading = headingLevel;

  return (
    <header
      className={`section-heading section-heading--${align}${light ? " section-heading--light" : ""}`}
    >
      {eyebrow && (
        <p className="section-heading__eyebrow">
          <span aria-hidden="true">—</span> {eyebrow}
        </p>
      )}
      <Heading>{title}</Heading>
      {description && <p className="section-heading__description">{description}</p>}
    </header>
  );
}

export default SectionHeading;
