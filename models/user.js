const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true }, // Index added for faster queries
    email: { type: String, required: true, unique: true },
    age: { type: Number },
    location: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
