const Booking = require('../models/booking');

// Create a booking
exports.createBooking = async (req, res) => {
  try {
    const { listingId, date, time, name, email, mobileNumber } = req.body;
    const booking = new Booking({ listingId, date, time, name, email, mobileNumber });
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
