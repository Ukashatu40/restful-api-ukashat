const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const causeRoutes = require('./routes/causes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/causes', causeRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});