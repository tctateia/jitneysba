const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
    role: {
        type: String,
        enum: ['driver', 'passenger'],
        required: true,
    },
    vehicle: {
        make: { type: String },
        model: { type: String },
        licensePlate: { type: String }
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
    }
}, { timestamps: true });

// Virtual property to check if the user is a driver
userSchema.virtual('isDriver').get(function() {
    return this.role === 'driver';
});

// Pre-save hook to validate driver's vehicle info if they are a driver
userSchema.pre('save', function(next) {
    if (this.role === 'driver' && (!this.vehicle || !this.vehicle.licensePlate)) {
        return next(new Error('Drivers must have a vehicle and a license plate.'));
    }
    next();
});

module.exports = mongoose.model('User', userSchema);
