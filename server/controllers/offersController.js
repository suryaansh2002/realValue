const Offers = require('../models/offers');

// Create an offer
exports.createOffer = async (req, res) => {
  try {
    const { text, name } = req.body;
    const offer = new Offers({ text, name });
    await offer.save();
    res.status(201).json({ message: 'Offer created successfully', offer });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read all offers
exports.getAllOffers = async (req, res) => {
  try {
    const offers = await Offers.find();
    res.json(offers);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete one offer
exports.deleteOffer = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOffer = await Offers.findByIdAndDelete(id);
    if (!deletedOffer) {
      return res.status(404).json({ error: 'Offer not found' });
    }
    res.json({ message: 'Offer deleted successfully', deletedOffer });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
