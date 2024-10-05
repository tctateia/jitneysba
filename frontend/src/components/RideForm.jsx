import React, { useState } from 'react';

const RideForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    passengerName: '',
    rideDate: '',
  });

  // Update state when user types in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (sending the data to the backend)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Ride booked!\nPickup: ${formData.pickupLocation}\nDrop-off: ${formData.dropoffLocation}`);
    
    // Here you would send the formData to your backend API
    // Example:
    // fetch('/api/rides', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    //   .then(response => response.json())
    //   .then(data => console.log('Ride booked successfully:', data))
    //   .catch(error => console.error('Error booking ride:', error));
  };

  return (
    <div>
      <h1>Book a Ride</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="passengerName">Passenger Name:</label>
          <input
            type="text"
            id="passengerName"
            name="passengerName"
            value={formData.passengerName}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="pickupLocation">Pickup Location:</label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="Enter pickup location"
            required
          />
        </div>
        <div>
          <label htmlFor="dropoffLocation">Drop-off Location:</label>
          <input
            type="text"
            id="dropoffLocation"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleChange}
            placeholder="Enter drop-off location"
            required
          />
        </div>
        <div>
          <label htmlFor="rideDate">Ride Date & Time:</label>
          <input
            type="datetime-local"
            id="rideDate"
            name="rideDate"
            value={formData.rideDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Book Ride</button>
      </form>
    </div>
  );
};

export default RideForm;
