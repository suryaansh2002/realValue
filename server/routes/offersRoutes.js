const express = require('express');
const router = express.Router();
const offersController = require('../controllers/offersController');

// Create an offer
router.post('/', offersController.createOffer);

// Read all offers
router.get('/', offersController.getAllOffers);

// Delete one offer
router.delete('/:id', offersController.deleteOffer);

module.exports = router;
