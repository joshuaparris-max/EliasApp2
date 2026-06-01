import { useState } from 'react';

export default function InteractiveMachine({ machine, onAction }) {
  const [status, setStatus] = useState('ready');

  const handleAction = (action) => {
    setStatus(action);
    if (onAction) onAction(action);
  };

  return (
    <article className="machine-card" style={{ borderColor: machine.color }}>
      <div className="machine-card-art">
        <span aria-hidden="true">{machine.emoji}</span>
      </div>
      <div className="machine-card-body">
        <h3>{machine.name}</h3>
        <p>{machine.description}</p>
      </div>
      <div className="machine-actions">
        {machine.actions?.map((action) => (
          <button key={action} type="button" onClick={() => handleAction(action)}>
            {action}
          </button>
        ))}
      </div>
      <p className="machine-status">{status === 'ready' ? 'Tap a button to play.' : `${status}!`}</p>
    </article>
  );
}
