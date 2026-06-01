import InteractiveMachine from '../components/InteractiveMachine.jsx';
import AppCard from '../components/AppCard.jsx';
import garbageTrucks from '../data/garbageTrucks.js';

function GarbagePage({ soundPlayer, muted }) {
  return (
    <div className="page section-page">
      <section className="page-hero">
        <h1>Garbage Trucks</h1>
        <p>Tap the trucks to lift bins, count wheels, and listen for friendly sounds.</p>
      </section>
      <AppCard
        title="Safe truck play"
        text="Trucks, bins, and bright buttons for curious helpers."
        icon="🚛"
      />
      <div className="machine-grid">
        {garbageTrucks.map((truck) => (
          <InteractiveMachine key={truck.id} machine={truck} soundPlayer={soundPlayer} muted={muted} />
        ))}
      </div>
    </div>
  );
}

export default GarbagePage;
