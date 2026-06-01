import MiniGameShell from '../components/MiniGameShell.jsx';
import AppCard from '../components/AppCard.jsx';
import miniGames from '../data/games.js';

function PlayZonePage({ soundPlayer, muted }) {
  return (
    <div className="page section-page">
      <section className="page-hero">
        <h1>Play Zone</h1>
        <p>Easy games for matching, counting, and building safe skills.</p>
      </section>
      <AppCard
        title="Play and learn"
        text="Bright, clear games with gentle praise and simple choices."
        icon="🎲"
      />
      <MiniGameShell games={miniGames} soundPlayer={soundPlayer} muted={muted} />
    </div>
  );
}

export default PlayZonePage;
