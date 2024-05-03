'use client'
import React, { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import axios from 'axios'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'

import honda from '../../images/brands/Honda.png'
import hyundai from '../../images/brands/hyundai.png'
import kia from '../../images/brands/kia.png'
import mahindra from '../../images/brands/mahindra.png'
import tata from '../../images/brands/tata.png'
import maruti from '../../images/brands/maruti.png'
import marutisuzuki from '../../images/brands/suzuki.png'
import volkswagen from '../../images/brands/Volkswagen.png'
import Image from 'next/image'

const ButtonRow = ({ items }) => (
  <div className="flex flex-wrap gap-4">
    {items.map((item, index) => (
      <div
        key={index}
        className="bg-blue-500 text-white rounded-md px-4 py-2 text-center cursor-pointer"
      >
        {item}
      </div>
    ))}
  </div>
)

const ButtonCard = ({ item }) => (
  <div className="bg-white shadow-md rounded-lg p-4 w-40 hover:bg-gray-300 cursor-pointer">
    <div className="text-center ">{item}</div>
  </div>
)

const BrandCard = ({ logoUrl }) => (
  <div className="flex flex-col items-center justify-center bg-white cursor-pointer shadow-md rounded-lg p-3 hover:bg-gray-300">
    <Image
      src={logoUrl}
      alt="brand"
      className="h-16 w-16 object-contain"
      width={60}
      height={60}
    />
  </div>
)
const BrandScrollContainer = () => {
  return (
    <span className="md:flex overflow-x-auto py-2 gap-x-5 inline">
      <BrandCard logoUrl={honda} />
      <BrandCard logoUrl={hyundai} />
      <BrandCard logoUrl={kia} />
      <BrandCard logoUrl={mahindra} />
      <BrandCard logoUrl={tata} />
      <BrandCard logoUrl={maruti} />
      <BrandCard logoUrl={marutisuzuki} />
      <BrandCard logoUrl={volkswagen} />
    </span>
  )
}

const ButtonRows = () => {
  const [loading, setLoading] = useState(true)
  const [types, setTypes] = useState([])
  const url = 'https://real-value-server.vercel.app/'
  const [isDesktop, setDesktop] = useState(false)

  const updateComponent = () => {
    setDesktop(window.innerWidth > 1024)
  }

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setDesktop(true)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', updateComponent)
    return () => window.removeEventListener('resize', updateComponent)
  })

  const fetchAllTypes = async () => {
    try {
      const response = await axios.get(url + 'api/listings/types')
      if (response.data) {
        setTypes(response.data)
        setLoading(false)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    fetchAllTypes()
  }, [])

  return (
    <section className="pt-16 pb-14 bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-4xl font-bold mb-5 text-gray-900">
            Find your dream car.
          </h2>
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center p-2">
          <Oval color="#000" height={50} width={50} />
        </div>
      ) : (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold mb-3 text-gray-600">Brands</h3>
            {isDesktop ? (
              <BrandScrollContainer />
            ) : (
              <Swiper
                slidesPerView={3.5}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiperCloudBrands"
              >
                <SwiperSlide style={{ paddingBottom: '40px' }}>
                  <BrandCard logoUrl={honda} />
                </SwiperSlide>
                <SwiperSlide style={{ paddingBottom: '40px' }}>
                  <BrandCard logoUrl={hyundai} />
                </SwiperSlide>
                <SwiperSlide style={{ paddingBottom: '40px' }}>
                  <BrandCard logoUrl={kia} />
                </SwiperSlide>
                <SwiperSlide style={{ paddingBottom: '40px' }}>
                  <BrandCard logoUrl={mahindra} />
                </SwiperSlide>
                <SwiperSlide style={{ paddingBottom: '40px' }}>
                  <BrandCard logoUrl={tata} />
                </SwiperSlide>
                <SwiperSlide style={{ paddingBottom: '40px' }}>
                  <BrandCard logoUrl={maruti} />
                </SwiperSlide>
                <SwiperSlide style={{ paddingBottom: '40px' }}>
                  <BrandCard logoUrl={marutisuzuki} />
                </SwiperSlide>
                <SwiperSlide style={{ paddingBottom: '40px' }}>
                  <BrandCard logoUrl={volkswagen} />
                </SwiperSlide>
              </Swiper>
            )}
            <h3 className="text-2xl font-bold mb-3 mt-8 text-gray-600">
              Types
            </h3>
            <div className="flex flex-wrap gap-4">
              {isDesktop ? (
                types.map((type, index) => (
                  <ButtonCard key={index} item={type} />
                ))
              ) : (
                <Swiper
                  slidesPerView={1.5}
                  spaceBetween={50}
                  freeMode={true}
                  modules={[FreeMode]}
                  className="mySwiperCloud"
                >
                  {types.map((type, index) => (
                    <SwiperSlide key={index} style={{ paddingBottom: '40px' }}>
                      <ButtonCard item={type} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            <h3 className="text-2xl font-bold mb-3 mt-8 text-gray-600">
              Price Range
            </h3>
            <div className="flex flex-wrap gap-4">
              {isDesktop ? (
                <>
                  <ButtonCard item="< 4 Lakh" />
                  <ButtonCard item="4 - 8 Lakh" />
                  <ButtonCard item="> 8 Lakh" />
                </>
              ) : (
                <Swiper
                  slidesPerView={1.5}
                  spaceBetween={50}
                  freeMode={true}
                  modules={[FreeMode]}
                  className="mySwiperCloudPrice"
                >
                  {types.map((type, index) => (
                    <SwiperSlide key={index} style={{ paddingBottom: '40px' }}>
                      <ButtonCard item={type} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default ButtonRows
