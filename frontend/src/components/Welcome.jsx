import React from 'react';
import './Welcome.css'; // Only this component uses this CSS

const Welcome = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    alert('Thank you for logging into Jitney!'); // Display alert when form is submitted
  };

  return (
    <div>
      <div className="welcome-content"></div>
      <div className="welcome-container"></div>
       
      <h1>Welcome to Jitney</h1>
      
      <form onSubmit={handleSubmit}> {/* Attach the handleSubmit function */}
        <input type="text" name="email" placeholder="Enter your email" required />
        <input type="password" name="password" placeholder="Enter your password" required />
        <input type="submit" value="Login" />
      </form>

      <section className="jitney-history">
        <h2>What is Jitney?</h2>
        <p>The term "jitney" originated in the early 20th century to describe a form of shared taxi service. Our app revives this concept with a modern twist, connecting drivers with passengers for on-demand transportation.</p>
      </section>
    </div>
  );
};

export default Welcome;

