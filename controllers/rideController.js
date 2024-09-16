const Ride = require('../models/ride');

// Get all rides
exports.getAllRides = async (req, res) => {
    try {
        const rides = await Ride.find({}).populate('driver', 'name');
        res.json(rides);
    } catch (error) {
        res.status(500).json({ message: `Error fetching rides: ${error.message}` });
    }
};

// Create a new ride
exports.createRide = async (req, res) => {
    const { driver, passenger, pickupLocation, destination, fare } = req.body;
    try {
        const newRide = await Ride.create({ driver, passenger, pickupLocation, destination, fare });
        res.status(201).json(newRide);
    } catch (error) {
        res.status(400).json({ message: `Error creating ride: ${error.message}` });
    }
};

// Update a ride
exports.updateRide = async (req, res) => {
    try {
        const updatedRide = await Ride.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedRide);
    } catch (error) {
        res.status(400).json({ message: `Error updating ride: ${error.message}` });
    }
};

// Delete a ride
exports.deleteRide = async (req, res) => {
    try {
        await Ride.findByIdAndDelete(req.params.id);
        res.json({ message: 'Ride deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: `Error deleting ride: ${error.message}` });
    }
};
