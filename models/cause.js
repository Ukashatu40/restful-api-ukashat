const mongoose = require('mongoose');

const causeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    contributions: [{
        name: { type: String, required: true },
        email: { type: String, required: true },
        amount: { type: Number, required: true },
        createdAt: { type: Date, default: Date.now }
    }]
});

module.exports = mongoose.model('Cause', causeSchema);