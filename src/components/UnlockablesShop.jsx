import FeedbackBubble from './FeedbackBubble.jsx';

export default function UnlockablesShop({ achievements, themes, trucks }) {
  return (
    <div className="unlockables-shop">
      <h3>Achievement Rewards</h3>
      <p>Unlock new themes and truck colors as you play! ⭐</p>

      <section className="unlockables-section">
        <h4>Themes</h4>
        <div className="unlockables-grid">
          {themes.map((theme) => (
            <div key={theme.id} className={`unlockable-card ${theme.unlocked ? 'unlocked' : 'locked'}`}>
              <div className="unlockable-preview" style={{ backgroundColor: theme.color }} />
              <h5>{theme.name}</h5>
              {!theme.unlocked && <p className="requirement">{theme.requirement}</p>}
              <span className="status">{theme.unlocked ? '✓ Unlocked' : '🔒 Locked'}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="unlockables-section">
        <h4>Truck Colors</h4>
        <div className="unlockables-grid">
          {trucks.map((truck) => (
            <div key={truck.id} className={`unlockable-card ${truck.unlocked ? 'unlocked' : 'locked'}`}>
              <div className="color-circle" style={{ backgroundColor: truck.color }} />
              <h5>{truck.name}</h5>
              {!truck.unlocked && <p className="requirement">{truck.requirement}</p>}
              <span className="status">{truck.unlocked ? '✓ Unlocked' : '🔒 Locked'}</span>
            </div>
          ))}
        </div>
      </section>

      <FeedbackBubble>Keep playing to unlock more themes and colors!</FeedbackBubble>
    </div>
  );
}
