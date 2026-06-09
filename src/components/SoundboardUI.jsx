import BigButton from './BigButton.jsx';

export default function SoundboardUI({ playTone }) {
  const sounds = [
    { name: 'Truck Beep', pitch: 400 },
    { name: 'Horn Honk', pitch: 500 },
    { name: 'Siren', pitch: 600 },
    { name: 'Bell', pitch: 520 },
    { name: 'Whistle', pitch: 650 },
    { name: 'Ding', pitch: 700 },
  ];

  return (
    <div className="soundboard-ui">
      <div className="soundboard-grid">
        {sounds.map((sound, index) => (
          <BigButton
            key={index}
            onClick={() => playTone?.(sound.pitch)}
            className="sound-button"
          >
            {sound.name}
          </BigButton>
        ))}
      </div>
    </div>
  );
}
