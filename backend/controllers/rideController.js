// Controllers can be added here to handle ride-related logic.
const Ride = require('../models/ride');

exports.createRide = async (req, res) => {
    const { pickup, dropoff } = req.body;
    const newRide = new Ride({ pickup, dropoff });

    try {
        await newRide.save();
        res.status(201).json(newRide);
    } catch (error) {
        res.status(400).json({ message: 'Error creating ride', error });
    }
};
