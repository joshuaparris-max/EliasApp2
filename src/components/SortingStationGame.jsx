import { useState, useMemo } from 'react';
import BigButton from './BigButton.jsx';
import FeedbackBubble from './FeedbackBubble.jsx';

export default function SortingStationGame({ items, bins, playTone }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sorted, setSorted] = useState({});
  const [complete, setComplete] = useState(false);

  const currentItem = items[currentIndex];
  const correctBin = bins.find((bin) => bin.id === `bin-${currentItem.category}`);
  const correctCount = Object.values(sorted).filter(Boolean).length;

  function sortItem(bin) {
    const isCorrect = bin.id === `bin-${currentItem.category}`;
    setSorted((prev) => ({ ...prev, [currentIndex]: isCorrect }));
    if (playTone) playTone(isCorrect ? 520 : 330);

    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setComplete(true);
    }
  }

  function resetGame() {
    setCurrentIndex(0);
    setSorted({});
    setComplete(false);
  }

  return (
    <div className="sorting-station-game">
      <div className="conveyor-section">
        <div className="conveyor-belt">
          {!complete && (
            <div className="conveyor-item" key={currentItem.id}>
              <span className="item-emoji">{currentItem.emoji}</span>
              <p>{currentItem.name}</p>
            </div>
          )}
        </div>
      </div>

      <div className="bin-zone">
        {bins.map((bin) => (
          <button
            key={bin.id}
            className="sort-bin"
            style={{ backgroundColor: bin.color }}
            onClick={() => sortItem(bin)}
            disabled={complete}
            aria-label={`Sort into ${bin.name} bin`}
          >
            <span>{bin.emoji}</span>
            <strong>{bin.name}</strong>
          </button>
        ))}
      </div>

      <FeedbackBubble>
        {complete
          ? `All sorted! ${correctCount}/${items.length} correct. ${correctCount === items.length ? '🌟 Perfect!' : 'Great job!'}`
          : `Sorted ${correctCount}/${items.length}. Which bin?`}
      </FeedbackBubble>

      {complete && <BigButton onClick={resetGame}>Play again</BigButton>}
    </div>
  );
}
