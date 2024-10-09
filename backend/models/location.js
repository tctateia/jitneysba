const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    coordinates: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
    distance: { type: Number, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Location', LocationSchema);
