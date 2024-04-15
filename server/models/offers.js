const mongoose = require('mongoose');

const offersSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: ''
  }
});

const Offers = mongoose.model('Offers', offersSchema);

module.exports = Offers;
