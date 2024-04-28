const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  listingId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: '',
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  archived: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
