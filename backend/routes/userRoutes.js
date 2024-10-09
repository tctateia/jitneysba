const express = require('express');
const router = express.Router();
const User = require('../models/user');

// User signup endpoint
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Error registering user', error });
    }
});

module.exports = router;
