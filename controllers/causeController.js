const Cause = require('../models/cause');
const { validationResult } = require('express-validator');

exports.createCause = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const cause = new Cause(req.body);
        await cause.save();
        res.status(201).json(cause);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getAllCauses = async (req, res) => {
    try {
        const causes = await Cause.find();
        res.json(causes);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getCauseById = async (req, res) => {
    try {
        const cause = await Cause.findById(req.params.id);
        if (!cause) {
            return res.status(404).json({ error: 'Cause not found' });
        }
        res.json(cause);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateCause = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const cause = await Cause.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!cause) {
            return res.status(404).json({ error: 'Cause not found' });
        }
        res.json(cause);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteCause = async (req, res) => {
    try {
        const cause = await Cause.findByIdAndDelete(req.params.id);
        if (!cause) {
            return res.status(404).json({ error: 'Cause not found' });
        }
        res.json({ message: 'Cause deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.addContribution = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const cause = await Cause.findById(req.params.id);
        if (!cause) {
            return res.status(404).json({ error: 'Cause not found' });
        }

        cause.contributions.push(req.body);
        await cause.save();
        res.status(201).json(cause);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};