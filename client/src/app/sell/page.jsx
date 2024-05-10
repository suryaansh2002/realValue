'use client'
import { useState } from 'react'
import styles from '../styles/Sell.module.css'
import axios from 'axios'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { XMarkIcon } from '@heroicons/react/24/outline'
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
import Faq from '../components/Faq'
import steps1 from '@/images/sell/steps1.jpeg'
import steps2 from '@/images/sell/steps2.jpeg'
import steps3 from '@/images/sell/steps3.jpeg'
import steps4 from '@/images/sell/steps4.jpeg'
import why1 from '@/images/sell/why1.jpeg'
import why2 from '@/images/sell/why2.jpeg'
import why3 from '@/images/sell/why3.jpeg'
import Image from 'next/image'




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

  const stepsToSell = [
    {
      title: 'Digital Verification',
      subTitle: 'Submit the above form',
      image: steps1,
    },
    {
      title: 'Call Our Purchase Expert',
      subTitle: 'Get valuation instantly',
      image: steps2,
    },
    {
      title: 'Physical Inspection',
      subTitle: '',
      image: steps3,
    },
    {
      title: 'Car Pickup and Payment',
      subTitle: '',
      image: steps4,
    },
  ]

  const whySellToUs = [
    {
      title: 'Best Price',
      image: why1,
    },
    {
      title: 'Hassle Free',
      image: why2,
    },
    {
      title: 'Instant Payment',
      image: why3,
    },
  ]

  return (
    <div className="text-left pt-4 bg-gray-900 text-white overflow-x-hidden">
      <div className="text-left ml-8 mb-4 pt-4 md:text-3xl text-2xl font-bold">
        Sell Quick With Real Value
      </div>
      <div className="h-[70vh] border-2 border-white rounded-md relative md:w-[50%] w-[80%] mt-8 ml-8">
        <div className="">
          <div className="md:text-2xl text-xl font-bold p-4">
            Sell Your Car Within 30 Minutes!
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="hover:bg-yellow-500 hover:text-gray-900 text-xl  border border-white-900  text-whitew-max md:px-16 md:py-4 px-10 py-2 w-max rounded-lg md:mx-0 ml-[50%] -translate-x-[50%] md:translate-x-0 md:absolute bottom-4 left-4"
          >
            Get Valuation!
            {/* {showForm ? (
            <FaChevronUp className="inline-block align-text-top translate-y-05" />
          ) : (
            <FaChevronDown className="inline-block align-text-top translate-y-0.5" />
          )} */}
          </button>
        </div>
      </div>

      {showForm && (
        <div className="border-white border-2 p-4 rounded-md mt-4  md:max-w-screen-md absolute top-[20vh] bg-gray-900 ml-[50%] -translate-x-[50%]  w-[90vw] z-20">
          <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
            <div className="text-right pr-4">
              <button onClick={() => setShowForm(false)}>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div>
              <div className="md:inline-block md:w-[50%] md:px-2 md:py-0 py-3">
                <label className="font-normal text-sm">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded text-black w-full"
                  required
                />
              </div>
              <div className="md:inline-block md:w-[50%] md:px-2 md:py-0 py-3">
                <label className="font-normal text-sm">Phone Number *</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                />
              </div>
            </div>

            <div>
              <div className="md:inline-block md:w-[50%] md:px-2 md:py-0 py-3">
                <label className="font-normal text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                />
              </div>
              <div className="md:inline-block md:w-[50%] md:px-2 md:py-0 py-3">
                <label className="font-normal text-sm">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                />
              </div>
            </div>

            <div>
              <div className="md:inline-block md:w-[50%] md:px-2 md:py-0 py-3">
                <label className="font-normal text-sm">
                  Registration Number *
                </label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                />
              </div>

              <div className="md:inline-block md:w-[50%] md:px-2 md:py-0 py-3">
                <label className="font-normal text-sm">Brand *</label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                />
              </div>
            </div>

            <div>
              <div className="md:inline-block md:w-[50%] md:px-2 md:py-0 py-3">
                <label className="font-normal text-sm">Model *</label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                />
              </div>
              <div className="md:inline-block md:w-[50%] md:px-2 md:py-0 py-3">
                <label className="font-normal text-sm">Variant</label>
                <input
                  type="text"
                  name="variant"
                  value={formData.variant}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                />
              </div>
            </div>

            <div>
              <div className="md:inline-block md:w-[50%] md:px-2 md:py-0 py-3">
                <label className="font-normal text-sm">
                  Manufacture Year *
                </label>
                <input
                  type="number"
                  name="manufactureYear"
                  value={formData.manufactureYear}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                />
              </div>
              <div className="md:inline-block md:w-[50%] md:px-2 md:py-0 py-3">
                <label className="font-normal text-sm">Kilometers *</label>
                <input
                  type="number"
                  name="kilometers"
                  value={formData.kilometers}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  required
                />
              </div>
            </div>

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

      <div className="">
        <div className="font-semibold text-2xl my-8 ml-4 md:ml-8 mt-20">
          4 Steps To Sell Your Car
        </div>
        <div className="mx-4 ml-0 md:ml-4">
          {stepsToSell.map((step, index) => (
            <div className="md:inline-block block w-[20rem] bg-white p-4 rounded-lg shadow-md align-top mx-4 md:my-0 my-4 hover:scale-105  hover:shadow-xl  transition-transform duration-200">
              <div className="">
                <Image src={step.image}/>
              </div>
              {/* <div className="p-2 text-xl font-semibold text-gray-900">
                {index + 1} {step.title}
              </div>
              {step.subTitle.length ? (
                <div className="text-md pl-2 text-gray-500">
                  {step.subTitle}
                </div>
              ) : (
                <div className="h-[1.5rem]"></div>
              )} */}
            </div>
          ))}
        </div>
      </div>

      <div className="my-4">
        <div className="font-semibold text-2xl my-8 ml-4 md:ml-10">
          Why Sell Your Car To Us
        </div>
        <div className="mx-4 ml-0 md:ml-4">
          {whySellToUs.map((step, index) => (
            <div className="md:inline-block block md:w-[25rem] w-[20rem] bg-white p-4 rounded-lg shadow-md align-top mx-4 md:my-0 my-4 hover:scale-105  hover:shadow-xl  transition-transform duration-200">
              <Image src={step.image}/>
              {/* <div className="p-2 text-xl font-semibold text-gray-900 w-max">
                {/* <span className="bg-gray-900 text-white rounded-full px-5 py-4 h-6 mr-2">
                  {' '}
                  {index + 1}{' '}
                </span>{' '} *
                {/* {step.title} 
              </div> */}
            </div>
          ))}
        </div>
      </div>

     
      <Faq FAQs={sellFAQData} title="Sell related" />
    
      {(showForm || showModal) && (
        <div className="fixed inset-0 text-lg bg-black bg-opacity-50 z-10"></div>
      )}
      {showModal && (
        <>
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
