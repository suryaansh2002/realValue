import React from 'react'
import {
  FaAward,
  FaHandshake,
  FaRecycle,
  FaCar,
  FaRupeeSign,
} from 'react-icons/fa'
import { BiHappyBeaming } from 'react-icons/bi'

const Features = () => {
  return (
    <section className="bg-gray-900 mx-auto">
      <div className="pb-14 pt-20 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="max-w-screen-md mb-16 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Our Highlights
          </h2>
          {/* <p className=" sm:text-xl text-gray-400">
            Why we stand out from the rest
          </p> */}
        </div>
        <div className="md:space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:text-left text-center items-center">
          <div
            style={{ marginTop: '32px' }}
            className="flex flex-col md:block justify-center items-center pb-10"
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <FaAward color="white" size={50} />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">
              Quality Selection
            </h3>
          </div>
          <div className="flex flex-col md:block justify-center items-center pb-10">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <FaRupeeSign color="white" size={50} />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">
              Competitive Pricing
            </h3>
          </div>
          <div className="flex flex-col md:block justify-center items-center pb-10">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <FaCar color="white" size={50} />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">
              Certified Pre-owned Program
            </h3>
          </div>
          <div className="flex flex-col md:block justify-center items-center pb-10">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <FaHandshake color="white" size={50} />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">
              Easy Financing Options
            </h3>
          </div>
          <div className="flex flex-col md:block justify-center items-center pb-10">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <BiHappyBeaming color="white" size={50} />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">
              Customer Satisfaction
            </h3>
          </div>
          <div className="flex flex-col md:block justify-center items-center pb-10">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
              <FaRecycle color="white" size={50} />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">
              Refurbished to the best
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
