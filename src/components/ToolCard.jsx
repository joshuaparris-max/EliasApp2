import { useState } from 'react';
import BigButton from './BigButton.jsx';
import MediaImage from './MediaImage.jsx';

export default function ToolCard({ tool }) {
  const [active, setActive] = useState(false);
  const [turns, setTurns] = useState(0);

  return (
    <article className={`item-card tool-card ${active ? 'fixed' : ''}`}>
      <MediaImage src={tool.image} alt={tool.name} emoji={tool.emoji} />
      <h3>{tool.name}</h3>
      <p>{tool.fact}</p>
      <div className="pretend-workbench">
        <span className="toy-car" aria-hidden="true">🚗</span>
        <span className="pretend-screw" style={{ transform: `rotate(${turns * 35}deg)` }} aria-hidden="true">⊕</span>
      </div>
      <div className="button-row">
        <BigButton onClick={() => setTurns((value) => value - 1)} aria-label={`Turn ${tool.name} anticlockwise`}>
          Turn Left
        </BigButton>
        <BigButton onClick={() => setTurns((value) => value + 1)} aria-label={`Turn ${tool.name} clockwise`}>
          Turn Right
        </BigButton>
        <BigButton onClick={() => setActive(true)} aria-label={`Use ${tool.name} to fix toy car`}>
          Fix
        </BigButton>
      </div>
      {active && <strong className="happy-note">All fixed!</strong>}
    </article>
  );
}
