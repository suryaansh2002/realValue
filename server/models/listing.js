const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
  images: { type: [String], required: false },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  variant: { type: String, required: true },
  vehicleNumber: { type: String, required: true },
  fuelType: {
    type: String,
    enum: ['Petrol', 'Diesel', 'CNG', 'EV'],
    required: true,
  },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  ownership: { type: Number, required: true },
  kmDriven: { type: Number, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  transmissionType: { type: String, required: true },
  location: { type: String, required: true },
  featured: { type: Boolean, default: false },
  features: { type: [String], required: true },
  seats: { type: Number, required: false },
})

const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing
