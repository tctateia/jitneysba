// Sample script for inserting sample data into MongoDB
const mongoose = require('mongoose');
const User = require('./models/user');
const Ride = require('./models/ride');

mongoose.connect('mongodb+srv://tctateia:Likeme23!@mongopractice.dixz7.mongodb.net/jitney_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function populateData() {
    try {
        await User.create({ name: 'John Doe', email: 'john@example.com', age: 30, location: 'New York' });
        await Ride.create({ driver: '64a9c9cf4321c0e1089f2d14', passenger: 'Jane Doe', pickupLocation: 'Downtown', destination: 'Airport', fare: 50 });
        console.log('Sample data inserted successfully');
    } catch (error) {
        console.error('Error inserting sample data:', error);
    } finally {
        mongoose.connection.close();
    }
}

require('dotenv').config();

const mongoose = require('mongoose');

// Use the MongoDB URI from the .env file
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


populateData();
