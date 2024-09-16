const express = require('express');
const router = express.Router();
const rideController = require('../controllers/rideController');

// GET all rides
router.get('/rides', rideController.getAllRides);

// POST a new ride
router.post('/rides', rideController.createRide);

// PATCH update ride
router.patch('/rides/:id', rideController.updateRide);

// DELETE a ride
router.delete('/rides/:id', rideController.deleteRide);

module.exports = router;
