import React, { useState } from 'react';

const DriverSignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    city: '',
    state: '',
    licenseNumber: '',
    ssn: '',
  });

  // Update state when user types in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (sending the data to the backend)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Ensure all form fields are filled out
    if (
      formData.name &&
      formData.dateOfBirth &&
      formData.city &&
      formData.state &&
      formData.licenseNumber &&
      formData.ssn
    ) {
      // Display alert message on submission
      alert(
        `Thank you for signing up for Jitney, please allow us 24-72 hours to process your information. We will respond with an e-mail or text message to proceed to the next steps.`
      );


      setFormData({
        name: '',
        dateOfBirth: '',
        city: '',
        state: '',
        licenseNumber: '',
        ssn: '',
      });
    } else {
      // If any field is missing, alert the user
      alert('Please fill out all fields before submitting.');
    }
  };

  return (
    <div>
      <h1>Driver Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            required
          />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter your state"
            required
          />
        </div>
        <div>
          <label htmlFor="licenseNumber">Driver's License Number:</label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            placeholder="Enter your driver's license number"
            required
          />
        </div>
        <div>
          <label htmlFor="ssn">Social Security Number:</label>
          <input
            type="password"
            id="ssn"
            name="ssn"
            value={formData.ssn}
            onChange={handleChange}
            placeholder="Enter your social security number"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default DriverSignUpForm;
