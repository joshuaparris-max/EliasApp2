export default function SoundButton({ muted, onToggle }) {
  return (
    <button className="sound-button" onClick={onToggle} aria-label={muted ? 'Turn sound on' : 'Mute sound'}>
      {muted ? '🔇 Sound off' : '🔊 Sound on'}
    </button>
  );
}
