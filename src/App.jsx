import { useMemo, useState } from 'react';
import Layout from './components/Layout.jsx';
import HomeCard from './components/HomeCard.jsx';
import SectionPage from './components/SectionPage.jsx';
import BigButton from './components/BigButton.jsx';
import FeedbackBubble from './components/FeedbackBubble.jsx';
import MachineCard from './components/MachineCard.jsx';
import VehicleCard from './components/VehicleCard.jsx';
import ToolCard from './components/ToolCard.jsx';
import InteractiveSpinner from './components/InteractiveSpinner.jsx';
import VideoCard from './components/VideoCard.jsx';
import MiniGameShell from './components/MiniGameShell.jsx';
import GameCard from './components/GameCard.jsx';
import MediaImage from './components/MediaImage.jsx';
import { sections } from './data/sections.js';
import { garbageTrucks } from './data/garbageTrucks.js';
import { constructionMachines } from './data/constructionMachines.js';
import { vehicles } from './data/vehicles.js';
import { tools } from './data/tools.js';
import { spinners } from './data/spinners.js';
import { videos } from './data/videos.js';
import { games, fixObjects } from './data/games.js';

const pageMap = Object.fromEntries(sections.map((section) => [section.id, section]));

function playSoftTone(muted, pitch = 420) {
  if (muted || typeof window === 'undefined') return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.value = pitch;
  gain.gain.setValueAtTime(0.001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.06, context.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.25);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.28);
}

export default function App() {
  const [page, setPage] = useState('home');
  const [muted, setMuted] = useState(true);
  const activeSection = pageMap[page];
  const playTone = (pitch) => playSoftTone(muted, pitch);

  return (
    <Layout
      page={page}
      title={activeSection?.title || 'EliasApp'}
      muted={muted}
      onToggleMute={() => setMuted((value) => !value)}
      onBack={() => setPage('home')}
    >
      {page === 'home' && <HomePage onOpen={setPage} />}
      {page === 'garbage' && <GarbagePage playTone={playTone} />}
      {page === 'construction' && <ConstructionPage playTone={playTone} />}
      {page === 'cars' && <CarsPage muted={muted} playTone={playTone} />}
      {page === 'tools' && <ToolsPage />}
      {page === 'spin' && <SpinPage />}
      {page === 'build' && <BuildFixPage playTone={playTone} />}
      {page === 'watch' && <WatchPage />}
      {page === 'play' && <PlayPage playTone={playTone} />}
    </Layout>
  );
}

function HomePage({ onOpen }) {
  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <span className="hero-badge">For Elias</span>
          <h1 id="home-title">EliasApp</h1>
          <h2>Trucks, tools, cars and building fun</h2>
          <p>
            Tap a card to visit a friendly play area. Lift bins, spin wheels, fix toys,
            count trucks, and watch parent-approved videos.
          </p>
        </div>
        <div className="hero-yard" aria-hidden="true">
          <div className="sun" />
          <div className="cloud cloud-one" />
          <div className="cloud cloud-two" />
          <div className="hero-crane">🏗️</div>
          <div className="hero-truck">🚛</div>
          <div className="hero-tools">🪛 🔧</div>
          <div className="road-line" />
        </div>
      </section>

      <section className="home-card-grid" aria-label="Play sections">
        {sections.map((section) => (
          <HomeCard key={section.id} section={section} onOpen={onOpen} />
        ))}
      </section>
    </div>
  );
}

