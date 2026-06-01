import { useState } from 'react';

function InteractiveMachine({ machine, soundPlayer, muted }) {
  const [active, setActive] = useState(false);
  const [lifted, setLifted] = useState(false);

  const handleUse = () => {
    setActive((current) => !current);
    if (soundPlayer) {
      soundPlayer.play(machine.sound || 'engine');
    }
  };

  return (
    <div className="interactive-machine" style={{ borderColor: machine.color }}>
      <div className="machine-art" aria-label={machine.name}>
        <span className="machine-emoji" aria-hidden="true">{machine.emoji}</span>
        <div className={active ? 'machine-motion active' : 'machine-motion'}>
          {machine.action === 'dig' && <span>⛏️</span>}
          {machine.action === 'lift' && <span>🟦</span>}
          {machine.action === 'tip' && <span>{lifted ? '🗑️⬆️' : '🗑️'}</span>}
        </div>
      </div>
      <div className="machine-info">
        <h3>{machine.name}</h3>
        <p>{machine.description}</p>
        <div className="machine-buttons">
          <button className="action-button" type="button" onClick={handleUse}>
            {machine.buttonText}
          </button>
          {machine.action === 'tip' && (
            <button className="action-button" type="button" onClick={() => setLifted((v) => !v)}>
              {lifted ? 'Put Down Bin' : 'Lift Bin'}
            </button>
          )}
        </div>
        <p className="fact-text">{machine.fact}</p>
      </div>
    </div>
  );
}

export default InteractiveMachine;
