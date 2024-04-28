'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '@/app/components/AdminNavbar';
import JSZip from 'jszip';
import { useRouter } from 'next/router';

const CreateListing = () => {
  const [features, setFeatures] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);
  const [imagesLength, setImagesLength] = useState(null);
  const [imagesDone, setImagesDone] = useState(0);
  const [currListing, setCurrListing] = useState({});

  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    variant: '',
    vehicleNumber: '',
    fuelType: '',
    year: '',
    color: '',
    ownership: '',
    kmDriven: '',
    price: '',
    type: '',
    transmissionType: '',
    location: '',
    featured: false,
    selectedFeatures: [],
  });
  let url = 'https://real-value-server.vercel.app/';
  // url = 'http://localhost:5000/'

  useEffect(() => {
    if (Object.keys(currListing).length) {
      setFormData({
        brand: currListing.brand,
        model: currListing.model,
        variant: currListing.variant,
        vehicleNumber: currListing.vehicleNumber,
        fuelType: currListing.fuelType,
        year: currListing.year,
        color: currListing.color,
        ownership: currListing.ownership,
        kmDriven: currListing.kmDriven,
        price: currListing.price,
        type: currListing.type,
        transmissionType: currListing.transmissionType,
        location: currListing.transmissionType,
        featured: currListing.featured,
        selectedFeatures: currListing.features,
      });
    }
  }, [currListing]);
  const getSingleListing = async () => {
    const tempArr = window.location.href.split('/');
    const id = tempArr[tempArr.length - 1];
    console.log(id);
    const response = await axios.get(url + `api/listings/${id}`);
    console.log(response.data);
    setCurrListing(response.data);
  };

  const uploadImagesToCloudinary = async (images) => {
    let tempArr = [];
    const NAME_OF_UPLOAD_PRESET = 'jyz7szi4';
    const YOUR_ID = 'dsi5cmgg9';
    const API_KEY = '455265386657195';

    // Loop through each extracted image and upload to Cloudinary
    for (let i = 0; i < images.length; i++) {
      let image = images[i];
      const data = new FormData();
      data.append('file', image);
      data.append('upload_preset', NAME_OF_UPLOAD_PRESET);
      data.append('api_key', API_KEY);
      const res = await fetch(`https://api.cloudinary.com/v1_1/${YOUR_ID}/image/upload`, {
        method: 'POST',
        body: data,
      });
      const img = await res.json();
      // You can handle the Cloudinary response here as needed
      tempArr.push(img.secure_url);
      setImages(tempArr);
      console.log('Uploaded image:', img.secure_url);
    }
    console.log(tempArr);
  };

  const handleImageChange = async (e) => {
    setImageFile(e.target.files[0]);
    const form = new FormData();
    const file = e.target.files[0];
    if (file.type != 'application/zip') {
      alert('Please upload zip file only');
      return;
    }
    try {
      setUploading(true);
      const file = e.target.files[0];
      const zip = new JSZip();

      // Read the uploaded file
      const zipData = await file.arrayBuffer();

      // Load the ZIP file
      await zip.loadAsync(zipData);

      const extractedImages = [];

      // Extract images from the ZIP file
      await Promise.all(
        Object.keys(zip.files).map(async (filename) => {
          const file = zip.files[filename];
          if (file.dir || !file.name.match(/\.(jpg|jpeg|png)$/i) || filename.includes('__MACOSX'))
            return;

          // Read the image file
          const imageData = await file.async('blob');

          // Convert the Blob to a data URL
          const imageFile = new File([imageData], filename);

          extractedImages.push(imageFile);
        })
      );

      console.log(extractedImages);
      const getFileName = (path) => {
        return path.split('/').pop();
      };

      // Sort the files based on the filename
      extractedImages.sort((a, b) => {
        const fileNameA = getFileName(a.name);
        const fileNameB = getFileName(b.name);
        return fileNameA.localeCompare(fileNameB);
      });

      console.log(extractedImages);
      setImagesLength(extractedImages.length);
      await uploadImagesToCloudinary(extractedImages);

      setUploading(false);
    } catch (error) {
      setUploading(false);
      console.error('Error uploading image:', error.message);
    }
  };

  useEffect(() => {
    getSingleListing();
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    try {
      const response = await axios.get(url + 'api/features');
      setFeatures(response.data);
    } catch (error) {
      console.error('Error fetching features:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        selectedFeatures: [...formData.selectedFeatures, value],
      });
    } else {
      setFormData({
        ...formData,
        selectedFeatures: formData.selectedFeatures.filter((item) => item !== value),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const tempData = formData;
      tempData['features'] = formData['selectedFeatures'];
      if (images.length) {
        tempData['images'] = images;
      }
      console.log(tempData);
      setImages([]);
      const tempArr = window.location.href.split('/');
      const id = tempArr[tempArr.length - 1];

      await axios.put(url + 'api/listings/' + id, tempData);
      // setFormData({
      //   brand: '',
      //   model: '',
      //   variant: '',
      //   vehicleNumber: '',
      //   fuelType: '',
      //   year: '',
      //   color: '',
      //   ownership: '',
      //   kmDriven: '',
      //   price: '',
      //   type: '',
      //   transmissionType: '',
      //   location: '',
      //   featured: false,
      //   selectedFeatures: []
      // });
      setLoading(false);
      alert('Listing updated successfully');
    } catch (error) {
      setLoading(false);
      console.error('Error creating listing:', error);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className='max-w-3xl mx-auto py-8 px-4'>
        <h1 className='text-3xl font-bold mb-6'>Update Listing</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='mb-6'>
            <input
              type='file'
              onChange={handleImageChange}
              className='border border-gray-300 rounded-md py-2 px-4 mb-2'
            />
            {uploading && imagesLength && (
              <div>
                Uploading... {images.length} / {imagesLength}
              </div>
            )}
          </div>
          <div>
            <label htmlFor='brand' className='block font-medium text-gray-700'>
              Brand
            </label>
            <input
              type='text'
              id='brand'
              name='brand'
              value={formData.brand}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full border rounded-md'
            />
          </div>
          <div>
            <label htmlFor='model' className='block font-medium text-gray-700'>
              Model
            </label>
            <input
              type='text'
              id='model'
              name='model'
              value={formData.model}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full border rounded-md'
            />
          </div>
          <div>
            <label htmlFor='variant' className='block font-medium text-gray-700'>
              Variant
            </label>
            <input
              type='text'
              id='variant'
              name='variant'
              value={formData.variant}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full border rounded-md'
            />
          </div>
          <div>
            <label htmlFor='vehicleNumber' className='block font-medium text-gray-700'>
              Vehicle Number
            </label>
            <input
              type='text'
              id='vehicleNumber'
              name='vehicleNumber'
              value={formData.vehicleNumber}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full border rounded-md'
            />
          </div>
          <div>
            <label htmlFor='fuelType' className='block font-medium text-gray-700'>
              Fuel Type
            </label>
            <select
              id='fuelType'
              name='fuelType'
              value={formData.fuelType}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full border rounded-md'
            >
              <option value=''>Select Fuel Type</option>
              <option value='Petrol'>Petrol</option>
              <option value='Diesel'>Diesel</option>
              <option value='CNG'>CNG</option>
              <option value='EV'>EV</option>
            </select>
          </div>
          <div>
            <label htmlFor='year' className='block font-medium text-gray-700'>
              Year
            </label>
            <input
              type='number'
              id='year'
              name='year'
              value={formData.year}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full border rounded-md'
            />
          </div>
          <div>
            <label htmlFor='color' className='block font-medium text-gray-700'>
              Color
            </label>
            <input
              type='text'
              id='color'
              name='color'
              value={formData.color}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full border rounded-md'
            />
          </div>
          <div>
            <label htmlFor='ownership' className='block font-medium text-gray-700'>
              Ownership
            </label>
            <input
              type='number'
              id='ownership'
              name='ownership'
              value={formData.ownership}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full border rounded-md'
            />
          </div>
          <div>
            <label htmlFor='kmDriven' className='block font-medium text-gray-700'>
              Kilometers Driven
            </label>
            <input
              type='number'
              id='kmDriven'
              name='kmDriven'
              value={formData.kmDriven}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full border rounded-md'
            />
          </div>
          <div>
            <label htmlFor='price' className='block font-medium text-gray-700'>
              Price
            </label>
            <input
              type='number'
              id='price'
              name='price'
              value={formData.price}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full border rounded-md'
            />
          </div>
          <div>
            <label htmlFor='type' className='block font-medium text-gray-700'>
              Type
            </label>
            <input
              type='text'
              id='type'
              name='type'
              value={formData.type}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full border rounded-md'
            />
          </div>
          <div>
            <label htmlFor='transmissionType' className='block font-medium text-gray-700'>
              Transmission Type
            </label>
            <select
              id='transmissionType'
              name='transmissionType'
              value={formData.transmissionType}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full border rounded-md'
            >
              <option value=''>Select Transmission Type</option>
              <option value='automatic'>Automatic</option>
              <option value='manual'>Manual</option>
            </select>
          </div>
          <div>
            <label htmlFor='location' className='block font-medium text-gray-700'>
              Location
            </label>
            <input
              type='text'
              id='location'
              name='location'
              value={formData.location}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full border rounded-md'
            />
          </div>
          <div>
            <label htmlFor='featured' className='flex items-center'>
              <input
                type='checkbox'
                id='featured'
                name='featured'
                checked={formData.featured}
                onChange={() => setFormData({ ...formData, featured: !formData.featured })}
                className='mr-2'
              />
              <span className='text-gray-700'>Featured</span>
            </label>
          </div>
          {formData && (
            <div>
              <label className='block font-medium text-gray-700'>Features</label>
              {features.map((feature) => (
                <div key={feature._id} className='flex items-center'>
                  <input
                    checked={formData.selectedFeatures.includes(feature.text)}
                    type='checkbox'
                    id={feature._id}
                    name={feature._id}
                    value={feature.text}
                    onChange={handleCheckboxChange}
                    className='mr-2'
                  />
                  <label htmlFor={feature._id} className='text-gray-700'>
                    {feature.text}
                  </label>
                </div>
              ))}
            </div>
          )}
          <button
            type='submit'
            disabled={loading || uploading}
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md'
          >
            {loading ? 'Updating...' : 'Update Listing'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateListing;
