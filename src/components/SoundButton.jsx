export default function SoundButton({ muted, onToggle }) {
  return (
    <button className="mute-toggle" onClick={onToggle} aria-label={muted ? 'Turn sound on' : 'Turn sound off'}>
      <span aria-hidden="true">{muted ? '🔇' : '🔊'}</span>
      {muted ? 'Sound off' : 'Sound on'}
    </button>
  );
}
