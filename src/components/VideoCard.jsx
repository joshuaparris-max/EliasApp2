import MediaImage from './MediaImage.jsx';

export default function VideoCard({ video }) {
  return (
    <article className="video-card">
      <div className="video-preview">
        <MediaImage src={video.thumbnail || video.image} alt={video.title} emoji={video.emoji} />
        <span className="play-badge" aria-hidden="true">▶</span>
      </div>
      <span className="tag">{video.category}</span>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      {video.embedUrl ? (
        <div className="approved-video">Parent-approved video ready</div>
      ) : (
        <div className="approved-video empty">Add a reviewed video in data first</div>
      )}
    </article>
  );
}
