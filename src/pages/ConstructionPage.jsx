import InteractiveMachine from '../components/InteractiveMachine.jsx';
import AppCard from '../components/AppCard.jsx';
import constructionMachines from '../data/constructionMachines.js';

function ConstructionPage({ soundPlayer, muted }) {
  return (
    <div className="page section-page">
      <section className="page-hero">
        <h1>Construction Machines</h1>
        <p>Tap cranes, excavators, and dump trucks to make gentle actions happen.</p>
      </section>
      <AppCard
        title="Build and learn"
        text="Safe interactive machines that teach about digging, lifting, and moving things."
        icon="🏗️"
      />
      <div className="machine-grid">
        {constructionMachines.map((machine) => (
          <InteractiveMachine key={machine.id} machine={machine} soundPlayer={soundPlayer} muted={muted} />
        ))}
      </div>
    </div>
  );
}

export default ConstructionPage;
