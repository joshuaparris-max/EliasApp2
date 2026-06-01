import { useState } from 'react';
import AppCard from '../components/AppCard.jsx';
import spinners from '../data/spinners.js';

function SpinPage({ soundPlayer }) {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="page section-page">
      <section className="page-hero">
        <h1>Things That Spin</h1>
        <p>Tap each spinner to make it move with a fun sound.</p>
      </section>
      <AppCard
        title="Spin play"
        text="Gentle movement, bright shapes, and calm interaction."
        icon="⚙️"
      />
      <div className="spinner-grid">
        {spinners.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`spinner-card ${activeId === item.id ? 'active' : ''}`}
            onClick={() => {
              setActiveId(item.id);
              if (soundPlayer) soundPlayer.play('click');
            }}
          >
            <span className="spinner-emoji" aria-hidden="true">{item.emoji}</span>
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SpinPage;
