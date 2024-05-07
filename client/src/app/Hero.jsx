'use client'
import React, { useEffect, useState } from 'react'
import carImage2 from '../images/car-image-2.jpg'
import Image from 'next/image'
import ButtonCloud from './components/ButtonCloud'

import audi from '@/images/brands/audi.png'
import honda from '@/images/brands/honda.png'
import hyundai from '@/images/brands/hyundai.png'
import kia from '@/images/brands/kia.png'
import mahindra from '@/images/brands/mahindra.png'
import suzuki from '@/images/brands/suzuki.png'
import tata from '@/images/brands/tata.png'

import axios from 'axios'
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect"
const imageStyles = {
  width: '2.5rem',
  height: '2.5rem',
  display: 'inline',
}

const brandsMapping = {
  Audi: audi,
  Honda: honda,
  Hyundai: hyundai,
  Kia: kia,
  Mahindra: mahindra,
  Tata: tata,
  Maruti: suzuki,
}
const segments = [
  {
    label: 'SUV',
    key: '1',
  },
  {
    label: 'Sedan',
    key: '2',
  },
  {
    label: 'Hatchback',
    key: '3',
  },
  {
    label: 'MUV',
    key: '3',
  },
]

const budgets = [
  {
    label: '<4 Lakh',
    key: '1',
    range: '0-400000',
  },
  {
    label: '4-8 Lakh',
    key: '2',
    range: '400000-800000',
  },
  {
    label: '>8 Lakh',
    key: '3',
    range: '800000',
  },
]

const Hero = () => {
  const [loading, setLoading] = useState(true)
  const [types, setTypes] = useState([])
  const [brands, setBrands] = useState([])
  const url = 'https://real-value-server.vercel.app/'

  const fetchAllTypes = async () => {
    try {
      const response = await axios.get(url + 'api/listings/types')
      if (response.data) {
        const arr = response.data.map((type, index) => {
          return {
            label: type,
            key: `${index + 1}`,
          }
        })
        setTypes(arr)
        setLoading(false)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  const fetchAllBrands = async () => {
    try {
      // const response = await axios.get(url + 'api/listings/brands')
      // if (response.data) {
        // const arr = response.data.map((b, index) => {
        //   return {
        //     label: (
        //       <div>
        //         <Image style={imageStyles} src={brandsMapping[b]} alt={b} /> {b}
        //       </div>
        //     ),
        //     key: `${index + 1}`,
        //   }
        // })
        const arr = Object.keys(brandsMapping).map((b, index) => {
          return {
            label: (
              <div>
                <Image style={imageStyles} src={brandsMapping[b]} alt={b} /> {b}
              </div>
            ),
            key: `${index + 1}`,
          }
        })
        console.log(arr)
        setBrands(arr)
        setLoading(false)
      // }
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    localStorage.removeItem('filters')
    fetchAllBrands()
    fetchAllTypes()
  }, [])

  return (
    <section className="bg-black">
      <div className="grid max-w-screen-xl px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl">
          <TypewriterEffectSmooth words={"Real Value by Poddar Motors".split(' ').map((word)=>{
              return {
                text: word,
                className: "mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-white"
              }
            })}/>
           
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            Your one-stop-shop for buying, selling, and financing cars. We offer
            the best prices and the best deals on all types of cars.
          </p>
          <a
            href="/buy"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg focus:ring-4 focus:ring-gray-800 text-gray-800 border-gray-700 bg-slate-300 mr-5 hover:!bg-yellow-500"
          >
            Buy Car
          </a>
          <a
            href="/sell"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  rounded-lg hover:!text-yellow-500 text-white  focus:ring-gray-800 hover:!border-transparent border-gray-700"
            style={{
              textDecoration: 'underline',
              textDecorationColor: 'transparent',
            }}
          >
            Sell Car
            <span
              className="ml-2"
              style={{ textDecoration: 'none', fontSize: '1.2rem' }}
            >
              &#8594; {/* Unicode arrow character pointing right */}
            </span>
          </a>
        </div>
        <div className="mt-10 lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={carImage2} alt="Hero car image" priority />
        </div>
      </div>

      <div className="max-w-screen-xl px-4 py-10 mx-auto lg:pb-32 lg:pt-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl ">
            Or get started directly by...
          </p>
          <div className="button-container">
            <span className="button-wrapper mr-3">
              <ButtonCloud options={brands} label="Brand" />
            </span>
            <span className="button-wrapper mr-3">
              <ButtonCloud options={types} label="Segment" />
            </span>
            <span className="button-wrapper mr-3 md:mt-9">
              <ButtonCloud options={budgets} label="Budget" />
            </span>
            <span className="button-wrapper mr-3 md:mt-9">
              <a
                href="/buy"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg text-white focus:ring-4  border-gray-700 hover:!bg-yellow-500 focus:ring-gray-700 md:mt-10"
              >
                Search
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
