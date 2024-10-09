import React, { useState, useEffect } from 'react';

const RideForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    passengerName: '',
    rideDate: '',
  });
  const [addresses, setAddresses] = useState([]);
  const [rides, setRides] = useState([]); // Local array to store rides
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(null);

  // Local array of addresses with mileage between locations
  const addressList = [
    { id: 1, name: '123 Main St, Springfield', mileageToDropoff: { 2: 5, 3: 10, 4: 15, 5: 20 } },
    { id: 2, name: '456 Elm St, Shelbyville', mileageToDropoff: { 1: 5, 3: 8, 4: 12, 5: 18 } },
    { id: 3, name: '789 Oak St, Capital City', mileageToDropoff: { 1: 10, 2: 8, 4: 7, 5: 25 } },
    { id: 4, name: '101 Maple St, Westfield', mileageToDropoff: { 1: 15, 2: 12, 3: 7, 5: 30 } },
    { id: 5, name: '202 Birch Ave, Riverdale', mileageToDropoff: { 1: 20, 2: 18, 3: 25, 4: 30 } },
    { id: 6, name: '303 Pine Blvd, Oakton', mileageToDropoff: { 1: 22, 2: 17, 3: 19, 4: 21, 5: 29 } },
    { id: 7, name: '404 Cedar St, Greenwood', mileageToDropoff: { 1: 30, 2: 27, 3: 35, 4: 38, 5: 42, 6: 20 } },
  ];

  const PRICE_PER_MILE = 2.5; // Updated price per mile

  // Simulated fetching of addresses
  const fetchAddresses = async () => {
    try {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAddresses(addressList);
    } catch (error) {
      console.error('Error fetching addresses:', error);
      setError('Failed to load addresses.');
    }
  };

  useEffect(() => {
    fetchAddresses(); // Fetch addresses on component mount
  }, []);

  // Update form data and recalculate price when pickup and drop-off locations change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'pickupLocation' || name === 'dropoffLocation') {
      calculatePrice(value, name);
    }
  };

  // Calculate price based on mileage between pickup and drop-off locations
  const calculatePrice = (value, field) => {
    const pickupId = field === 'pickupLocation' ? value : formData.pickupLocation;
    const dropoffId = field === 'dropoffLocation' ? value : formData.dropoffLocation;

    if (pickupId && dropoffId) {
      const pickupLocation = addresses.find((addr) => addr.id === parseInt(pickupId));
      const mileage = pickupLocation?.mileageToDropoff[parseInt(dropoffId)];

      if (mileage) {
        const calculatedPrice = mileage * PRICE_PER_MILE;
        setPrice(calculatedPrice);
      } else {
        setPrice(0);
      }
    }
  };

  // Handle form submission to create a new ride
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.pickupLocation || !formData.dropoffLocation || !formData.passengerName || !formData.rideDate) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    const newRide = {
      id: rides.length + 1, // Create a new unique id for the ride
      pickupLocation: formData.pickupLocation,
      dropoffLocation: formData.dropoffLocation,
      passengerName: formData.passengerName,
      rideDate: formData.rideDate,
      price: price,
    };

    // Add the new ride to the local state array
    setRides([...rides, newRide]);
    alert(`Ride booked successfully!\nPassenger: ${formData.passengerName}\nPickup: ${formData.pickupLocation}\nDrop-off: ${formData.dropoffLocation}\nPrice: $${price.toFixed(2)}`);

    // Reset form
    setFormData({
      pickupLocation: '',
      dropoffLocation: '',
      passengerName: '',
      rideDate: '',
    });
    setPrice(0);
  };

  // Handle delete ride
  const handleDelete = (rideId) => {
    // Remove the ride with the given id from the local state array
    setRides(rides.filter((ride) => ride.id !== rideId));
  };

  return (
    <div>
      <h1>Book a Ride</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
          <select
            id="pickupLocation"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
          >
            <option value="">Select pickup location</option>
            {addresses.map((address) => (
              <option key={address.id} value={address.id}>
                {address.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="dropoffLocation">Drop-off Location:</label>
          <select
            id="dropoffLocation"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleChange}
            required
          >
            <option value="">Select drop-off location</option>
            {addresses.map((address) => (
              <option key={address.id} value={address.id}>
                {address.name}
              </option>
            ))}
          </select>
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
        <div>
          <h3>Total Price: ${price.toFixed(2)}</h3>
        </div>
        <button type="submit">Book Ride</button>
      </form>

      <h2>Booked Rides</h2>
      <ul>
        {rides.map((ride) => (
          <li key={ride.id}>
            {ride.passengerName} - {ride.pickupLocation} to {ride.dropoffLocation} (${ride.price.toFixed(2)}){' '}
            <button onClick={() => handleDelete(ride.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RideForm;
