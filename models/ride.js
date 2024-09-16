const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true }, // Index added for frequent queries
    passenger: { type: String, required: true },
    pickupLocation: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
    destination: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
    fare: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Ride', rideSchema);
