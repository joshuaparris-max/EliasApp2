import { useState } from 'react';

export default function MediaImage({ src, alt, emoji, className = '' }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className={`image-fallback ${className}`} role="img" aria-label={alt}>
        <span aria-hidden="true">{emoji}</span>
      </div>
    );
  }

  return <img className={className} src={src} alt={alt} onError={() => setFailed(true)} />;
}
