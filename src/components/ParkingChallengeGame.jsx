import { useState, useMemo } from 'react';
import BigButton from './BigButton.jsx';
import FeedbackBubble from './FeedbackBubble.jsx';

export default function ParkingChallengeGame({ trucks, spots, playTone }) {
  const [remaining, setRemaining] = useState(trucks);
  const [parked, setParked] = useState({});
  const [currentTruck, setCurrentTruck] = useState(trucks[0]);
  const [complete, setComplete] = useState(false);

  function parkTruck(spot) {
    const isCorrect = spot.color === currentTruck.color;
    const spotKey = spot.id;
    
    if (isCorrect && !parked[spotKey]) {
      setParked((prev) => ({ ...prev, [spotKey]: currentTruck }));
      const newRemaining = remaining.filter((t) => t.id !== currentTruck.id);
      setRemaining(newRemaining);

      if (playTone) playTone(520);

      if (newRemaining.length === 0) {
        setComplete(true);
      } else {
        setCurrentTruck(newRemaining[0]);
      }
    } else {
      if (playTone) playTone(330);
    }
  }

  function resetGame() {
    setRemaining(trucks);
    setParked({});
    setCurrentTruck(trucks[0]);
    setComplete(false);
  }

  return (
    <div className="parking-challenge-game">
      <div className="parking-instruction">
        <h3>{complete ? 'Great parking!' : 'Bring the truck to its spot'}</h3>
        {!complete && (
          <div className="current-truck">
            <span className="truck-emoji">{currentTruck.emoji}</span>
            <strong>{currentTruck.name}</strong>
          </div>
        )}
      </div>

      <div className="parking-spots-grid">
        {spots.map((spot) => (
          <button
            key={spot.id}
            className={`parking-spot ${parked[spot.id] ? 'occupied' : ''}`}
            style={{ backgroundColor: parked[spot.id] ? '#ccc' : spot.color }}
            onClick={() => parkTruck(spot)}
            disabled={complete || parked[spot.id] !== undefined}
            aria-label={`Park in ${spot.label} spot`}
          >
            {parked[spot.id] && <span className="parked-truck">{parked[spot.id].emoji}</span>}
            {!parked[spot.id] && <span className="spot-label">{spot.label}</span>}
          </button>
        ))}
      </div>

      <FeedbackBubble>
        {complete
          ? 'All trucks parked! 🌟 You are a master driver!'
          : `${trucks.length - remaining.length + 1}/${trucks.length} trucks parked.`}
      </FeedbackBubble>

      {complete && <BigButton onClick={resetGame}>Play again</BigButton>}
    </div>
  );
}
