import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function ChicagoMap() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <MapContainer
        center={[41.8781, -87.6298]} // Chicago coordinates
        zoom={12} // Adjust the zoom level as needed
        scrollWheelZoom={false} // Disable scroll wheel zoom
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default ChicagoMap;