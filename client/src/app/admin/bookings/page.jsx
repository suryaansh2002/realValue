'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '@/app/components/AdminNavbar';

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [archivedBookings, setArchivedBookings] = useState([]);

  const [showArchive, setShowArchive] = useState(false);
  let url = 'https://real-value-server.vercel.app/';
  // url = 'http://localhost:5000/'
  // Function to fetch bookings from the server
  const fetchBookings = async () => {
    try {
      const response = await axios.get(url + 'api/bookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const fetchArchivedBookings = async () => {
    try {
      const response = await axios.get(url + 'api/bookings/archived');
      setArchivedBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  // Function to archive a booking
  const archiveBooking = async (id) => {
    try {
      await axios.put(url + `api/bookings/${id}`, {
        archived: true,
      });
      // Refresh bookings after archiving
      fetchBookings();
      fetchArchivedBookings();
    } catch (error) {
      console.error('Error archiving booking:', error);
    }
  };

  const unArchiveBooking = async (id) => {
    try {
      await axios.put(url + `api/bookings/${id}`, {
        archived: false,
      });
      // Refresh bookings after archiving
      fetchBookings();
      fetchArchivedBookings();
    } catch (error) {
      console.error('Error archiving booking:', error);
    }
  };

  const deleteBooking = async (id) => {
    try {
      await axios.delete(url + `api/bookings/${id}`);
      // Refresh bookings after archiving
      fetchBookings();
    } catch (error) {
      console.error('Error archiving booking:', error);
    }
  };

  // Fetch bookings on component mount
  useEffect(() => {
    fetchBookings();
  }, []);

  useEffect(() => {
    fetchBookings();
    fetchArchivedBookings();

  }, [showArchive]);

  return (
    <div>
      <AdminNavbar />

      <div className='container mx-auto mb-8'>
        <h1 className='text-3xl font-semibold mb-6'>Bookings</h1>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {bookings.map((booking) => (
            <div key={booking._id} className='bg-white shadow-md rounded-md p-4'>
              <div className='mb-4'>
                <p className='font-semibold'>
                  Listing: {booking.listingId.brand} {booking.listingId.model} -{' '}
                  {booking.listingId.vehicleNumber}
                </p>
                <p className='mt-1'>Name: {booking.name}</p>
                <p className='mt-1'>Mobile Number: {booking.mobileNumber}</p>
                <p className='mt-1'>Email: {booking.email ? booking.email : 'N/A'}</p>
                <p className='mt-1'>Date: {booking.date}</p>
                <p className='mt-1'>Time: {booking.time}</p>
              </div>
              <button
                onClick={() => archiveBooking(booking._id)}
                className='bg-blue-500 text-white px-4 py-2 rounded-md'
              >
                Archive
              </button>

              <button
                onClick={() => deleteBooking(booking._id)}
                className='bg-red-500 text-white mx-4 px-4 py-2 rounded-md'
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className='my-4'>
          {showArchive ? (
            <button
              onClick={() => setShowArchive(false)}
              className='bg-blue-500 text-white px-4 py-2 rounded-md'
            >
              Hide Archived Bookings
            </button>
          ) : (
            <button
              onClick={() => setShowArchive(true)}
              className='bg-blue-500 text-white px-4 py-2 rounded-md'
            >
              Show Archived Bookings
            </button>
          )}
        </div>

        {showArchive && (
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {archivedBookings.map((booking) => (
                       <div key={booking._id} className='bg-white shadow-md rounded-md p-4'>
                       <div className='mb-4'>
                         <p className='font-semibold'>
                           Listing: {booking.listingId.brand} {booking.listingId.model} -{' '}
                           {booking.listingId.vehicleNumber}
                         </p>
                         <p className='mt-1'>Name: {booking.name}</p>
                         <p className='mt-1'>Mobile Number: {booking.mobileNumber}</p>
                         <p className='mt-1'>Email: {booking.email ? booking.email : 'N/A'}</p>
                         <p className='mt-1'>Date: {booking.date}</p>
                         <p className='mt-1'>Time: {booking.time}</p>
                       </div>
                       <button
                         onClick={() => archiveBooking(booking._id)}
                         className='bg-blue-500 text-white px-4 py-2 rounded-md'
                       >
                         Archive
                       </button>
         
                       <button
                         onClick={() => deleteBooking(booking._id)}
                         className='bg-red-500 text-white mx-4 px-4 py-2 rounded-md'
                       >
                         Delete
                       </button>
                     </div>
         
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingsPage;
