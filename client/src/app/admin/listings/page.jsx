'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import AdminNavbar from '@/app/components/AdminNavbar';

const Listings = () => {
  const [listings, setListings] = useState([]);
  let url = 'https://real-value-server.vercel.app/';
  // url = 'http://localhost:5000/'

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const response = await axios.get(url + 'api/listings');
      let arr = [];
      for (let i = 0; i < 5; i++) {
        arr.push(response.data[0]);
      }
      console.log(arr);
      //   arr = arr * 5
      setListings(response.data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  const deleteListing = async (id) => {
    try {
      await axios.delete(url + `api/listings/${id}`);
      fetchListings();
    } catch (error) {
      console.error('Error deleting listing:', error);
    }
  };
  const goToUpdate = (id) => {
    window.location.href = './update/' + id;
  };
  return (
    <div>
      <AdminNavbar />

      <div className='container mx-auto mt-8'>
        <h1 className='text-3xl font-bold mb-4'>Listings</h1>
        <Link
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded inline-block'
          href='/admin/create-listing'
        >
          Create New Listing
        </Link>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {listings.map((listing) => (
            <div key={listing._id} className='bg-gray-100 p-4 rounded-lg'>
              <img
                src={listing.images[0]}
                alt={listing.brand}
                className='w-full h-32 object-cover mb-4'
              />
              <p className='text-lg font-semibold'>
                {listing.brand} {listing.model}
              </p>
              <p className='text-gray-600'>{listing.vehicleNumber}</p>
              <button
                onClick={() => deleteListing(listing._id)}
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded inline-block'
              >
                Delete
              </button>

              <button
                onClick={() => goToUpdate(listing._id)}
                className='bg-blue-500 hover:bg-blue-700 mx-4 text-white font-bold py-2 px-4 mt-4 rounded inline-block'
              >
                Update
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
