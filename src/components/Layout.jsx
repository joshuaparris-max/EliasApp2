import { Link, useLocation } from 'react-router-dom';
import BackButton from './BackButton.jsx';
import MuteToggle from './MuteToggle.jsx';

function Layout({ children, muted, onToggleMute }) {
  const location = useLocation();
  const showBack = location.pathname !== '/';

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-left">
          {showBack ? <BackButton /> : <div className="header-spacer" />}
          <Link to="/" className="app-title" aria-label="Home page">
            Elias&apos; Playhouse
          </Link>
        </div>
        <MuteToggle muted={muted} onToggleMute={onToggleMute} />
      </header>
      <main className="page-content">{children}</main>
      <footer className="app-footer">
        <p>Safe play for little builders. No ads, no autoplay.</p>
      </footer>
    </div>
  );
}

export default Layout;
