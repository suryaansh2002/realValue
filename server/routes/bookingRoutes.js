const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Create a booking
router.post('/', bookingController.createBooking);

// Read all bookings
router.get('/', bookingController.getAllBookings);

module.exports = router;
