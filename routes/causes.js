const express = require('express');
const router = express.Router();
const causeController = require('../controllers/causeController');
const { validateCause, validateContribution } = require('../middleware/validate');

router.post('/', validateCause, causeController.createCause);
router.get('/', causeController.getAllCauses);
router.get('/:id', causeController.getCauseById);
router.put('/:id', validateCause, causeController.updateCause);
router.delete('/:id', causeController.deleteCause);
router.post('/:id/contribute', validateContribution, causeController.addContribution);

module.exports = router;