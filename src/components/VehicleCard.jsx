import { useState } from 'react';
import BigButton from './BigButton.jsx';
import MediaImage from './MediaImage.jsx';

const colors = ['coral', 'sky', 'sun', 'mint'];

export default function VehicleCard({ vehicle, muted, playTone }) {
  const [lights, setLights] = useState(false);
  const [spin, setSpin] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <article className={`item-card vehicle-shell ${colors[colorIndex]}`}>
      <div className="vehicle-stage">
        <MediaImage src={vehicle.image} alt={vehicle.name} emoji={vehicle.emoji} />
        <div className={`headlights ${lights ? 'on' : ''}`} aria-hidden="true" />
        <button
          className={`wheel wheel-left ${spin ? 'spinning' : ''}`}
          onClick={() => setSpin((value) => !value)}
          aria-label={`Spin ${vehicle.name} wheels`}
        />
        <button
          className={`wheel wheel-right ${spin ? 'spinning' : ''}`}
          onClick={() => setSpin((value) => !value)}
          aria-label={`Spin ${vehicle.name} wheels`}
        />
      </div>
      <h3>{vehicle.name}</h3>
      <div className="button-row">
        <BigButton onClick={() => playTone(vehicle.sound)} aria-label={`Beep ${vehicle.name} horn`}>
          {muted ? 'Muted' : 'Beep'}
        </BigButton>
        <BigButton onClick={() => setLights((value) => !value)} aria-label={`Toggle ${vehicle.name} lights`}>
          Lights
        </BigButton>
        <BigButton onClick={() => setColorIndex((value) => (value + 1) % colors.length)} aria-label={`Change ${vehicle.name} colour`}>
          Colour
        </BigButton>
      </div>
    </article>
  );
}
