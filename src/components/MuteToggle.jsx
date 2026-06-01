function MuteToggle({ muted, onToggleMute }) {
  return (
    <button className="mute-toggle" onClick={onToggleMute} type="button">
      {muted ? '🔇 Sound Off' : '🔊 Sound On'}
    </button>
  );
}

export default MuteToggle;