function GarbagePage({ playTone }) {
  const [action, setAction] = useState('parked');
  const [sorted, setSorted] = useState([]);

  function trigger(nextAction) {
    setAction(nextAction);
    playTone(nextAction === 'sort' ? 520 : 420);
  }

  function sortItem(item) {
    setSorted((current) => (current.includes(item) ? current : [...current, item]));
    trigger('sort');
  }

  return (
    <SectionPage
      eyebrow="Garbage day"
      title="Garbage Trucks"
      intro="Lift the bin, tip the load, sort recycling, and send the truck down the street."
      theme="theme-green"
    >
      <div className="play-stage garbage-stage">
        <div className={`garbage-scene ${action}`}>
          <div className="street" />
          <div className="scene-truck">🚛</div>
          <div className="scene-bin">🗑️</div>
          <div className="recycle-sparkle">♻️</div>
          <div className="rubbish-dots" />
        </div>
        <FeedbackBubble>
          {action === 'parked' && 'Ready for a clean street.'}
          {action === 'lift' && 'Up goes the bin!'}
          {action === 'tip' && 'Tip, tip, all tidy.'}
          {action === 'sort' && `Recycling sorted: ${sorted.length}/3`}
          {action === 'drive' && 'The truck is driving away.'}
        </FeedbackBubble>
      </div>

      <div className="action-row">
        <BigButton onClick={() => trigger('lift')} aria-label="Lift the bin">Lift the bin</BigButton>
        <BigButton onClick={() => trigger('tip')} aria-label="Tip the rubbish">Tip rubbish</BigButton>
        <BigButton onClick={() => trigger('sort')} aria-label="Sort recycling">Sort recycling</BigButton>
        <BigButton onClick={() => trigger('drive')} aria-label="Drive away">Drive away</BigButton>
      </div>

      <div className="recycling-game" aria-label="Recycling sorting">
        {['paper', 'glass', 'plastic'].map((item) => (
          <button
            key={item}
            className={`sort-chip ${sorted.includes(item) ? 'done' : ''}`}
            onClick={() => sortItem(item)}
            aria-label={`Sort ${item}`}
          >
            {item === 'paper' ? '📦' : item === 'glass' ? '🥛' : '🧴'} {item}
          </button>
        ))}
      </div>

      <div className="feature-grid">
        {garbageTrucks.map((truck) => (
          <article className="feature-card" key={truck.id}>
            <MediaImage src={truck.image} alt={truck.title} emoji={truck.emoji} />
            <h3>{truck.title}</h3>
            <p>{truck.fact}</p>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}

function ConstructionPage({ playTone }) {
  const [active, setActive] = useState('excavator');

  return (
    <SectionPage
      eyebrow="Construction yard"
      title="Dig, lift, tip and roll"
      intro="Choose a machine and watch it do a gentle pretend job."
      theme="theme-yellow"
    >
      <div className="feature-grid machine-grid">
        {constructionMachines.map((machine) => (
          <MachineCard
            key={machine.id}
            machine={machine}
            active={active === machine.id}
            onActivate={() => {
              setActive(machine.id);
              playTone(360 + machine.title.length * 12);
            }}
          />
        ))}
      </div>
    </SectionPage>
  );
}

function CarsPage({ muted, playTone }) {
  const [wheelGuess, setWheelGuess] = useState('');
  const countVehicle = vehicles.find((vehicle) => vehicle.id === 'fire-truck');

  return (
    <SectionPage
      eyebrow="Vehicle workshop"
      title="Cars & Trucks"
      intro="Honk horns, switch lights, spin wheels, change colours, and count together."
      theme="theme-blue"
    >
      <div className="count-panel">
        <div>
          <span className="panel-emoji" aria-hidden="true">{countVehicle.emoji}</span>
          <h3>Count the wheels</h3>
          <p>How many wheels are on the fire truck?</p>
        </div>
        <div className="action-row compact">
          {[4, 6, 8].map((count) => (
            <BigButton key={count} onClick={() => setWheelGuess(String(count))}>
              {count}
            </BigButton>
          ))}
        </div>
        {wheelGuess && (
          <FeedbackBubble>{wheelGuess === '6' ? 'Yes, six wheels!' : 'Try counting again.'}</FeedbackBubble>
        )}
      </div>
      <div className="feature-grid vehicle-grid">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} muted={muted} playTone={playTone} />
        ))}
      </div>
    </SectionPage>
  );
}

function ToolsPage() {
  const [toolboxOpen, setToolboxOpen] = useState(false);
  const [match, setMatch] = useState('');

  return (
    <SectionPage
      eyebrow="Friendly workshop"
      title="Tools"
      intro="Pretend tools for supervised play: turn a screw, open the toolbox, and fix a toy car."
      theme="theme-orange"
    >
      <div className={`toolbox-panel ${toolboxOpen ? 'open' : ''}`}>
        <button onClick={() => setToolboxOpen((value) => !value)} aria-label="Open or close toolbox">
          <span aria-hidden="true">🧰</span>
          {toolboxOpen ? 'Toolbox open' : 'Open toolbox'}
        </button>
        <div className="toolbox-tools" aria-hidden={!toolboxOpen}>
          {tools.map((tool) => <span key={tool.id}>{tool.emoji}</span>)}
        </div>
      </div>

      <div className="count-panel">
        <div>
          <h3>Match tool to job</h3>
          <p>Which tool turns the pretend screw?</p>
        </div>
        <div className="action-row compact">
          {tools.slice(0, 4).map((tool) => (
            <BigButton key={tool.id} onClick={() => setMatch(tool.id)}>
              {tool.emoji} {tool.title}
            </BigButton>
          ))}
        </div>
        {match && <FeedbackBubble>{match === 'screwdriver' ? 'The screwdriver turns it!' : 'That tool has another job.'}</FeedbackBubble>}
      </div>

      <div className="feature-grid tool-grid">
        {tools.map((tool) => <ToolCard key={tool.id} tool={tool} />)}
      </div>
    </SectionPage>
  );
}

function SpinPage() {
  return (
    <SectionPage
      eyebrow="Round and round"
      title="Things That Spin"
      intro="Tap once to spin. Tap again to stop. Every spinner moves gently."
      theme="theme-purple"
    >
      <div className="feature-grid spinner-grid">
        {spinners.map((spinner) => <InteractiveSpinner key={spinner.id} item={spinner} />)}
      </div>
    </SectionPage>
  );
}

