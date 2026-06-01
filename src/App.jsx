import { useMemo, useState } from 'react';
import AppCard from './components/AppCard.jsx';
import BackButton from './components/BackButton.jsx';
import BigButton from './components/BigButton.jsx';
import MiniGameShell from './components/MiniGameShell.jsx';
import SoundButton from './components/SoundButton.jsx';
import ToolCard from './components/ToolCard.jsx';
import VehicleCard from './components/VehicleCard.jsx';
import VideoCard from './components/VideoCard.jsx';
import MediaImage from './components/MediaImage.jsx';
import {
  constructionMachines,
  fixObjects,
  garbageTrucks,
  miniGames,
  sections,
  spinners,
  tools,
  vehicles,
  videos,
} from './data/items.js';

const pageTitles = Object.fromEntries(sections.map((section) => [section.id, section.title]));

function playSoftTone(muted) {
  if (muted || typeof window === 'undefined') return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.value = 420;
  gain.gain.setValueAtTime(0.001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.22);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.24);
}

export default function App() {
  const [page, setPage] = useState('home');
  const [muted, setMuted] = useState(true);
  const title = page === 'home' ? 'EliasApp' : pageTitles[page];

  const playTone = () => playSoftTone(muted);

  return (
    <div className="app">
      <header className="topbar">
        <div>
          <p className="eyebrow">For Elias</p>
          <h1>{title}</h1>
        </div>
        <SoundButton muted={muted} onToggle={() => setMuted((value) => !value)} />
      </header>

      {page !== 'home' && <BackButton onClick={() => setPage('home')} />}

      <main>
        {page === 'home' && <Home onOpen={setPage} />}
        {page === 'garbage' && <GarbagePage playTone={playTone} />}
        {page === 'construction' && <ConstructionPage playTone={playTone} />}
        {page === 'cars' && <CarsPage muted={muted} playTone={playTone} />}
        {page === 'tools' && <ToolsPage />}
        {page === 'spin' && <SpinPage />}
        {page === 'build' && <BuildFixPage />}
        {page === 'watch' && <WatchPage />}
        {page === 'play' && <PlayPage playTone={playTone} />}
      </main>
    </div>
  );
}

function Home({ onOpen }) {
  return (
    <section className="home-grid" aria-label="Choose a section">
      {sections.map((section) => (
        <AppCard key={section.id} section={section} onOpen={onOpen} />
      ))}
    </section>
  );
}

