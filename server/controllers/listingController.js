const Listing = require("../models/listing");
const ListingImages = require("../models/listingImages");

const AdmZip = require("adm-zip");
var detect = require("detect-file-type");

exports.createListing = async (req, res) => {
  try {
    const data = req.body;
    const listing = new Listing(data);
    await listing.save();
    res.status(201).json({ message: "Listing created successfully", listing });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

function bufferToDataUri(buffer, contentType) {
  return `data:${contentType};base64,${buffer.toString("base64")}`;
}

exports.uploadImage = async (req, res) => {
  try {
    console.log(req.file);
    res.status(201).json({ message: "Listing Image created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read all listings
exports.getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllBrands = async (req, res) => {
  try {
    const brands = await Listing.distinct("brand");
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllSeats = async (req, res) => {
  try {
    const brands = await Listing.distinct("seats");
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.geFeaturedListings = async (req, res) => {
  try {
    const listings = await Listing.find({ featured: true });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getFilteredListings = async (req, res) => {
  try {
    const filters = req.body;
    let query = {};

    // Iterate over the keys of the request body
    Object.keys(filters).forEach((key) => {
      switch (key) {
        case "brand":
        case "fuelType":
        case "transmissionType":
        case "seats":
          if (filters[key].length > 0) {
            query[key] = { $in: filters[key] };
          }
            break;
        case "budget":
          // For budget, find listings where the price falls within the given range
          query["price"] = { $gte: filters[key][0], $lte: filters[key][1] };
          break;
        case "modelYear":
          // For model year, find listings where the year falls within the given range
          query["year"] = { $gte: filters[key][0], $lte: filters[key][1] };
          break;
        case "kmsDriven":
          // For kmsDriven, find listings where the kmsDriven falls within the given range
          query["kmDriven"] = { $gte: filters[key][0], $lte: filters[key][1] };
          break;
        case "owners":
          // For single value fields, find listings where the field matches the value
          query[key] = filters[key];
          break;
      }
    });
    const listings = await Listing.find(query);
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Read one listing by ID
exports.getListingById = async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }
    res.json(listing);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Update one listing by ID
exports.updateListingById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedListing) {
      return res.status(404).json({ error: "Listing not found" });
    }
    res.json({
      message: "Listing updated successfully",
      listing: updatedListing,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete one listing by ID
exports.deleteListingById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const deletedListing = await Listing.findByIdAndDelete(id);
    if (!deletedListing) {
      return res.status(404).json({ error: "Listing not found" });
    }
    res.json({
      message: "Listing deleted successfully",
      listing: deletedListing,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
