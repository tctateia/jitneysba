import React, { useState, useEffect } from 'react';
import locations from '../data/locations'; 

const GeoLocation = () => {
    const [locationData, setLocationData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate fetching location data from locations.js
        try {
            
            setLocationData(locations); // Set all location data from the imported file
        } catch (err) {
            setError('Error fetching location data');
            console.error('Error:', err);
        }
    }, []);

    return (
        <div>
            <h2>Available Locations</h2>
            {error && <p>Error fetching locations: {error}</p>}
            {locationData ? (
                <div>
                    {locationData.map((location, index) => (
                        <div key={index}>
                            <p><strong>Name:</strong> {location.name}</p>
                            <p><strong>Address:</strong> {location.address}</p>
                            <p><strong>Distance:</strong> {location.distance} miles</p>
                            <p><strong>Price:</strong> ${location.price.toFixed(2)}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading location data...</p>
            )}
        </div>
    );
};

export default GeoLocation;
