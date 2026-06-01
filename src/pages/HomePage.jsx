import BigButton from '../components/BigButton.jsx';
import AppCard from '../components/AppCard.jsx';
import { sections } from '../data/items.js';

function HomePage() {
  return (
    <div className="page home-page">
      <section className="hero-card">
        <h1>Welcome, Elias!</h1>
        <p>Explore trucks, tools, building, and friendly games. Tap big buttons to play.</p>
      </section>
      <AppCard title="Simple choices" text="Tap one thing at a time. Bright colors and safe play." icon="🧸">
        <p className="small-note">No ads, no random videos, no outside links.</p>
      </AppCard>
      <div className="button-grid">
        {sections.map((section) => (
          <BigButton
            key={section.id}
            to={section.id === 'build' ? '/build-fix' : `/${section.id}`}
            label={section.title}
            emoji={section.emoji}
            color={section.color}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
