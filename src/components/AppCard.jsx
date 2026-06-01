export default function AppCard({ section, onOpen }) {
  return (
    <button
      className={`app-card ${section.color}`}
      onClick={() => onOpen(section.id)}
      aria-label={`Open ${section.title}`}
    >
      <span className="card-emoji" aria-hidden="true">{section.emoji}</span>
      <span>{section.title}</span>
    </button>
  );
}
