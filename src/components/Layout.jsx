import BackButton from './BackButton.jsx';
import MuteToggle from './MuteToggle.jsx';

export default function Layout({ page, title, muted, onToggleMute, onBack, children }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand-mark" aria-label="EliasApp">
          <span aria-hidden="true">🛠️</span>
          <div>
            <strong>EliasApp</strong>
            <small>{page === 'home' ? 'Playroom dashboard' : title}</small>
          </div>
        </div>
        <div className="header-actions">
          {page !== 'home' && <BackButton onClick={onBack} />}
          <MuteToggle muted={muted} onToggle={onToggleMute} />
        </div>
      </header>
      <main className="page-content">{children}</main>
    </div>
  );
}
