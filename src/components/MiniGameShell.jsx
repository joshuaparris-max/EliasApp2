import { useMemo, useState } from 'react';

function MiniGameShell({ games, soundPlayer, muted }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const game = games[activeIndex];

  const choices = useMemo(() => game.choices, [game]);

  const handleSelect = (choice) => {
    setSelected(choice);
    if (choice === game.correct) {
      setFeedback('Great job! ⭐');
      setScore((prev) => prev + 1);
      if (soundPlayer) soundPlayer.play('cheer');
    } else {
      setFeedback('Try again! 😊');
      if (soundPlayer) soundPlayer.play('buzz');
    }
  };

  return (
    <section className="mini-game-shell">
      <div className="game-tabs">
        {games.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={index === activeIndex ? 'tab active' : 'tab'}
            onClick={() => {
              setActiveIndex(index);
              setSelected('');
              setFeedback('');
            }}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="game-card">
        <h3>{game.title}</h3>
        <p>{game.instruction}</p>
        <div className="game-options">
          {choices.map((choice) => (
            <button
              key={choice}
              type="button"
              className={`choice ${selected === choice ? 'selected' : ''}`}
              onClick={() => handleSelect(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
        <div className="game-feedback">
          {feedback && <p>{feedback}</p>}
          <p>Score: {score}</p>
          <button
            className="action-button"
            type="button"
            onClick={() => {
              setSelected('');
              setFeedback('');
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </section>
  );
}

export default MiniGameShell;
