const { body } = require('express-validator');

exports.validateCause = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('imageUrl').isURL().withMessage('Valid image URL is required')
];

exports.validateContribution = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('amount').isFloat({ min: 0 }).withMessage('Amount must be a positive number')
];