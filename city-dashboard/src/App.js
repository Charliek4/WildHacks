import React from 'react';
import ChicagoMap from './components/ChicagoMap';

function App() {
  return (
    <div className="dashboard">
      <div className="map-section">
        <ChicagoMap />
      </div>
      {/* Other sections of your dashboard go here */}
    </div>
  );
}

export default App;
