import React, { useState, useEffect } from 'react';

const GeoLocation = () => {
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const options = { method: 'GET' };
      try {
        const response = await fetch(
          `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_API_KEY}`,
          options
        );
        const data = await response.json();
        setLocationData(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      <h2>Geolocation Data</h2>
      {error && <p>Error fetching location: {error}</p>}
      {locationData ? (
        <div>
          <p><strong>Country:</strong> {locationData.country}</p>
          <p><strong>City:</strong> {locationData.city}</p>
          <p><strong>IP Address:</strong> {locationData.ip_address}</p>
        </div>
      ) : (
        <p>Loading geolocation data...</p>
      )}
    </div>
  );
};

export default GeoLocation;
