export default function BackButton({ onClick }) {
  return (
    <button className="back-button" onClick={onClick} aria-label="Go back home">
      ← Home
    </button>
  );
}
