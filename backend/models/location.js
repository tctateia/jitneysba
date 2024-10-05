const mongoose = require('mongoose');

// Define the location schema
const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    coordinates: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true
        }
    },
    address: { type: String }
}, { timestamps: true });

// Create a 2dsphere index for the coordinates field to enable geospatial queries
locationSchema.index({ coordinates: '2dsphere' });

// Static method to find nearby locations
locationSchema.statics.findNearby = function (longitude, latitude, maxDistance = 10000) {
    return this.find({
        coordinates: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [longitude, latitude]
                },
                $maxDistance: maxDistance
            }
        }
    });
};

module.exports = mongoose.model('Location', locationSchema);
