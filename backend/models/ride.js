const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
    pickup: { type: String, required: true },
    dropoff: { type: String, required: true },
    // Add additional fields if needed
});

module.exports = mongoose.model('Ride', RideSchema);
