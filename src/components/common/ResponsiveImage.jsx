import React from "react";
function ResponsiveImage({ src, alt, className = "", loading = "lazy", objectPosition }) {
  return (
    <div className={`media-frame ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  );
}

export default ResponsiveImage;
