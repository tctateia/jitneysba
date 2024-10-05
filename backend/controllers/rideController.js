const { MongoClient } = require('mongodb');
const fetch = require('node-fetch'); // Ensure node-fetch is installed (`npm install node-fetch`)

// Helper function to calculate the cost and time based on distance
function calculateCostAndTime(distanceInMeters) {
    const ratePerKm = 2.5; // Example: $2.50 per kilometer
    const speed = 50; // Example: average speed in km/h

    const distanceInKm = distanceInMeters / 1000; // Convert meters to kilometers
    const cost = distanceInKm * ratePerKm;
    const timeInHours = distanceInKm / speed;
    const timeInMinutes = timeInHours * 60; // Convert time to minutes

    return { cost: cost.toFixed(2), time: timeInMinutes.toFixed(2) };
}

exports.findNearby = async (req, res) => {
    try {
        const client = new MongoClient(process.env.MONGO_URI);  // Use MongoDB connection string from .env
        await client.connect();
        const database = client.db('your_database_name'); // Use your actual database name
        const collection = database.collection('your_collection_name'); // Use your actual collection name

        // Fetch the user's current geolocation using Abstract API
        const options = { method: 'GET' };
        const response = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.API_KEY}`, options);
        const geolocationData = await response.json();
        
        // Extract latitude and longitude from the geolocation API response
        const longitude = geolocationData.longitude;
        const latitude = geolocationData.latitude;
        console.log(`User's location: Longitude: ${longitude}, Latitude: ${latitude}`);

        // Now find nearby places from MongoDB based on user's location
        const nearbyPlaces = await collection.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude] // User's current location
                    },
                    $maxDistance: 1000 // Max distance in meters (1 km)
                }
            }
        }).toArray();

        if (nearbyPlaces.length > 0) {
            const results = nearbyPlaces.map(place => {
                const distance = place.location.distance; // Assuming `distance` field exists
                const { cost, time } = calculateCostAndTime(distance);
                return {
                    name: place.name,
                    distance,
                    cost,
                    time
                };
            });
            res.status(200).json(results);  // Send results to the frontend
        } else {
            res.status(404).json({ message: 'No nearby places found' });
        }

        client.close();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while finding nearby places' });
    }
};