function GarbagePage({ playTone }) {
  const [action, setAction] = useState('ready');

  function trigger(nextAction) {
    setAction(nextAction);
    playTone();
  }

  return (
    <section className="page-stack">
      <div className="hero-scene garbage-scene">
        <div className={`garbage-animation ${action}`}>
          <div className="truck-body">🚛</div>
          <div className="bin">🗑️</div>
          <div className="clean-stars">✨</div>
        </div>
      </div>
      <div className="button-row big-actions">
        <BigButton onClick={() => trigger('lift')}>Lift the bin</BigButton>
        <BigButton onClick={() => trigger('tip')}>Tip rubbish</BigButton>
        <BigButton onClick={() => trigger('crush')}>Crush sound</BigButton>
        <BigButton onClick={() => trigger('drive')}>Drive away</BigButton>
      </div>
      <div className="fact-strip">
        <p>Garbage trucks help keep our streets clean.</p>
        <p>Recycling trucks collect paper, cardboard, glass, and plastic.</p>
      </div>
      <div className="card-grid">
        {garbageTrucks.map((truck) => (
          <article className="item-card" key={truck.id}>
            <MediaImage src={truck.image} alt={truck.name} emoji={truck.emoji} />
            <h3>{truck.name}</h3>
            <p>{truck.fact}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ConstructionPage({ playTone }) {
  const [active, setActive] = useState('excavator');

  return (
    <section className="page-stack">
      <div className="construction-yard">
        <div className={`machine-picture ${active}`}>
          <span aria-hidden="true">{constructionMachines.find((machine) => machine.id === active)?.emoji}</span>
        </div>
        <p>{constructionMachines.find((machine) => machine.id === active)?.fact}</p>
      </div>
      <div className="card-grid">
        {constructionMachines.map((machine) => (
          <button
            className={`item-card tap-card ${active === machine.id ? 'selected' : ''}`}
            key={machine.id}
            onClick={() => {
              setActive(machine.id);
              playTone();
            }}
            aria-label={`Tap ${machine.name} to ${machine.action}`}
          >
            <MediaImage src={machine.image} alt={machine.name} emoji={machine.emoji} />
            <h3>{machine.name}</h3>
            <p>{machine.fact}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

function CarsPage({ muted, playTone }) {
  return (
    <section className="card-grid">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} muted={muted} playTone={playTone} />
      ))}
    </section>
  );
}

function ToolsPage() {
  const [matched, setMatched] = useState('');
  const target = tools[0];

  return (
    <section className="page-stack">
      <div className="parent-note">Play tools only with a grown-up nearby.</div>
      <div className="match-panel">
        <h2>Match the tool to the job</h2>
        <p>What turns the pretend screw?</p>
        <div className="button-row">
          {tools.slice(0, 4).map((tool) => (
            <BigButton key={tool.id} onClick={() => setMatched(tool.id)}>
              {tool.emoji} {tool.name}
            </BigButton>
          ))}
        </div>
        {matched && <strong className="happy-note">{matched === target.id ? 'You found it!' : 'Try another tool.'}</strong>}
      </div>
      <div className="card-grid">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}

function SpinPage() {
  const [fast, setFast] = useState('');
  const [spinning, setSpinning] = useState('');

  return (
    <section className="spinner-grid">
      {spinners.map((item) => (
        <button
          className="spinner-card"
          key={item.id}
          onPointerDown={() => {
            setSpinning(item.id);
            setFast(item.id);
          }}
          onPointerUp={() => setFast('')}
          onPointerLeave={() => setFast('')}
          onClick={() => setSpinning((value) => (value === item.id ? '' : item.id))}
          aria-label={`Spin ${item.name}`}
        >
          <span className={`${spinning === item.id ? 'spin' : ''} ${fast === item.id ? 'fast' : ''}`} aria-hidden="true">
            {item.emoji}
          </span>
          <strong>{item.name}</strong>
        </button>
      ))}
    </section>
  );
}

function BuildFixPage() {
  const [object, setObject] = useState(fixObjects[0].id);
  const [tool, setTool] = useState(tools[0].id);
  const selectedObject = fixObjects.find((item) => item.id === object);
  const selectedTool = tools.find((item) => item.id === tool);

  return (
    <section className="page-stack">
      <div className="build-stage">
        <span className="build-object" aria-hidden="true">{selectedObject.emoji}</span>
        <span className="build-tool" aria-hidden="true">{selectedTool.emoji}</span>
        <strong>You fixed it!</strong>
        <p>The truck is ready!</p>
      </div>
      <div className="chooser-grid">
        <div>
          <h2>Pick something</h2>
          <div className="button-row">
            {fixObjects.map((item) => (
              <BigButton key={item.id} onClick={() => setObject(item.id)} className={object === item.id ? 'active' : ''}>
                {item.emoji} {item.name}
              </BigButton>
            ))}
          </div>
        </div>
        <div>
          <h2>Pick a tool</h2>
          <div className="button-row">
            {tools.slice(0, 4).map((item) => (
              <BigButton key={item.id} onClick={() => setTool(item.id)} className={tool === item.id ? 'active' : ''}>
                {item.emoji} {item.name}
              </BigButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WatchPage() {
  return (
    <section className="page-stack">
      <div className="parent-note">Videos never auto-play. Parents add and review every video.</div>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}

function PlayPage({ playTone }) {
  const [answers, setAnswers] = useState({});
  const roadPieces = useMemo(() => Array.from({ length: 6 }, (_, index) => index), []);
  const [road, setRoad] = useState([]);

  return (
    <section className="game-grid">
      {miniGames.map((game) => (
        <MiniGameShell key={game.id} game={game}>
          {game.id === 'road-build' ? (
            <div className="road-builder">
              {roadPieces.map((piece) => (
                <button
                  key={piece}
                  className={`road-piece ${road.includes(piece) ? 'placed' : ''}`}
                  onClick={() => setRoad((value) => (value.includes(piece) ? value : [...value, piece]))}
                  aria-label={`Place road piece ${piece + 1}`}
                />
              ))}
              {road.length === roadPieces.length && <strong>Road ready!</strong>}
            </div>
          ) : (
            <>
              <div className="button-row">
                {[game.answer, 'Try me'].map((choice) => (
                  <BigButton
                    key={choice}
                    onClick={() => {
                      setAnswers((value) => ({ ...value, [game.id]: choice }));
                      playTone();
                    }}
                  >
                    {choice}
                  </BigButton>
                ))}
              </div>
              {answers[game.id] && (
                <strong className="happy-note">{answers[game.id] === game.answer ? 'Great job!' : 'Try again.'}</strong>
              )}
            </>
          )}
        </MiniGameShell>
      ))}
    </section>
  );
}
