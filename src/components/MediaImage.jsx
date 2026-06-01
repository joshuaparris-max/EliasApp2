import { useState } from 'react';

export default function MediaImage({ src, alt, emoji = '⭐', className = '' }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className={`media-fallback ${className}`} role="img" aria-label={alt}>
        <span aria-hidden="true">{emoji}</span>
      </div>
    );
  }

  return (
    <img
      className={`media-image ${className}`}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
