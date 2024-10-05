import React, { useState } from 'react';

const DriverSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    city: '',
    state: '',
    license: '',
    ssn: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/drivers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Driver information submitted successfully!');
        setFormData({
          name: '',
          dob: '',
          city: '',
          state: '',
          license: '',
          ssn: '',
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Driver Sign-Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
        <input type="date" name="dob" placeholder="Enter your date of birth" value={formData.dob} onChange={handleChange} required />
        <input type="text" name="city" placeholder="Enter your city" value={formData.city} onChange={handleChange} required />
        <input type="text" name="state" placeholder="Enter your state" value={formData.state} onChange={handleChange} required />
        <input type="text" name="license" placeholder="Enter your driver's license number" value={formData.license} onChange={handleChange} required />
        <input type="text" name="ssn" placeholder="Enter your social security number" value={formData.ssn} onChange={handleChange} required />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default DriverSignUp;
