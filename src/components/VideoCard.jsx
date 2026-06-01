import MediaImage from './MediaImage.jsx';

export default function VideoCard({ video }) {
  return (
    <article className="video-card">
      <MediaImage src={video.thumbnail} alt={video.title} emoji="🎬" />
      <div>
        <span className="tag">{video.category}</span>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        {video.embedUrl ? (
          <div className="video-frame" title={video.title}>
            Video ready
          </div>
        ) : (
          <div className="video-placeholder">Parent video placeholder</div>
        )}
      </div>
    </article>
  );
}