function BuildFixPage({ playTone }) {
  const [object, setObject] = useState(fixObjects[0].id);
  const [tool, setTool] = useState('screwdriver');
  const [fixed, setFixed] = useState(false);
  const selectedObject = fixObjects.find((item) => item.id === object);
  const selectedTool = tools.find((item) => item.id === tool);

  function fixIt() {
    setFixed(true);
    playTone(540);
  }

  return (
    <SectionPage
      eyebrow="Build & Fix"
      title="Fix-it mini game"
      intro="Pick something broken, choose a friendly pretend tool, then press Fix it."
      theme="theme-red"
    >
      <MiniGameShell title="Elias' workshop" emoji="🛠️">
        <div className={`fix-stage ${fixed ? 'is-fixed' : ''}`}>
          <div className="fix-object-art">{selectedObject.emoji}</div>
          <div className="fix-tool-art">{selectedTool.emoji}</div>
          <FeedbackBubble>
            {fixed ? `${selectedObject.done} Great work, Elias!` : `${selectedObject.title} needs a little fix.`}
          </FeedbackBubble>
        </div>

        <div className="chooser-columns">
          <div>
            <h3>Pick something</h3>
            <div className="choice-grid">
              {fixObjects.map((item) => (
                <button
                  key={item.id}
                  className={`choice-card ${object === item.id ? 'selected' : ''}`}
                  onClick={() => {
                    setObject(item.id);
                    setFixed(false);
                  }}
                  aria-label={`Pick ${item.title}`}
                >
                  <span aria-hidden="true">{item.emoji}</span>
                  {item.title}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3>Pick a tool</h3>
            <div className="choice-grid">
              {tools.slice(0, 3).map((item) => (
                <button
                  key={item.id}
                  className={`choice-card ${tool === item.id ? 'selected' : ''}`}
                  onClick={() => {
                    setTool(item.id);
                    setFixed(false);
                  }}
                  aria-label={`Pick ${item.title}`}
                >
                  <span aria-hidden="true">{item.emoji}</span>
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <BigButton onClick={fixIt} aria-label="Fix it">Fix it</BigButton>
      </MiniGameShell>
    </SectionPage>
  );
}

function WatchPage() {
  return (
    <SectionPage
      eyebrow="Parent controlled"
      title="Watch & Learn"
      intro="No autoplay, no random feeds, and no child-facing external links. Add only videos you approve."
      theme="theme-teal"
    >
      <div className="parent-note">Only add videos you have watched and approved.</div>
      <div className="feature-grid video-grid">
        {videos.map((video) => <VideoCard key={video.id} video={video} />)}
      </div>
    </SectionPage>
  );
}

function PlayPage({ playTone }) {
  const [answers, setAnswers] = useState({});
  const [road, setRoad] = useState([]);
  const [recycling, setRecycling] = useState([]);
  const roadPieces = useMemo(() => Array.from({ length: 8 }, (_, index) => index), []);
  const answerGame = (id, answer, correct) => {
    setAnswers((current) => ({ ...current, [id]: answer === correct }));
    playTone(answer === correct ? 520 : 330);
  };

  return (
    <SectionPage
      eyebrow="Play Zone"
      title="Tap games"
      intro="Simple games for matching, counting, sorting, finding, and building."
      theme="theme-pink"
    >
      <div className="feature-grid game-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game}>
            {game.id === 'build-road' && (
              <div className="road-builder">
                {roadPieces.map((piece) => (
                  <button
                    key={piece}
                    className={`road-piece ${road.includes(piece) ? 'placed' : ''}`}
                    onClick={() => setRoad((current) => (current.includes(piece) ? current : [...current, piece]))}
                    aria-label={`Place road piece ${piece + 1}`}
                  />
                ))}
                <FeedbackBubble>{road.length === roadPieces.length ? 'The road is ready!' : `${road.length}/8 road pieces`}</FeedbackBubble>
              </div>
            )}

            {game.id === 'sort-recycling' && (
              <div className="choice-grid">
                {['paper', 'plastic', 'glass'].map((item) => (
                  <button
                    key={item}
                    className={`choice-card ${recycling.includes(item) ? 'selected' : ''}`}
                    onClick={() => setRecycling((current) => (current.includes(item) ? current : [...current, item]))}
                  >
                    {item}
                  </button>
                ))}
                <FeedbackBubble>{recycling.length === 3 ? 'All sorted!' : 'Tap each recycling item.'}</FeedbackBubble>
              </div>
            )}

            {!['build-road', 'sort-recycling'].includes(game.id) && (
              <>
                <div className="choice-grid">
                  {game.choices.map((choice) => (
                    <button
                      key={choice}
                      className="choice-card"
                      onClick={() => answerGame(game.id, choice, game.answer)}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
                {game.id in answers && <FeedbackBubble>{answers[game.id] ? 'You found it!' : 'Try again.'}</FeedbackBubble>}
              </>
            )}
          </GameCard>
        ))}
      </div>
    </SectionPage>
  );
}
