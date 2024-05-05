'use client'
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { AmountWithCommas } from '@/app/utils'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

// Icons
import { BiCylinder } from 'react-icons/bi'
import { FaBoltLightning } from 'react-icons/fa6'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'
import { BsFuelPumpFill } from 'react-icons/bs'
import { PiGearSixFill } from 'react-icons/pi'
import mileage from '@/images/specs/mileage.png'
import disp from '@/images/specs/disp.png'
import trunk from '@/images/specs/trunk.png'

// EMI Calculator
import EMICalculator from '@/app/components/EMICalculator'

import { Oval } from 'react-loader-spinner'
import { toTitleCase, getOwnerShipSuffix, EMICalcLite } from '@/app/utils'

// BookingCard imports
import { Tabs, Modal } from 'antd'
import BookingCard from '@/app/components/BookingCard'

// import { BsFillFuelPumpFill } from "react-icons/bs";
// import { CiCreditCard1 } from "react-icons/ci";

const page = ({ params: { id } }) => {
  // API call to this route: 662bed523ec1ae8416673630
  const [loading, setLoading] = useState(true)
  const [carData, setCarData] = useState(null)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(null)

  const bookingPOSTURL = 'https://real-value-server.vercel.app/api/bookings'
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  //   Booking Modal
  const showModal = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleChildData = (data) => {
    setConfirmLoading(true)
    axios
      .post(bookingPOSTURL, {
        listingId: id,
        date: data.formattedDate,
        time: data.formattedTime,
        name: data.name,
        mobileNumber: data.mobile,
        email: data.email,
      })
      .then((res) => {
        setSuccess(true)
        setConfirmLoading(false)
        setTimeout(() => {
          setOpen(false)
        }, 2500)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      })
  }

  const getListingURL = `https://real-value-server.vercel.app/api/listings/${id}`

  useEffect(() => {
    axios
      .get(getListingURL)
      .then((res) => {
        setCarData(res.data)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center p-10">
        <Oval color="#000" height={50} width={50} />
      </div>
    )
  }

  if (error) {
    return <div>Error, please try again...</div>
  }

  return (
    <div className="bg-white overflow-x-hidden">
      <div className="pt-6">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                  Cars
                </a>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <a
                  href="/buy"
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  Buy
                </a>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <a
                href="#"
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {carData.brand + ' ' + carData.model}
              </a>
            </li>
          </ol>
        </nav>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className="myIndividualCarSwiper"
          slidesPerView={1}
          spaceBetween={5}
          navigation
          loop={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 5 },
            1024: { slidesPerView: 4, spaceBetween: 5 },
          }}
        >
          {carData.images &&
            carData.images.map((carImage, i) => (
              <SwiperSlide key={i} style={{ paddingBottom: '40px' }}>
                <Image
                  src={carImage}
                  alt="car-img"
                  width={600}
                  height={400}
                  style={{ borderRadius: '15px' }}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        {/* <!-- Product info --> */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {`${carData.year}
                ${carData.brand} 
                ${carData.model}
                ${carData.variant}`}
            </h1>
            <div
              className="mt-2"
              style={{
                display: 'grid',
                gap: '5px',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr)',
              }}
            >
              <span className="flex items-center justify-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {carData.fuelType}
              </span>
              <span className="flex items-center justify-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {carData.vehicleNumber}
              </span>
              <span className="flex items-center justify-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {toTitleCase(carData.transmissionType)}
              </span>
              <span className="flex items-center justify-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {getOwnerShipSuffix(carData.ownership)}
              </span>
              <span className="flex items-center justify-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 w-full">
                {`${carData.type}`}
              </span>
              <span className="flex items-center justify-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {`${carData.kmDriven}km`}
              </span>
            </div>
          </div>

          <div className="mt-8 lg:row-span-3 lg:mt-0">
            <p className="text-3xl tracking-tight text-gray-900">
              <span className="font-light">Price: </span>
              <span className="font-semibold">
                ₹{AmountWithCommas(carData.price)}
              </span>
            </p>

            <p className="text-lg font-bold text-gray-900 mt-8">
              EMI starts at ₹
              {AmountWithCommas(EMICalcLite(carData.price, 11, 36))}/month
            </p>

            {/* Zero downpayment with yelllow underline */}
            <p className="text-lg font-semibold text-gray-500">
              Zero downpayment
            </p>

            <button
              className="mt-10 flex w-full items-center justify-center rounded-md border border-yellow-500 text-white bg-yellow-500 px-8 py-3 text-base font-medium  hover:bg-yellow-600 hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:!ring-yellow-500 focus:ring-offset-1"
              onClick={showModal}
            >
              Book Test Drive
            </button>
            <Modal
              title="Book Test Drive"
              open={open}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
              footer={null}
            >
              {confirmLoading ? (
                <>
                  <BookingCard sendDataToParent={handleChildData} />
                  <div className="p-5 flex items-center justify-center">
                    <Oval color="#000" height={50} width={50} />
                  </div>
                </>
              ) : success ? (
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-10 w-10 text-green-500 mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p>Booking successful!</p>
                </div>
              ) : (
                <BookingCard sendDataToParent={handleChildData} />
              )}
            </Modal>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details about car */}
            {/* <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">Description</p>
              </div>
            </div> */}

            <div className="mt-2">
              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Features
                </h2>
                <ul>
                  {carData.features &&
                    carData.features.map((feature, i) => (
                      <li
                        key={i}
                        className="
                        md:inline-block md:mr-4 md:w-max md:ml-0 md:translate-x-0
                        block w-[80%] my-2 ml-[50%] -translate-x-[50%] py-2
                        text-gray-700 inline-block bg-gray-300 rounded-full px-3 md:py-1 text-sm font-semibold text-center"
                      >
                        {feature}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Specifications
                </h2>
                <div>
                  {carData.displacement && (
                    <div className="inline-block my-3 md:w-[45%] ">
                      <div className="px-2 inline">
                        <Image
                          src={disp}
                          alt="disp"
                          width={30}
                          height={30}
                          className="inline  mr-2"
                        />
                        <span className="text-gray-700 inline">
                          <span className="font-bold">Displacement</span>:{' '}
                          {carData.displacement} cc
                        </span>
                      </div>
                    </div>
                  )}

                  {carData.cylinders && (
                    <div className="items-center inline-block my-3 md:w-[45%] ">
                      <div className="px-2 inline">
                        <BiCylinder
                          size={20}
                          className="text-gray-600 mx-1 mr-4 inline"
                        />
                        <span className="text-gray-700 inline">
                          <span className="font-bold">No. of cylinders</span>:
                          {carData.cylinders}
                        </span>
                      </div>
                    </div>
                  )}

                  {carData.maxPower && (
                    <div className="items-center inline-block my-3 md:w-[45%] ">
                      <div className="px-2 inline">
                        <FaBoltLightning
                          size={20}
                          className="text-gray-600 mx-1 mr-4 inline"
                        />
                        <span className="text-gray-700 inline">
                          <span className="font-bold">Max Power</span>:{' '}
                          {carData.maxPower} BHP
                        </span>
                      </div>
                    </div>
                  )}

                  {carData.seats && (
                    <div className="items-center inline-block my-3 md:w-[45%] ">
                      <div className="px-2 inline">
                        <MdAirlineSeatReclineNormal
                          size={30}
                          className="text-gray-600 mx-1 mr-2 inline"
                        />
                        <span className="text-gray-700 inline">
                          <span className="font-bold">Seats</span>:{' '}
                          {carData.seats}
                        </span>
                      </div>
                    </div>
                  )}

                  {carData.bootspace && (
                    <div className="items-center inline-block my-3 md:w-[45%] ">
                      <div className="px-2 inline">
                        <Image
                          src={trunk}
                          alt="trunk"
                          className="inline mx-2 mr-4"
                          width={20}
                          height={20}
                        />
                        <span className="text-gray-700 inline">
                          <span className="font-bold">Bootspace</span>:{' '}
                          {carData.bootspace} L
                        </span>
                      </div>
                    </div>
                  )}

                  {carData.fuelTank && (
                    <div className="items-center inline-block my-3 md:w-[45%] ">
                      <div className="px-2 inline">
                        <BsFuelPumpFill
                          size={20}
                          className="text-gray-600 mx-2 mr-4 inline"
                        />
                        <span className="text-gray-700 inline">
                          <span className="font-bold">Fuel-Tank</span>:{' '}
                          {carData.fuelTank} L
                        </span>
                      </div>
                    </div>
                  )}

                  {carData.gears && (
                    <div className="items-center inline-block my-3 md:w-[45%] ">
                      <div className="px-2 inline">
                        <PiGearSixFill
                          size={20}
                          className="text-gray-600 inline mx-2 mr-4"
                        />
                        <span className="text-gray-700 inline">
                          <span className="font-bold">No. of Gears</span>:{' '}
                          {carData.gears}
                        </span>
                      </div>
                    </div>
                  )}

                  {carData.mileage && (
                    <div className="items-center inline-block my-3 md:w-[45%] ">
                      <div className="px-2 inline">
                        <Image
                          src={mileage}
                          alt="mileage"
                          width={30}
                          height={30}
                          className="inline mx-1 mr-2"
                        />
                        <span className="text-gray-700 inline">
                          <span className="font-bold">Mileage</span>:{' '}
                          {carData.mileage} kmpl
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* <div>
              <Tabs
                defaultActiveKey="1"
                type="card"
                size="middle"
                items={new Array(3).fill(null).map((_, i) => {
                  const id = String(i + 1)
                  return {
                    label: `Card Tab ${id}`,
                    key: id,
                    children: `Content of card tab ${id}`,
                  }
                })}
              />
            </div> */}

            <EMICalculator indiPrincipal={carData.price} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
