import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import RideForm from './components/RideForm';
import DriverSignUp from './components/DriverSignUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VehicleSelection from './components/VehicleSelection';
function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navigation links will be here */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/rides" element={<RideForm />} />
         < Route path="/Rides/:vehicleType" element={<RideForm />} />  {/* Rides page with vehicle type */}
          <Route path="/driver" element={<DriverSignUp />} />
          <Route path="/Vehicles" element={<VehicleSelection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
