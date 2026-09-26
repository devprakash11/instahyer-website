import React from "react";

function ResponsiveImage({
  src,
  alt,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  width,
  height,
  objectPosition,
}) {
  return (
    <div className={`media-frame ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        width={width}
        height={height}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  );
}

export default ResponsiveImage;
