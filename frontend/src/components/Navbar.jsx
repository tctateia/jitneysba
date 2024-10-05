import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li> {/* Link to Welcome Page */}
        <li><Link to="/Vehicles">VehicleSelection</Link></li> {/* Link to VehicleSelection Page */}
        <li><Link to="/rides">All Rides</Link></li> {/* Link to All Rides Page */}
        <li><Link to="/driver">Driver Sign-Up</Link></li> {/* Link to Driver Sign-Up Page */}
       
      </ul>
    </nav>
  );
};

export default Navbar;
