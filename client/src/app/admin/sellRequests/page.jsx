'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AdminNavbar from '@/app/components/AdminNavbar'

const SellRequestsPage = () => {
  const [sellRequests, setSellRequests] = useState([])
  const [archivedSellRequests, setArchivedSellRequests] = useState([])
  const [showArchived, setShowArchived] = useState(false)
  let url = 'https://real-value-server.vercel.app/'
  // url = 'http://localhost:5000/'

  const fetchSellRequests = async () => {
    try {
      const response = await axios.get(url + 'api/sellRequests')
      setSellRequests(response.data)
    } catch (error) {
      console.error('Error fetching sell requests:', error)
    }
  }

  const fetchArchivedSellRequests = async () => {
    try {
      const response = await axios.get(url + 'api/sellRequests/archived')
      setArchivedSellRequests(response.data)
    } catch (error) {
      console.error('Error fetching sell requests:', error)
    }
  }

  useEffect(() => {
    fetchSellRequests()
  }, [])

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(url + `api/sellRequests/${id}`, {
        status,
      })
      // Refresh sell requests after status change
      fetchSellRequests()
      fetchArchivedSellRequests()
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const handleArchive = async (id, archiveValue) => {
    try {
      await axios.put(url + `api/sellRequests/${id}`, {
        archived: archiveValue,
      })
      // Refresh sell requests after archive
      fetchSellRequests()
      fetchArchivedSellRequests()
    } catch (error) {
      console.error('Error archiving sell request:', error)
    }
  }

  const deleteSellRequest = async (id) => {
    try {
      await axios.delete(url + `api/sellRequests/${id}`)
      fetchSellRequests()
      fetchArchivedSellRequests()
    } catch (error) {
      console.error('Error archiving sell request:', error)
    }
  }

  useEffect(() => {
    if (showArchived && !archivedSellRequests.length) {
      fetchArchivedSellRequests()
    }
  }, [showArchived])

  return (
    <div>
      <AdminNavbar />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-4">Sell Requests</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sellRequests.map((request) => (
            <div
              key={request._id}
              className="border border-gray-200 p-4 rounded-lg"
            >
              <h2 className="text-lg font-semibold">
                {request.brand} {request.model}
              </h2>
              <p className="text-gray-500">Location: {request.location}</p>
              <p className="text-gray-500">Status: {request.status}</p>
              <p className="text-gray-500">Name: {request.name}</p>
              <p className="text-gray-500">Mobile No: {request.phoneNumber}</p>
              <p className="text-gray-500">
                Email: {request.email ? request.email : 'N/A'}
              </p>
              <p className="text-gray-500">Location: {request.location}</p>
              <p className="text-gray-500">
                Reg. No.: {request.registrationNumber}
              </p>
              <p className="text-gray-500">
                Variant: {request.variant ? request.variant : 'N/A'}
              </p>
              <p className="text-gray-500">Year: {request.manufactureYear}</p>
              <p className="text-gray-500">
                Price: {request.price ? request.price : 'N/A'}
              </p>

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
                onClick={() => handleArchive(request._id, true)}
              >
                Archive
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 mx-4 rounded-lg mt-2"
                onClick={() => deleteSellRequest(request._id)}
              >
                Delete
              </button>
              <select
                className="block appearance-none mt-2 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(e) =>
                  handleStatusChange(request._id, e.target.value)
                }
                value={request.status}
              >
                <option value="Created">Created</option>
                <option value="Called">Called</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          ))}
        </div>

        <div className="my-8">
          {showArchived ? (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
              onClick={() => setShowArchived(false)}
            >
              Hide Archived
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
              onClick={() => setShowArchived(true)}
            >
              Show Archived
            </button>
          )}
        </div>
        {showArchived && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {archivedSellRequests.map((request) => (
              <div
                key={request._id}
                className="border border-gray-200 p-4 rounded-lg"
              >
                <h2 className="text-lg font-semibold">
                  {request.brand} {request.model}
                </h2>
                <p className="text-gray-500">Location: {request.location}</p>
                <p className="text-gray-500">Status: {request.status}</p>
                <p className="text-gray-500">Name: {request.name}</p>
                <p className="text-gray-500">
                  Mobile No: {request.phoneNumber}
                </p>
                <p className="text-gray-500">
                  Email: {request.email ? request.email : 'N/A'}
                </p>
                <p className="text-gray-500">Location: {request.location}</p>
                <p className="text-gray-500">
                  Reg. No.: {request.registrationNumber}
                </p>
                <p className="text-gray-500">
                  Variant: {request.variant ? request.variant : 'N/A'}
                </p>
                <p className="text-gray-500">Year: {request.manufactureYear}</p>
                <p className="text-gray-500">
                  Price: {request.price ? request.price : 'N/A'}
                </p>

                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
                  onClick={() => handleArchive(request._id, false)}
                >
                  Unarchive
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 mx-4 rounded-lg mt-2"
                  onClick={() => deleteSellRequest(request._id)}
                >
                  Delete
                </button>
                <select
                  className="block appearance-none mt-2 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  onChange={(e) =>
                    handleStatusChange(request._id, e.target.value)
                  }
                  value={request.status}
                >
                  <option value="Created">Created</option>
                  <option value="Called">Called</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SellRequestsPage
