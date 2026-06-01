import ToolCard from '../components/ToolCard.jsx';
import AppCard from '../components/AppCard.jsx';
import tools from '../data/tools.js';

function ToolsPage() {
  return (
    <div className="page section-page">
      <section className="page-hero">
        <h1>Tools</h1>
        <p>Tap the tool cards to pretend to fix, turn, and build with safe actions.</p>
      </section>
      <AppCard
        title="Fix and build"
        text="Simple tool play helps learn what each tool does."
        icon="🧰"
      />
      <div className="tool-grid">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export default ToolsPage;
