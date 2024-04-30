'use client'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import FeaturedCard from '../components/FeaturedCard'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Checkbox, Slider, Select } from 'antd'
import { FaFilter } from 'react-icons/fa'
import { AmountWithCommas } from '../utils'

const { Option } = Select

export default function Buy() {
  const [listings, setListings] = useState([])
  const [brands, setBrands] = useState([])
  const [filters, setFilters] = useState({})
  const [loading, setLoading] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [seatsCount, setSeatsCount] = useState([])

  const handleBrandChange = (checkedValues) => {
    setFilters({ ...filters, brand: checkedValues })
  }

  const handleBudgetChange = (value) => {
    setFilters({ ...filters, budget: value })
  }

  const handleModelYearChange = (value) => {
    setFilters({ ...filters, modelYear: value })
  }

  const handleFuelTypeChange = (checkedValues) => {
    setFilters({ ...filters, fuelType: checkedValues })
  }

  const handleTransmissionTypeChange = (checkedValues) => {
    setFilters({ ...filters, transmissionType: checkedValues })
  }

  const handleOwnersChange = (value) => {
    setFilters({ ...filters, owners: value })
  }

  const handleKmsDrivenChange = (value) => {
    setFilters({ ...filters, kmsDriven: value })
  }

  const handleSeatsChange = (checkedValues) => {
    setFilters({ ...filters, seats: checkedValues })
  }
  const sliderFormatter = (value) => {
    if (value) return AmountWithCommas(value)
  }

  let url = 'https://real-value-server.vercel.app/'
  url = 'http://localhost:5000/'

  const fetchAllListings = async () => {
    try {
      setLoading(true)
      const response = await axios.get(url + 'api/listings')
      if (response.data) {
        setListings(response.data)
      }
      setLoading(false)
    } catch (e) {
      console.log(e.message)
      setLoading(false)
    }
  }

  const fetchAllBrands = async () => {
    try {
      const response = await axios.get(url + 'api/listings/brands')
      if (response.data) {
        response.data.sort()
        setBrands(response.data)
      }
    } catch (e) {
      console.log(e.message)
    }
  }
  const fetchAllSeats = async () => {
    try {
      const response = await axios.get(url + 'api/listings/seats')
      if (response.data) {
        response.data.sort()
        setSeatsCount(response.data)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  const handleSubmit = () => {
    console.log(filters)
    let tempFilters = { ...filters }
    if (tempFilters['owners']) {
      if (tempFilters['owners'] == 'Any') {
        delete tempFilters['owners']
      } else {
        tempFilters['owners'] = parseInt(tempFilters['owners'])
      }
    }
    if (tempFilters['seats']) {
      let seatsArr = []
      tempFilters['seats'].map((count) => {
        seatsArr.push(parseInt(count))
      })
      tempFilters['seats'] = seatsArr
    }
    console.log(tempFilters)
    fetchFilteredListings(tempFilters)
  }

  const fetchFilteredListings = async (filters) => {
    try {
      const response = await axios.post(url + 'api/listings/filtered', filters)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('filters')) {
    }
    fetchAllListings()
    fetchAllBrands()
    fetchAllSeats()
  }, [])

  return (
    <div>
      <div className="text-center">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="border border-gray-300 ml-4 md:ml-12 rounded px-16 py-2 mt-4"
        >
          <FaFilter className="inline-block text-sm mr-1" /> Filter
          {showFilters ? (
            <FaChevronUp className="inline-block ml-4 text-sm" />
          ) : (
            <FaChevronDown className="inline-block ml-4 text-sm" />
          )}
        </button>
      </div>
      {showFilters && (
        <div className="w-[90vw] md:w-[50vw] p-4 border-2 border-gray-500 rounded-md ml-[50%] -translate-x-[50%] mt-2 !absolute z-10 bg-white">
          <div className="space-y-4">
            {/* Brand */}
            <div>
              <h3 className="font-bold">Brand:</h3>
              <Checkbox.Group onChange={handleBrandChange}>
                {brands.map((brand) => (
                  <Checkbox value={brand}>{brand}</Checkbox>
                ))}
              </Checkbox.Group>
            </div>

            {/* Budget */}
            <div>
              <h3 className="font-bold">Budget:</h3>
              <Slider
                range
                defaultValue={[0, 1500000]}
                min={0}
                max={1500000}
                step={1000}
                tooltip={{
                  formatter: sliderFormatter,
                }}
                onChange={handleBudgetChange}
              />
              {/* Adjust defaultValue and range as needed */}
            </div>

            {/* Model Year */}
            <div>
              <h3 className="font-bold">Model Year:</h3>
              <Slider
                range
                defaultValue={[2010, new Date().getFullYear()]}
                min={2010}
                max={new Date().getFullYear()}
                step={1}
                onChange={handleModelYearChange}
              />
              {/* Adjust defaultValue and range as needed */}
            </div>

            {/* Fuel Type */}
            <div>
              <h3 className="font-bold">Fuel Type:</h3>
              <Checkbox.Group onChange={handleFuelTypeChange}>
                <Checkbox value="Petrol">Petrol</Checkbox>
                <Checkbox value="Diesel">Diesel</Checkbox>
                {/* Add more checkboxes as needed */}
              </Checkbox.Group>
            </div>

            {/* Transmission Type */}
            <div>
              <h3 className="font-bold">Transmission Type:</h3>
              <Checkbox.Group onChange={handleTransmissionTypeChange}>
                <Checkbox value="Automatic">Automatic</Checkbox>
                <Checkbox value="Manual">Manual</Checkbox>
                {/* Add more checkboxes as needed */}
              </Checkbox.Group>
            </div>

            {/* Owners */}
            <div>
              <h3 className="font-bold">Owners:</h3>
              <Select defaultValue="Any" onChange={handleOwnersChange}>
                <Option value="Any">Any</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
            </div>

            {/* Kms Driven */}
            <div>
              <h3 className="font-bold">Kms Driven:</h3>
              <Slider
                range
                defaultValue={[0, 100000]}
                min={0}
                max={100000}
                step={100}
                onChange={handleKmsDrivenChange}
                tooltip={{
                  formatter: sliderFormatter,
                }}
              />
              {/* Adjust defaultValue and range as needed */}
            </div>

            {/* No. of Seats */}
            <div>
              <h3 className="font-bold">No. of Seats:</h3>
              <Checkbox.Group onChange={handleSeatsChange}>
                {seatsCount.map((count) => (
                  <Checkbox value={count}>{count}</Checkbox>
                ))}
              </Checkbox.Group>
            </div>
            <button
              onClick={() => handleSubmit()}
              className="bg-blue-500 hover:bg-yellow-500 text-white px-6 py-2 rounded w-[100%]"
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {loading ? (
        <div>Loading...</div>
      ) : (
        listings && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8 px-8">
            {listings.map((car) => (
              <FeaturedCard key={car.id} car={car} />
            ))}
          </div>
        )
      )}
    </div>
  )
}
