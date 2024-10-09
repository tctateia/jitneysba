const express = require('express');
const router = express.Router();
const { createRide } = require('../controllers/rideController');

// POST /api/rides
router.post('/', createRide);

module.exports = router;
