import BackButton from './BackButton.jsx';
import MuteToggle from './MuteToggle.jsx';

export default function Layout({ page, title, muted, sessionNote, onToggleMute, onBack, className = '', children }) {
  return (
    <div className={`app-shell ${className}`}>
      <header className="app-header">
        <div className="brand-mark" aria-label="EliasApp">
          <span aria-hidden="true">{'\u{1F6E0}\uFE0F'}</span>
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
      {sessionNote ? <div className="session-note">{sessionNote}</div> : null}
      <main className="page-content">{children}</main>
    </div>
  );
}
