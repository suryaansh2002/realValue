const Listing = require('../models/listing')
const ListingImages = require('../models/listingImages')

const AdmZip = require('adm-zip')
var detect = require('detect-file-type')

exports.createListing = async (req, res) => {
  try {
    const data = req.body
    const listing = new Listing(data)
    await listing.save()
    res.status(201).json({ message: 'Listing created successfully', listing })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

function bufferToDataUri(buffer, contentType) {
  return `data:${contentType};base64,${buffer.toString('base64')}`
}

exports.uploadImage = async (req, res) => {
  try {
    console.log(req.file)
    res.status(201).json({ message: 'Listing Image created successfully' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Read all listings
exports.getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find()
    res.json(listings)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

exports.getAllBrands = async (req, res) => {
  try {
    const brands = await Listing.distinct('brand');
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.geFeaturedListings = async (req, res) => {
  try {
    const listings = await Listing.find({ featured: true })
    res.json(listings)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

exports.getFilteredListings = async (req, res) => {
  try {
    const listings = await Listing.find(req.body)
    res.json(listings)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Read one listing by ID
exports.getListingById = async (req, res) => {
  try {
    const { id } = req.params
    const listing = await Listing.findById(id)
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' })
    }
    res.json(listing)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Update one listing by ID
exports.updateListingById = async (req, res) => {
  try {
    const { id } = req.params
    const updatedListing = await Listing.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    if (!updatedListing) {
      return res.status(404).json({ error: 'Listing not found' })
    }
    res.json({
      message: 'Listing updated successfully',
      listing: updatedListing,
    })
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

// Delete one listing by ID
exports.deleteListingById = async (req, res) => {
  try {
    const { id } = req.params
    console.log(req.params)
    const deletedListing = await Listing.findByIdAndDelete(id)
    if (!deletedListing) {
      return res.status(404).json({ error: 'Listing not found' })
    }
    res.json({
      message: 'Listing deleted successfully',
      listing: deletedListing,
    })
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}
