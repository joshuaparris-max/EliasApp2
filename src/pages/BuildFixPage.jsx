import { useState } from 'react';
import ToolCard from '../components/ToolCard.jsx';
import AppCard from '../components/AppCard.jsx';
import tools from '../data/tools.js';
import { fixObjects } from '../data/items.js';

function BuildFixPage({ soundPlayer }) {
  const [fixedItems, setFixedItems] = useState({});

  return (
    <div className="page section-page">
      <section className="page-hero">
        <h1>Build & Fix</h1>
        <p>Choose tools, fix toys, and build a safe little world.</p>
      </section>
      <AppCard
        title="Repair play"
        text="Tap tools and objects to learn how things are built and fixed."
        icon="🛠️"
      />
      <div className="fix-grid">
        {fixObjects.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`fix-object ${fixedItems[item.id] ? 'fixed' : ''}`}
            onClick={() => {
              setFixedItems((current) => ({ ...current, [item.id]: !current[item.id] }));
              if (soundPlayer) soundPlayer.play('click');
            }}
          >
            <span aria-hidden="true" className="fix-emoji">{item.emoji}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>
      <div className="tool-grid">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export default BuildFixPage;
