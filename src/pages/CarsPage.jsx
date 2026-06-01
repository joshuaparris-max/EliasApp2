import VehicleCard from '../components/VehicleCard.jsx';
import AppCard from '../components/AppCard.jsx';
import vehicles from '../data/vehicles.js';

function CarsPage({ soundPlayer, muted }) {
  return (
    <div className="page section-page">
      <section className="page-hero">
        <h1>Cars & Trucks</h1>
        <p>Tap headlights, honk horns, and count the wheels on friendly vehicles.</p>
      </section>
      <AppCard
        title="Vehicle fun"
        text="Big, bright cards with easy actions and safe sounds."
        icon="🚗"
      />
      <div className="vehicle-grid">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} soundPlayer={soundPlayer} muted={muted} />
        ))}
      </div>
    </div>
  );
}

export default CarsPage;
