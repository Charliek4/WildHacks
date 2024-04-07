import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './ChicagoMap.css';

// Create a custom marker icon instance
const customIcon = new L.Icon({
  iconUrl: 'https://fonts.gstatic.com/s/i/materialicons/location_on/v10/24px.svg', // URL of Google Material icon
  iconSize: [24, 24], // Icon size
  iconAnchor: [12, 24], // Icon anchor point
});

function ChicagoMap() {
  
  const positions = [
    {'lat': 41.85182, 'lng': -87.745336, 'name': 'Cicero (Pink Line)'} ,


{'lat': 41.853839, 'lng': -87.714842, 'name': 'Central Park (Pink Line)'} ,


{'lat': 41.778943, 'lng': -87.644244, 'name': 'Halsted (Green Line)'} ,


{'lat': 41.984246, 'lng': -87.838028, 'name': 'Cumberland (Blue Line)'} ,


{'lat': 41.87592, 'lng': -87.659458, 'name': 'Racine (Blue Line)'} ,


{'lat': 41.943623, 'lng': -87.670907, 'name': 'Paulina (Brown Line)'} ,


{'lat': 41.857908, 'lng': -87.669147, 'name': '18th (Pink Line)'} ,


{'lat': 41.885737, 'lng': -87.630886, 'name': 'Clark/Lake (Blue, Brown, Green, Orange, Purple & Pink lines)'} ,


{'lat': 41.970634, 'lng': -87.760892, 'name': 'Jefferson Park (Blue Line)'} ,


{'lat': 41.932732, 'lng': -87.653131, 'name': 'Diversey (Brown & Purple lines)'} ,


{'lat': 41.961756, 'lng': -87.675047, 'name': 'Montrose (Brown Line)'} ,


{'lat': 41.875474, 'lng': -87.649707, 'name': 'UIC-Halsted (Blue Line)'} ,


{'lat': 41.831677, 'lng': -87.625826, 'name': '35th-Bronzeville-IIT (Green Line)'} ,


{'lat': 42.05416, 'lng': -87.68356, 'name': 'Foster (Purple Line)'} ,


{'lat': 41.878723, 'lng': -87.63374, 'name': 'Quincy/Wells (Brown, Orange, Purple & Pink lines)'} ,


{'lat': 41.943744, 'lng': -87.663619, 'name': 'Southport (Brown Line)'} ,


{'lat': 42.001073, 'lng': -87.661061, 'name': 'Loyola (Red Line)'} ,


{'lat': 41.810318, 'lng': -87.63094, 'name': '47th (Red Line)'} ,


{'lat': 41.983504, 'lng': -87.65884, 'name': 'Bryn Mawr (Red Line)'} ,


{'lat': 41.87349, 'lng': -87.806961, 'name': 'Harlem (Blue Line - Forest Park Branch)'} ,


{'lat': 42.019063, 'lng': -87.672892, 'name': 'Howard (Red, Purple & Yellow lines)'} ,


{'lat': 41.884321, 'lng': -87.706155, 'name': 'Kedzie (Green Line)'} ,


{'lat': 41.78013, 'lng': -87.615546, 'name': 'King Drive (Green Line)'} ,


{'lat': 41.77886, 'lng': -87.663766, 'name': 'Ashland/63rd (Green Line)'} ,


{'lat': 41.722377, 'lng': -87.624342, 'name': '95th/Dan Ryan (Red Line)'} ,


{'lat': 41.916157, 'lng': -87.687364, 'name': "Western (Blue Line - O'Hare Branch)"} ,


{'lat': 41.918217, 'lng': -87.652644, 'name': 'Armitage (Brown & Purple lines)'} ,


{'lat': 41.867368, 'lng': -87.627402, 'name': 'Roosevelt (Red, Orange & Green lines)'} ,


{'lat': 41.939751, 'lng': -87.65338, 'name': 'Belmont (Red, Brown & Purple lines)'} ,


{'lat': 41.85177331, 'lng': -87.75669201, 'name': '54th/Cermak (Pink Line)'} ,


{'lat': 42.041655, 'lng': -87.681602, 'name': 'Dempster (Purple Line)'} ,


{'lat': 41.925051, 'lng': -87.652866, 'name': 'Fullerton (Red, Brown & Purple lines)'} ,


{'lat': 41.969139, 'lng': -87.658493, 'name': 'Lawrence (Red Line)'} ,


{'lat': 41.875706, 'lng': -87.673932, 'name': 'Illinois Medical District (Blue Line)'} ,


{'lat': 41.884809, 'lng': -87.627813, 'name': 'Lake (Red Line)'} ,


{'lat': 41.750419, 'lng': -87.625112, 'name': '79th (Red Line)'} ,


{'lat': 41.887293, 'lng': -87.774135, 'name': 'Austin (Green Line)'} ,


{'lat': 41.875539, 'lng': -87.640984, 'name': 'Clinton (Blue Line)'} ,


{'lat': 41.936033, 'lng': -87.653266, 'name': 'Wellington (Brown & Purple lines)'} ,


{'lat': 41.886988, 'lng': -87.793783, 'name': 'Oak Park (Green Line)'} ,


{'lat': 41.896671, 'lng': -87.628176, 'name': 'Chicago (Red Line)'} ,


{'lat': 41.910409, 'lng': -87.639302, 'name': 'Sedgwick (Brown & Purple lines)'} ,


{'lat': 41.94738, 'lng': -87.71906, 'name': 'Addison (Blue Line)'} ,


{'lat': 41.878183, 'lng': -87.629296, 'name': 'Jackson (Blue Line)'} ,


{'lat': 41.853964, 'lng': -87.705408, 'name': 'Kedzie (Pink Line)'} ,


{'lat': 41.880703, 'lng': -87.629378, 'name': 'Monroe (Blue Line)'} ,


{'lat': 41.966115, 'lng': -87.6941, 'name': 'Rockwell (Brown Line)'} ,


{'lat': 41.854517, 'lng': -87.675975, 'name': 'Damen (Pink Line)'} ,


{'lat': 41.873797, 'lng': -87.725663, 'name': 'Pulaski (Blue Line)'} ,


{'lat': 41.886848, 'lng': -87.803176, 'name': 'Harlem/Lake (Green Line)'} ,


{'lat': 41.88322, 'lng': -87.626189, 'name': 'Washington/Wabash (Brown, Green, Orange, Purple & Pink lines)'} ,


{'lat': 41.88422, 'lng': -87.696234, 'name': 'California (Green Line)'} ,


{'lat': 42.008362, 'lng': -87.665909, 'name': 'Morse (Red Line)'} ,


{'lat': 41.804546, 'lng': -87.684019, 'name': 'Western (Orange Line)'} ,


{'lat': 41.891189, 'lng': -87.647578, 'name': 'Grand (Blue Line)'} ,


{'lat': 41.903355, 'lng': -87.666496, 'name': 'Division (Blue Line)'} ,


{'lat': 41.799756, 'lng': -87.724493, 'name': 'Pulaski (Orange Line)'} ,


{'lat': 41.953775, 'lng': -87.654929, 'name': 'Sheridan (Red Line)'} ,


{'lat': 41.896075, 'lng': -87.655214, 'name': 'Chicago (Blue Line)'} ,


{'lat': 41.888969, 'lng': -87.633924, 'name': 'Merchandise Mart (Brown & Purple lines)'} ,


{'lat': 41.97766526, 'lng': -87.90422307, 'name': "O'Hare (Blue Line)"} ,


{'lat': 41.816462, 'lng': -87.619021, 'name': '43rd (Green Line)'} ,


{'lat': 41.831191, 'lng': -87.630636, 'name': 'Sox-35th (Red Line)'} ,


{'lat': 41.929728, 'lng': -87.708541, 'name': 'Logan Square (Blue Line)'} ,


{'lat': 41.909744, 'lng': -87.677437, 'name': 'Damen (Blue Line)'} ,


{'lat': 41.885269, 'lng': -87.666969, 'name': 'Ashland (Green & Pink lines)'} ,


{'lat': 41.952925, 'lng': -87.729229, 'name': 'Irving Park (Blue Line)'} ,


{'lat': 41.964273, 'lng': -87.657588, 'name': 'Wilson (Red & Purple lines)'} ,


{'lat': 41.853206, 'lng': -87.630968, 'name': 'Cermak-Chinatown (Red Line)'} ,


{'lat': 41.875568, 'lng': -87.631722, 'name': 'LaSalle (Blue Line)'} ,


{'lat': 41.990259, 'lng': -87.659076, 'name': 'Thorndale (Red Line)'} ,


{'lat': 41.993664, 'lng': -87.659202, 'name': 'Granville (Red Line)'} ,


{'lat': 41.947428, 'lng': -87.653626, 'name': 'Addison (Red Line)'} ,


{'lat': 41.887389, 'lng': -87.76565, 'name': 'Central (Green Line)'} ,


{'lat': 41.884904, 'lng': -87.716523, 'name': 'Conservatory (Green Line)'} ,


{'lat': 42.058282, 'lng': -87.683337, 'name': 'Noyes (Purple Line)'} ,


{'lat': 41.809209, 'lng': -87.618826, 'name': '47th (Green Line)'} ,


{'lat': 42.015876, 'lng': -87.669092, 'name': 'Jarvis (Red Line)'} ,


{'lat': 41.84678, 'lng': -87.648088, 'name': 'Halsted (Orange Line)'} ,


{'lat': 42.04771, 'lng': -87.683543, 'name': 'Davis (Purple Line)'} ,


{'lat': 41.89681, 'lng': -87.635924, 'name': 'Chicago (Brown & Purple lines)'} ,


{'lat': 41.880745, 'lng': -87.627696, 'name': 'Monroe (Red Line)'} ,


{'lat': 41.965996, 'lng': -87.708821, 'name': 'Kedzie (Brown Line)'} ,


{'lat': 41.80209, 'lng': -87.618487, 'name': '51st (Green Line)'} ,


{'lat': 41.795172, 'lng': -87.618327, 'name': 'Garfield (Green Line)'} ,


{'lat': 41.839234, 'lng': -87.665317, 'name': 'Ashland (Orange Line)'} ,


{'lat': 41.891665, 'lng': -87.628021, 'name': 'Grand (Red Line)'} ,


{'lat': 41.853115, 'lng': -87.626402, 'name': 'Cermak-McCormick Place (Green Line)'} ,


{'lat': 41.871551, 'lng': -87.66953, 'name': 'Polk (Pink Line)'} ,


{'lat': 41.966286, 'lng': -87.678639, 'name': 'Damen (Brown Line)'} ,


{'lat': 41.853732, 'lng': -87.724311, 'name': 'Pulaski (Pink Line)'} ,


{'lat': 41.829353, 'lng': -87.680622, 'name': '35th/Archer (Orange Line)'} ,


{'lat': 42.027612, 'lng': -87.678329, 'name': 'South Boulevard (Purple Line)'} ,


{'lat': 42.033456, 'lng': -87.679538, 'name': 'Main (Purple Line)'} ,


{'lat': 41.878153, 'lng': -87.627596, 'name': 'Jackson (Red Line)'} ,


{'lat': 41.973453, 'lng': -87.65853, 'name': 'Argyle (Red Line)'} ,


{'lat': 41.876862, 'lng': -87.628196, 'name': 'Harold Washington Library-State/Van Buren (Brown, Orange, Purple & Pink lines)'} ,


{'lat': 41.870851, 'lng': -87.776812, 'name': 'Austin (Blue Line)'} ,


{'lat': 41.883164, 'lng': -87.62944, 'name': 'Washington (Blue Line)'} ,


{'lat': 41.874341, 'lng': -87.70604, 'name': 'Kedzie-Homan (Blue Line)'} ,


{'lat': 41.780536, 'lng': -87.630952, 'name': '63rd (Red Line)'} ,


{'lat': 41.804236, 'lng': -87.704406, 'name': 'Kedzie (Orange Line)'} ,


{'lat': 41.887163, 'lng': -87.754986, 'name': 'Laramie (Green Line)'} ,


{'lat': 41.735372, 'lng': -87.624717, 'name': '87th (Red Line)'} ,


{'lat': 41.875478, 'lng': -87.688436, 'name': 'Western (Blue Line - Forest Park Branch)'} ,


{'lat': 41.966163, 'lng': -87.688502, 'name': 'Western (Brown Line)'} ,


{'lat': 41.921939, 'lng': -87.69689, 'name': 'California (Blue Line)'} ,


{'lat': 41.874257, 'lng': -87.817318, 'name': 'Forest Park (Blue Line)'} ,


{'lat': 41.983507, 'lng': -87.859388, 'name': 'Rosemont (Blue Line)'} ,


{'lat': 41.879507, 'lng': -87.626037, 'name': 'Adams/Wabash (Brown, Green, Orange, Pink & Purple lines)'} ,


{'lat': 41.977984, 'lng': -87.658668, 'name': 'Berwyn (Red Line)'} ,


{'lat': 41.98227, 'lng': -87.8089, 'name': "Harlem (Blue Line - O'Hare Branch)"} ,


{'lat': 41.938132, 'lng': -87.712359, 'name': 'Belmont (Blue Line)'} ,


{'lat': 41.90392, 'lng': -87.631412, 'name': 'Clark/Division (Red Line)'} ,


{'lat': 41.821732, 'lng': -87.621371, 'name': 'Indiana (Green Line)'} ,


{'lat': 41.853751, 'lng': -87.733258, 'name': 'Kostner (Pink Line)'} ,


{'lat': 42.038951, 'lng': -87.751919, 'name': 'Dempster-Skokie  (Yellow Line)'} ,


{'lat': 41.885586, 'lng': -87.652193, 'name': 'Morgan (Green & Pink lines)'} ,


{'lat': 41.871574, 'lng': -87.745154, 'name': 'Cicero (Blue Line)'} ,


{'lat': 42.02624348, 'lng': -87.74722084, 'name': 'Oakton-Skokie (Yellow Line)'} ,


{'lat': 41.780309, 'lng': -87.605857, 'name': 'Cottage Grove (Green Line)'} ,


{'lat': 41.78661, 'lng': -87.737875, 'name': 'Midway (Orange Line)'} ,


{'lat': 42.063987, 'lng': -87.685617, 'name': 'Central (Purple Line)'} ,


{'lat': 41.885412, 'lng': -87.725404, 'name': 'Pulaski (Green Line)'} ,


{'lat': 41.887159, 'lng': -87.783661, 'name': 'Ridgeland (Green Line)'} ,


{'lat': 42.073153, 'lng': -87.69073, 'name': 'Linden (Purple Line)'} ,


{'lat': 41.79542, 'lng': -87.631157, 'name': 'Garfield (Red Line)'} ,


{'lat': 41.910655, 'lng': -87.649177, 'name': 'North/Clybourn (Red Line)'} ,


{'lat': 41.872108, 'lng': -87.791602, 'name': 'Oak Park (Blue Line)'} ,


{'lat': 41.954521, 'lng': -87.674868, 'name': 'Irving Park (Brown Line)'} ,


{'lat': 41.867405, 'lng': -87.62659, 'name': 'Roosevelt (Red, Orange & Green lines)'} ,


{'lat': 41.966046, 'lng': -87.701644, 'name': 'Francisco (Brown Line)'} ,


{'lat': 41.8768, 'lng': -87.631739, 'name': 'LaSalle/Van Buren (Brown, Orange, Purple & Pink lines)'} ,


{'lat': 41.854109, 'lng': -87.694774, 'name': 'California (Pink Line)'} ,


{'lat': 41.854225, 'lng': -87.685129, 'name': 'Western (Pink Line)'} ,


{'lat': 41.768367, 'lng': -87.625724, 'name': '69th (Red Line)'} ,


{'lat': 41.882695, 'lng': -87.63378, 'name': 'Washington/Wells (Brown, Orange, Purple & Pink lines)'} ,


{'lat': 41.874039, 'lng': -87.627479, 'name': 'Harrison (Red Line)'} ,


{'lat': 41.885678, 'lng': -87.641782, 'name': 'Clinton (Green & Pink lines)'} ,


{'lat': 41.967901, 'lng': -87.713065, 'name': 'Kimball (Brown Line)'} ,


{'lat': 41.947028, 'lng': -87.674642, 'name': 'Addison (Brown Line)'} ,


{'lat': 41.921939, 'lng': -87.69689, 'name': 'California  (Blue Line)'} ,


{'lat': 41.88574, 'lng': -87.627835, 'name': 'State/Lake (Brown, Green, Orange, Pink & Purple lines)'} ,


{'lat': 41.886519, 'lng': -87.744698, 'name': 'Cicero (Green Line)'} ,


{'lat': 41.961539, 'lng': -87.743574, 'name': 'Montrose (Blue Line)'} 
  ];

  const [selectedColor, setSelectedColor] = React.useState('all');

  const colors = ['all','red', 'blue', 'green', 'pink', 'purple', 'brown', 'orange', 'yellow'];

  const dropdown = (
    <select className = "my-dropdown" onChange={(e) => setSelectedColor(e.target.value)}>
      {colors.map((color) => (
        <option key={color} value={color}>
          {color}
        </option>
      ))}
    </select>
  );

  const filteredPositions = selectedColor === 'all'
    ? positions
    : positions.filter(position => position.name.toLowerCase().includes(selectedColor))

  return (
    
    <div style={{ width: '100%', height: '100vh' }}>
      {dropdown}
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

        {filteredPositions.map((pos, index) => (
          <Marker key={index} position={[pos.lat, pos.lng]} icon={customIcon}>
            <Popup>
              {pos.name} {/* Display station name */}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default ChicagoMap;
