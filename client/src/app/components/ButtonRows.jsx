'use client'
import React, { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import axios from 'axios'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'


import audi from '@/images/brands/audi.png'
import bmw from '@/images/brands/bmw.png'
import fiat from '@/images/brands/fiat.png'
import ford from '@/images/brands/ford.png'
import honda from '../../images/brands/honda.png'
import hyundai from '@/images/brands/hyundai.png'
import jeep from '@/images/brands/jeep.png'
import kia from '@/images/brands/kia.png'
import land_rover from '@/images/brands/land_rover.png'
import mahindra from '@/images/brands/mahindra.png'
import mercedes from '@/images/brands/mercedes.png'
import mg from '@/images/brands/mg.png'
import nissan from '@/images/brands/nissan.png'
import renault from '@/images/brands/renault.png'
import skoda from '@/images/brands/skoda.png'
import suzuki from '@/images/brands/suzuki.png'
import tata from '@/images/brands/tata.png'
import volkswagen from '@/images/brands/volkswagen.png'
import volvo from '@/images/brands/volvo.png'

import Image from 'next/image'

const budgetsMapping = {
  '<4 Lakh': '0-400000',
  '4-8 Lakh': '400000-800000',
  '>8 Lakh': '800000',
}
const handleBtnClick = (item, type) => {
  let tempObj = {}
  if (type == 'Budget') {
    tempObj = {
      [type]: budgetsMapping[item.trim()],
    }
  } else {
    tempObj = {
      [type]: item,
    }
  }
  localStorage.setItem('filters', JSON.stringify(tempObj))
  if (item == '') {
    localStorage.removeItem('filters')
  }

  window.location.href = '/buy'
}

const handleBrandClick = (item) => {
  const tempObj = {
    Brand: item,
  }
  localStorage.setItem('filters', JSON.stringify(tempObj))
  if (item == '') {
    localStorage.removeItem('filters')
  }
  window.location.href = '/buy'
}

const ButtonCard = ({ item, type }) => (
  <div
    className="bg-white shadow-md rounded-lg p-4 w-40 hover:bg-gray-300 cursor-pointer"
    onClick={() => handleBtnClick(item, type)}
  >
    <div className="text-center ">{item}</div>
  </div>
)

const BrandCard = ({ logoUrl, name }) => (
  <div
    className="flex flex-col md:inline-block md:mx-4 items-center justify-center bg-white cursor-pointer shadow-md rounded-lg p-3 hover:bg-gray-300"
    onClick={() => handleBrandClick(name)}
  >
    <Image
      src={logoUrl}
      alt="brand"
      className="h-16 w-16 object-contain"
      width={60}
      height={60}
    />
  </div>
)
const BrandScrollContainer = ({ brands, brandsMapping }) => {
  return (
    <span className="flex md:block overflow-x-auto py-2 gap-x-5 inline">
      {brands.map(
        (brand, i) =>
          brandsMapping[brand] && (
            <BrandCard logoUrl={brandsMapping[brand]} key={i} name={brand} />
          ),
      )}
      <div
        className="flex flex-col md:inline-block align-top bg-yellow-400 md:py-8 md:mx-4 items-center justify-center  cursor-pointer shadow-md rounded-lg p-3 hover:bg-yellow-500"
        onClick={() => handleBrandClick('')}
      >
        View All
      </div>
    </span>
  )
}

const ButtonRows = () => {
  const [loading, setLoading] = useState(true)
  const [types, setTypes] = useState([])
  const [brands, setBrands] = useState([])

  const brandsMapping = {
    Maruti: suzuki,
    Mahindra: mahindra,
    Hyundai: hyundai,
    Tata: tata,
    Honda: honda,
    Volkswagen: volkswagen,
    Audi: audi,
  }
  
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

  const fetchAllBrands = async () => {
    try {
      const response = await axios.get(url + 'api/listings/brands')
      if (response.data) {
        setBrands(response.data)
        setLoading(false)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    fetchAllTypes()
    fetchAllBrands()
  }, [])

  return (
    <section className="pt-8 pb-8 bg-white text-gray-900">
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
              <BrandScrollContainer
                brands={Object.keys(brandsMapping)}
                brandsMapping={brandsMapping}
              />
            ) : (
              <Swiper
                slidesPerView={3.5}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiperCloudBrands"
              >
                {Object.keys(brandsMapping).map(
                  (brand, i) =>
                    brandsMapping[brand] && (
                      <SwiperSlide style={{ paddingBottom: '40px' }} key={i}>
                        <BrandCard
                          logoUrl={brandsMapping[brand]}
                          name={brand}
                        />
                      </SwiperSlide>
                    ),
                )}
                <SwiperSlide style={{ paddingBottom: '40px' }}>
                  <div
                    className="flex flex-col w-max px-2 items-center py-8 justify-center  cursor-pointer shadow-md rounded-lg p-3 bg-yellow-400 hover:bg-yellow-500"
                    onClick={() => handleBrandClick('')}
                  >
                    View All
                  </div>
                </SwiperSlide>
              </Swiper>
            )}
            <h3 className="text-2xl font-bold mb-3 mt-8 text-gray-600">
              Types
            </h3>
            <div className="flex flex-wrap gap-4">
              {isDesktop ? (
                <>
                  {types.map((type, index) => (
                    <ButtonCard key={index} item={type} type={'Segment'} />
                  ))}
                  <div
                    className="bg-yellow-400 shadow-md rounded-lg p-4 w-40 hover:bg-yellow-500 cursor-pointer"
                    onClick={() => handleBtnClick('', 'Segment')}
                  >
                    <div className="text-center ">View All</div>
                  </div>
                </>
              ) : (
                <Swiper
                  slidesPerView={2.2}
                  spaceBetween={50}
                  freeMode={true}
                  modules={[FreeMode]}
                  className="mySwiperCloud"
                >
                  {types.map((type, index) => (
                    <SwiperSlide key={index} style={{ paddingBottom: '40px' }}>
                      <ButtonCard item={type} type={'Segment'} />
                    </SwiperSlide>
                  ))}
                  <SwiperSlide key={'all'} style={{ paddingBottom: '40px' }}>
                    <div
                      className="bg-yellow-400 shadow-md rounded-lg p-4 w-40 hover:bg-yellow-500 cursor-pointer"
                      onClick={() => handleBtnClick('', 'type')}
                    >
                      <div className="text-center ">View All</div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              )}
            </div>
            <h3 className="text-2xl font-bold mb-3 mt-8 text-gray-600">
              Price Range
            </h3>
            <div className="flex flex-wrap gap-4">
              {isDesktop ? (
                <>
                  <ButtonCard item="<4 Lakh" type={'Budget'} />
                  <ButtonCard item="4-8 Lakh" type={'Budget'} />
                  <ButtonCard item=">8 Lakh" type={'Budget'} />
                </>
              ) : (
                <Swiper
                  slidesPerView={2.2}
                  spaceBetween={50}
                  freeMode={true}
                  modules={[FreeMode]}
                  className="mySwiperCloudPrice"
                >
                  <SwiperSlide style={{ paddingBottom: '40px' }}>
                    <ButtonCard item="< 4 Lakh" type={'Budget'} />
                  </SwiperSlide>
                  <SwiperSlide style={{ paddingBottom: '40px' }}>
                    <ButtonCard item="4 - 8 Lakh" type={'Budget'} />
                  </SwiperSlide>
                  <SwiperSlide style={{ paddingBottom: '40px' }}>
                    <ButtonCard item="> 8 Lakh" type={'Budget'} />
                  </SwiperSlide>
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
