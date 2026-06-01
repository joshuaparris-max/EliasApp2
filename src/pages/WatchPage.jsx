import VideoCard from '../components/VideoCard.jsx';
import AppCard from '../components/AppCard.jsx';
import videos from '../data/videos.js';

function WatchPage() {
  return (
    <div className="page section-page">
      <section className="page-hero">
        <h1>Watch & Learn</h1>
        <p>Safe placeholders for videos parents can review and add later.</p>
      </section>
      <AppCard
        title="Parent-controlled videos"
        text="No autoplay, no random content, no outside links shown to child."
        icon="🎬"
      />
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default WatchPage;
