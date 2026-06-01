import { useMemo, useState } from 'react';
import Layout from './components/Layout.jsx';
import HomeCard from './components/HomeCard.jsx';
import SectionHeader from './components/SectionHeader.jsx';
import InteractiveMachine from './components/InteractiveMachine.jsx';
import InteractiveSpinner from './components/InteractiveSpinner.jsx';
import VehicleCard from './components/VehicleCard.jsx';
import ToolCard from './components/ToolCard.jsx';
import VideoCard from './components/VideoCard.jsx';
import MiniGameShell from './components/MiniGameShell.jsx';
import BigButton from './components/BigButton.jsx';
import FeedbackBubble from './components/FeedbackBubble.jsx';
import {
  sections,
  garbageTrucks,
  constructionMachines,
  vehicles,
  tools,
  spinners,
  videos,
  games,
  fixObjects,
} from './data/index.js';

const sectionById = Object.fromEntries(sections.map((section) => [section.id, section]));
const buildMatches = {
  'toy-car': 'screwdriver',
  'garbage-truck': 'hammer',
  'block-tower': 'spanner',
  toolbox: 'tape-measure',
};

function playSoftTone(muted) {
  if (muted || typeof window === 'undefined') return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = 'triangle';
  oscillator.frequency.value = 420;
  gain.gain.setValueAtTime(0.005, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.3);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.35);
}

export default function App() {
  const [page, setPage] = useState('home');
  const [muted, setMuted] = useState(true);

  const soundPlayer = useMemo(
    () => ({
      play: () => {
        playSoftTone(muted);
      },
    }),
    [muted],
  );

  const title = page === 'home' ? 'EliasApp' : sectionById[page]?.title;

  return (
    <Layout
      title={title}
      subtitle="Trucks, tools, cars and building fun"
      muted={muted}
      onToggleMute={() => setMuted((value) => !value)}
    >
      {page === 'home' && <HomePage onOpen={setPage} />}
      {page === 'garbage' && <GarbagePage onBack={() => setPage('home')} playTone={soundPlayer.play} />}
      {page === 'construction' && <ConstructionPage onBack={() => setPage('home')} playTone={soundPlayer.play} />}
      {page === 'cars' && <CarsPage onBack={() => setPage('home')} muted={muted} playTone={soundPlayer.play} />}
      {page === 'tools' && <ToolsPage onBack={() => setPage('home')} />}
      {page === 'spin' && <SpinPage onBack={() => setPage('home')} />}
      {page === 'build' && <BuildFixPage onBack={() => setPage('home')} />}
      {page === 'watch' && <WatchPage onBack={() => setPage('home')} />}
      {page === 'play' && <PlayPage onBack={() => setPage('home')} soundPlayer={soundPlayer} muted={muted} />}
    </Layout>
  );
}

