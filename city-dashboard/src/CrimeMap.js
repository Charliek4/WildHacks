import React from 'react';
import ChicagoMap from './components/ChicagoMap';
import Navbar from './components/Navbar';
import './App.css';
import './styles/navbar.css';

function CrimeMap() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="map-section">
        <ChicagoMap />
      </div>
      {/* Other sections of your dashboard go here */}
    </div>
  );
}

export default CrimeMap;