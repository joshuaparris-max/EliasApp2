import BackButton from './BackButton.jsx';

export default function SectionHeader({ icon, title, description, onBack }) {
  return (
    <section className="section-header">
      <div className="section-top">
        <BackButton onClick={onBack} />
        <div className="section-title-block">
          <span className="section-icon" aria-hidden="true">{icon}</span>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
