import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this line to import useNavigate
import './VehicleSelection.css'; 

const VehicleSelection = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  // Handle vehicle selection change
  const handleVehicleChange = (e) => {
    setSelectedVehicle(e.target.value); // Update selected vehicle type
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (selectedVehicle) {
      alert('Thank you for choosing Jitney. Next, please enter your ride information.'); // Show alert
      navigate(`/Rides/${selectedVehicle}`); 
    } else {
      alert('Please select a vehicle type.');
    }
  };

  return (
    <div className="vehicle-selection-container">
      <h1>Select Your Vehicle Type</h1>
      <form onSubmit={handleSubmit}>
        <div className="vehicle-selection">
          <label>
            <input
              type="radio"
              name="vehicle"
              value="Hi-End Luxury"
              onChange={handleVehicleChange}
            />
            <span>Hi-End Luxury Vehicle</span>
            <img
              src="https://pictures.dealer.com/j/jaguarcary/0101/6ea480b3e3c0aa6f42e341800c327cb5x.jpg"
              alt="Hi-End Luxury Vehicle"
            />
          </label>
        </div>

        <div className="vehicle-selection">
          <label>
            <input
              type="radio"
              name="vehicle"
              value="Luxury"
              onChange={handleVehicleChange}
            />
            <span>Luxury Vehicle</span>
            <img
              src="https://www.masterliveryservices.com/wp-content/uploads/2021/06/Birmingham-car-service.png"
              alt="Luxury Vehicle"
            />
          </label>
        </div>

        <div className="vehicle-selection">
          <label>
            <input
              type="radio"
              name="vehicle"
              value="Standard"
              onChange={handleVehicleChange}
            />
            <span>Standard Vehicle</span>
            <img
              src="https://img2.carmax.com/assets/25776548/hero.jpg"
              alt="Standard Vehicle"
            />
          </label>
        </div>

        <div className="vehicle-selection">
          <label>
            <input
              type="radio"
              name="vehicle"
              value="Trucking"
              onChange={handleVehicleChange}
            />
            <span>Trucking Routes </span>
            <img
              src="https://marvel-b1-cdn.bc0a.com/f00000000295579/www.tecequipment.com/app/uploads/2020/10/Volvo-Semi-Truck-900x436.jpg"
              alt="Trucking Vehicle"
            />
          </label>
        </div>

        <button type="submit">Submit Selection</button>
      </form>
    </div>
  );
};

export default VehicleSelection;
