'use client'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import FeaturedCard from '../components/FeaturedCard'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Checkbox, Slider, Select, Spin } from 'antd'
import { FaFilter } from 'react-icons/fa'
import { AmountWithCommas } from '../utils'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
// import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const { Option } = Select

export default function Buy() {
  const [listings, setListings] = useState([])
  const [brands, setBrands] = useState([])
  const [filters, setFilters] = useState({})
  const [loading, setLoading] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [seatsCount, setSeatsCount] = useState([])
  useEffect(() => {
    console.log(filters)
  }, [filters])
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
  // url = 'http://localhost:5000/'

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

  const handleSubmit = async () => {
    console.log(filters)
    setShowFilters(false)
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
    await fetchFilteredListings(tempFilters)
  }

  const fetchFilteredListings = async (filters) => {
    try {
      setLoading(true)
      const response = await axios.post(url + 'api/listings/filtered', filters)
      if (response.data) {
        console.log(response.data)
        setListings(response.data)
      }
      setLoading(false)
    } catch (e) {
      setLoading(false)
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

  const [selectedOption, setSelectedOption] = useState('')
  const sortListings = (key, order) => {
    const tempListings = [...listings]
    tempListings.sort((a, b) => {
      if (order === 'asc') {
        return a[key] - b[key]
      } else if (order === 'desc') {
        return b[key] - a[key]
      }
      return 0
    })
    setListings(tempListings)
  }
  const handleSort = (value) => {
    setSelectedOption(value)
    console.log(value)
    if (value.length) {
      let params = value.split('_')
      sortListings(params[0], params[1])
      console.log(params)
    }
  }

  const kmsDrivenRange = [0, 100000]
  const budgetRange = [0, 1500000]
  const yearRange = [2010, new Date().getFullYear()]
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
              <Checkbox.Group
                defaultValue={filters['brand']}
                onChange={handleBrandChange}
              >
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
                defaultValue={filters['budget'] || budgetRange}
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
                defaultValue={filters['modelYear'] || yearRange}
                min={2010}
                max={new Date().getFullYear()}
                step={1}
                onChange={handleModelYearChange}
              />
            </div>

            {/* Fuel Type */}
            <div>
              <h3 className="font-bold">Fuel Type:</h3>
              <Checkbox.Group
                onChange={handleFuelTypeChange}
                defaultValue={filters['fuelType']}
              >
                <Checkbox value="Petrol">Petrol</Checkbox>
                <Checkbox value="Diesel">Diesel</Checkbox>
                <Checkbox value="CNG">CNG</Checkbox>
              </Checkbox.Group>
            </div>

            {/* Transmission Type */}
            <div>
              <h3 className="font-bold">Transmission Type:</h3>
              <Checkbox.Group
                onChange={handleTransmissionTypeChange}
                defaultValue={filters['transmissionType']}
              >
                <Checkbox value="automatic">Automatic</Checkbox>
                <Checkbox value="manual">Manual</Checkbox>
              </Checkbox.Group>
            </div>

            {/* Owners */}
            <div>
              <h3 className="font-bold">Owners:</h3>
              <Select
                defaultValue={filters['owners'] ? filters['owners'] : 'Any'}
                onChange={handleOwnersChange}
              >
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
                defaultValue={filters['kmsDriven'] || kmsDrivenRange}
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
              <Checkbox.Group
                defaultValue={filters['seats']}
                onChange={handleSeatsChange}
              >
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
      <div className="text-center mt-8">
        <Select
          className="border border-gray-300 ml-4 text-lg md:ml-12 rounded px-16 w-[12rem] py-8 mt-4 md:translate-x-6 translate-x-2"
          value={selectedOption}
          onChange={handleSort}
        >
          <Option value="">
            <span>Sort By...</span>
            {/* <ArrowUpOutlined /> */}
          </Option>
          <Option value="price_asc">
            <span>Price: Low to High</span>
          </Option>
          <Option value="price_desc">
            <span>Price: High to Low</span>
          </Option>
          <Option value="kmDriven_asc">
            <span>KM Driven: Low to High</span>
          </Option>
          <Option value="kmDriven_desc">
            <span>KM Driven: High to Low</span>
          </Option>
          <Option value="year_asc">
            <span>Year: Low to High</span>
          </Option>
          <Option value="year_desc">
            <span>Year: High to Low</span>
          </Option>
        </Select>
      </div>
      {loading ? (
        <div className="text-center mt-8 mb-12">
          <Spin size="large" />
        </div>
      ) : listings.length == 0 ? (
        <div className="text-lg font-semibold text-left ml-8 h-[70vh] p-4">
          No vehicles match these filters
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8 px-8 mb-12">
          {listings.map((car) => (
            <FeaturedCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  )
}
