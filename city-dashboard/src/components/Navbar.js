import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
     <h1>My Dashboard</h1>
      <ul className="nav-items">
        <li><a href="#section1">Section 1</a></li>
        <li><a href="#section2">Section 2</a></li>
        <li><a href="#section3">Section 3</a></li>
        {/* Add more navigation items here */}
      </ul>
    </nav>
  );
}

export default Navbar;