import BigButton from './BigButton.jsx';

export default function ParentSettings({ settings, achievements, onSettingChange, onResetAchievements, onOpenResources }) {
  return (
    <section className="parent-settings" aria-label="Parent settings">
      <details>
        <summary>Parent settings</summary>
        <div className="settings-grid">
          <label>
            <input type="checkbox" checked={settings.sound} onChange={(event) => onSettingChange('sound', event.target.checked)} />
            Sound on
          </label>
          <label>
            <input type="checkbox" checked={settings.reducedMotion} onChange={(event) => onSettingChange('reducedMotion', event.target.checked)} />
            Reduced motion
          </label>
          <label>
            <input type="checkbox" checked={settings.calmMode} onChange={(event) => onSettingChange('calmMode', event.target.checked)} />
            Calm mode
          </label>
          <label>
            <input type="checkbox" checked={settings.showWatch} onChange={(event) => onSettingChange('showWatch', event.target.checked)} />
            Show Watch & Learn
          </label>
          <label>
            <input type="checkbox" checked={settings.showVideos} onChange={(event) => onSettingChange('showVideos', event.target.checked)} />
            Show video cards
          </label>
        </div>
        <div className="achievement-row">
          <strong>Achievements:</strong> {achievements.length ? achievements.join(', ') : 'None yet'}
        </div>
        <div className="settings-actions">
          <BigButton onClick={onOpenResources}>Open parent resources</BigButton>
          <BigButton onClick={onResetAchievements}>Reset achievements</BigButton>
        </div>
      </details>
    </section>
  );
}
