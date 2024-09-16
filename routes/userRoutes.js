const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: `Error fetching users: ${err.message}` });
    }
});

// POST a new user
router.post('/users', async (req, res) => {
    const { name, email, age, location } = req.body;
    try {
        const newUser = await User.create({ name, email, age, location });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: `Error creating user: ${err.message}` });
    }
});

// PATCH/PUT update user
router.patch('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: `Error updating user: ${err.message}` });
    }
});

// DELETE a user
router.delete('/users/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: `Error deleting user: ${err.message}` });
    }
});

module.exports = router;
