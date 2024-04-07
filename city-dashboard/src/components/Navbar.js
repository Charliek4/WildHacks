import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
     <h1>Plan ***Chicago***</h1>
      <ul className="nav-items">
        <li><button onClick={() => window.location.href="/pages/CrimeMap.html"}>Crime Map</button></li>
        <li><button onClick={() => window.location.href="/pages/TransitOutages.html"}>Transit Outages</button></li>
        <li><button onClick={() => window.location.href="/pages/ReportIssue.html"}>Report An Issue</button></li>
        {/* Add more navigation items here */}
      </ul>
    </nav>
  );
}

export default Navbar;