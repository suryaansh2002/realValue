'use client'
import { useState } from 'react'
import styles from '../styles/Sell.module.css'
import axios from 'axios'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import FaqCard from '../components/FaqCard'
import {
  FaCheckCircle,
  FaPhone,
  FaMapMarkerAlt,
  FaCarSide,
  FaFileAlt,
  FaHandshake,
} from 'react-icons/fa'
import { FaCoins, FaClipboardCheck, FaMoneyCheckAlt } from 'react-icons/fa'
import FeaturedCars from '../FeaturedCars'
import { sellFAQData } from '../data/sellFAQs'

const SellRequestForm = () => {
  let url = 'https://real-value-server.vercel.app/'
  // url = "http://localhost:5000/";
  const [showForm, setShowForm] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    location: '',
    registrationNumber: '',
    brand: '',
    model: '',
    variant: '',
    manufactureYear: '',
    kilometers: '',
    price: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check for compulsory fields
    const compulsoryFields = [
      'name',
      'phoneNumber',
      'location',
      'registrationNumber',
      'brand',
      'model',
      'manufactureYear',
      'kilometers',
    ]
    const missingFields = compulsoryFields.filter((field) => !formData[field])

    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(', ')}`)
      return
    }

    try {
      await axios.post(url + 'api/sellRequests', formData)
      // Clear form after submission
      setShowForm(false)
      setShowModal(true)
      setTimeout(() => {
        setShowModal(false)
      }, 2000)
      setFormData({
        name: '',
        phoneNumber: '',
        email: '',
        location: '',
        registrationNumber: '',
        brand: '',
        model: '',
        variant: '',
        manufactureYear: '',
        kilometers: '',
        price: '',
      })
    } catch (error) {
      console.error('Error submitting sell request:', error)
      alert('Error submitting sell request. Please try again later.')
    }
  }

  return (
    <div className="text-left pt-4 dark:bg-gray-900 text-white">
      <div className="font-semibold text-3xl mb-8 ml-4 md:ml-10">
        Sell Your Vehicle
      </div>
      <div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="hover:bg-yellow-500  border border-gray-900 ml-[50%] bg-yellow-400 text-gray-900 -translate-x-[50%] w-max rounded px-12 py-2 mt-4 "
        >
          Submit Your Sell Request{' '}
          {showForm ? (
            <FaChevronUp className="inline-block align-text-top translate-y-05" />
          ) : (
            <FaChevronDown className="inline-block align-text-top translate-y-0.5" />
          )}
        </button>
      </div>

      {showForm && (
        <div className="border-white border-2 p-4 rounded-md mt-4  ml-[50%] -translate-x-[50%]  w-[90vw] md:w-auto md:max-w-screen-md">
          <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
            <label className="font-normal text-sm">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
            <label className="font-normal text-sm">Phone Number *</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
            <label className="font-normal text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
            <label className="font-normal text-sm">Location *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
            <label className="font-normal text-sm">Registration Number *</label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
            <label className="font-normal text-sm">Brand *</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
            <label className="font-normal text-sm">Model *</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
            <label className="font-normal text-sm">Variant</label>
            <input
              type="text"
              name="variant"
              value={formData.variant}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
            <label className="font-normal text-sm">Manufacture Year *</label>
            <input
              type="number"
              name="manufactureYear"
              value={formData.manufactureYear}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
            <label className="font-normal text-sm">Kilometers *</label>
            <input
              type="number"
              name="kilometers"
              value={formData.kilometers}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
            <label className="font-normal text-sm">Expected Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-yellow-500 text-white px-6 py-2 rounded"
            >
              Get Valuation
            </button>
          </form>
        </div>
      )}

      <div className="my-4">
        <div className="w-[100vw] block md:w-[50vw] md:inline-block">
          <div className="font-semibold text-2xl my-8 ml-4 md:ml-10">
            Steps To Sell
          </div>
          <ul className="space-y-4 ml-6 md:ml-14">
            <li className="flex items-center py-2">
              <span className="flex-shrink-0 mr-4">
                <FaCheckCircle className="text-green-500 text-xl" />
              </span>
              <span className="text-lg">Digital Verification</span>
            </li>
            <li className="flex items-center py-2">
              <span className="flex-shrink-0 mr-4">
                <FaPhone className="text-blue-500 text-xl" />
              </span>
              <span className="text-lg">Call with our team</span>
            </li>
            <li className="flex items-center py-2">
              <span className="flex-shrink-0 mr-4">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
              </span>
              <span className="text-lg">
                Physical inspection (home and showroom)
              </span>
            </li>
            <li className="flex items-center py-2">
              <span className="flex-shrink-0 mr-4">
                <FaCarSide className="text-yellow-500 text-xl" />
              </span>
              <span className="text-lg">Car condition</span>
            </li>
            <li className="flex items-center py-2">
              <span className="flex-shrink-0 mr-4">
                <FaFileAlt className="text-indigo-500 text-xl" />
              </span>
              <span className="text-lg">Papers</span>
            </li>
            <li className="flex items-center py-2">
              <span className="flex-shrink-0 mr-4">
                <FaHandshake className="text-purple-500 text-xl" />
              </span>
              <span className="text-lg">Car pickup and payment</span>
            </li>
          </ul>
        </div>

        <div className="w-[100vw] block md:w-[40vw] md:inline-block align-top">
          <div className="font-semibold text-2xl my-8 ml-4 md:ml-10">
            Why Sell Your Car To Us?
          </div>
          <ul className="space-y-4 ml-6 md:ml-14">
            <li className="flex items-center py-2">
              <span className="flex-shrink-0 mr-4">
                <FaCoins className="text-green-500 text-lg" />
              </span>
              <span className="text-lg">Best price</span>
            </li>
            <li className="flex items-center py-2">
              <span className="flex-shrink-0 mr-4">
                <FaClipboardCheck className="text-blue-500 text-lg" />
              </span>
              <span className="text-lg">Hassle-free documentation</span>
            </li>
            <li className="flex items-center py-2">
              <span className="flex-shrink-0 mr-4">
                <FaMoneyCheckAlt className="text-yellow-500 text-lg" />
              </span>
              <span className="text-lg">Instant Payment</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="font-semibold text-2xl mt-8 pl-6 lg:pl-12">FAQs</div>
      <p className="text-gray-500 text-sm ml-6 md:text-lg md:ml-10 my-4 dark:text-gray-400">
        Please reach out to us if your queries are not answered below.
      </p>
      <div className="ml-6 md:ml-10 pb-4">
        {sellFAQData.map((item) => (
          <FaqCard
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
      <div>
        <FeaturedCars />
      </div>
      {showModal && (
        <>
          <div className="fixed inset-0 text-lg bg-black bg-opacity-50 z-10"></div>
          <div className="fixed top-1/4 left-1/2 transform text-black -translate-x-1/2 bg-white z-20 p-8 rounded text-center">
            <h4 className="font-semibold">
              Thank You for submitting your car details!
            </h4>
            <p className="text-sm">Our executive will reach out to you soon!</p>
          </div>
        </>
      )}
    </div>
  )
}

export default SellRequestForm
