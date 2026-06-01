export default function FeedbackBubble({ children }) {
  return (
    <div className="feedback-bubble" role="status" aria-live="polite">
      <span aria-hidden="true">✨</span>
      {children}
    </div>
  );
}