function HomePage({ onOpen }) {
  return (
    <section className="home-page">
      <div className="home-intro">
        <p>Welcome to Elias&apos; workshop world. Tap a bright card and start exploring trucks, tools, and building play.</p>
      </div>
      <div className="home-grid">
        {sections.map((section) => (
          <HomeCard key={section.id} section={section} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

function GarbagePage({ onBack, playTone }) {
  return (
    <section className="section-page">
      <SectionHeader
        icon="🚛"
        title="Garbage Trucks"
        description="Lift bins, tip rubbish, and sort recycling with friendly trucks."
        onBack={onBack}
      />
      <div className="section-note">Tap each truck to make it work and hear the playful actions.</div>
      <div className="machine-grid">
        {garbageTrucks.map((truck) => (
          <InteractiveMachine key={truck.id} machine={truck} onAction={playTone} />
        ))}
      </div>
    </section>
  );
}

function ConstructionPage({ onBack, playTone }) {
  return (
    <section className="section-page">
      <SectionHeader
        icon="🏗️"
        title="Construction"
        description="Dig, lift, tip, mix, and flatten with playful building machines."
        onBack={onBack}
      />
      <div className="section-note">Tap a machine to see it move and feel the construction world.</div>
      <div className="machine-grid">
        {constructionMachines.map((machine) => (
          <InteractiveMachine key={machine.id} machine={machine} onAction={playTone} />
        ))}
      </div>
    </section>
  );
}

function CarsPage({ onBack, muted, playTone }) {
  return (
    <section className="section-page">
      <SectionHeader
        icon="🚗"
        title="Cars & Trucks"
        description="Tap horns, headlights, and wheels on happy vehicles."
        onBack={onBack}
      />
      <div className="section-note">Tap to honk, light up, and spin wheels with calm interaction.</div>
      <div className="card-grid">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} muted={muted} playTone={playTone} />
        ))}
      </div>
    </section>
  );
}

function ToolsPage({ onBack }) {
  const [matchResult, setMatchResult] = useState('');

  return (
    <section className="section-page">
      <SectionHeader
        icon="🧰"
        title="Tools"
        description="Turn screws, tap nails, and fix toys with gentle tool play."
        onBack={onBack}
      />
      <div className="match-panel">
        <h3>Match the tool to the job</h3>
        <p>Which tool turns the screw?</p>
        <div className="button-grid">
          {tools.slice(0, 4).map((tool) => (
            <BigButton
              key={tool.id}
              onClick={() => setMatchResult(tool.id === 'screwdriver' ? 'Great choice!' : 'Try another tool!')}
            >
              {tool.emoji} {tool.name}
            </BigButton>
          ))}
        </div>
        {matchResult && <FeedbackBubble message={matchResult} />}
      </div>
      <div className="tool-grid">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}

function SpinPage({ onBack }) {
  return (
    <section className="section-page">
      <SectionHeader
        icon="⚙️"
        title="Things That Spin"
        description="Tap spinners and watch them turn slowly or fast."
        onBack={onBack}
      />
      <div className="section-note">Double-tap to speed up, tap again to stop.</div>
      <div className="spinner-grid">
        {spinners.map((item) => (
          <InteractiveSpinner key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function BuildFixPage({ onBack }) {
  const [selectedObject, setSelectedObject] = useState(fixObjects[0].id);
  const [selectedTool, setSelectedTool] = useState(tools[0].id);
  const [resultMessage, setResultMessage] = useState('');
  const objectItem = fixObjects.find((item) => item.id === selectedObject);

  const handleFix = () => {
    const correctTool = buildMatches[selectedObject];
    if (selectedTool === correctTool) {
      setResultMessage(`Great work, Elias! You fixed the ${objectItem.name} and it is ready.`);
    } else {
      setResultMessage('Try a different tool to fix it.');
    }
  };

  return (
    <section className="section-page">
      <SectionHeader
        icon="🛠️"
        title="Build & Fix"
        description="Choose a broken toy and the right tool to fix it."
        onBack={onBack}
      />
      <div className="fix-workshop">
        <div className="fix-preview">
          <div className="fix-preview-art" aria-hidden="true">
            {objectItem.emoji}
          </div>
          <div>
            <p>{objectItem.description}</p>
            <small>Selected tool: {tools.find((item) => item.id === selectedTool)?.name}</small>
          </div>
        </div>
        <div className="fix-grid">
          <div>
            <h3>Pick something</h3>
            <div className="button-grid">
              {fixObjects.map((item) => (
                <BigButton
                  key={item.id}
                  className={selectedObject === item.id ? 'active' : ''}
                  onClick={() => {
                    setSelectedObject(item.id);
                    setResultMessage('');
                  }}
                >
                  {item.emoji} {item.name}
                </BigButton>
              ))}
            </div>
          </div>
          <div>
            <h3>Pick a tool</h3>
            <div className="button-grid">
              {tools.slice(0, 4).map((item) => (
                <BigButton
                  key={item.id}
                  className={selectedTool === item.id ? 'active' : ''}
                  onClick={() => {
                    setSelectedTool(item.id);
                    setResultMessage('');
                  }}
                >
                  {item.emoji} {item.name}
                </BigButton>
              ))}
            </div>
          </div>
        </div>
        <div className="fix-action-row">
          <BigButton onClick={handleFix}>Fix it</BigButton>
          {resultMessage && <FeedbackBubble message={resultMessage} />}
        </div>
      </div>
    </section>
  );
}

function WatchPage({ onBack }) {
  return (
    <section className="section-page">
      <SectionHeader
        icon="🎬"
        title="Watch & Learn"
        description="Parent-approved videos only, no autoplay or random feeds."
        onBack={onBack}
      />
      <div className="parent-note">Only add videos that have been watched and approved by a parent.</div>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}

function PlayPage({ onBack, soundPlayer, muted }) {
  return (
    <section className="section-page">
      <SectionHeader
        icon="🎲"
        title="Play Zone"
        description="Count wheels, match tools, and build a happy road."
        onBack={onBack}
      />
      <div className="section-note">Simple tap games with gentle feedback and bright cards.</div>
      <MiniGameShell games={games} soundPlayer={soundPlayer} muted={muted} />
    </section>
  );
}
