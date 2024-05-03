import React from 'react'
import Image from 'next/image'
import logo from '../../images/logo.png'
import { MdCopyright } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaClock, FaCalendarAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center mb-4 lg:mb-0">
          <Image src={logo} alt="Logo" className="w-20 h-20 mr-2" />
          <div>
            <p className="font-bold">Real Value</p>
            <p>Poddar Motors, Ranchi, Jharkhand</p>
            <p>India</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <p className="mr-0 lg:mr-4 font-semibold mb-2 lg:mb-0">
            <a href="tel:8873002702">+91 8873002702</a>
          </p>
          <p className="mr-0 lg:mr-4 font-semibold ">
            <a href="mailto:aman@poddarmotors.com">aman@poddarmotors.com</a>
          </p>
          <div className="flex mr-0 my-2  lg:my-0 lg:mr-4 font-semibold">
            <a
              href="https://www.facebook.com/RealValueRanchi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:underline mx-2"
            >
              <FaFacebook className="text-blue-500 text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/pmplrealvalue/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:underline mx-2"
            >
              <FaInstagram className="text-pink-500 text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="container w-[100vw] text-center text-sm mt-2">
        <MdCopyright className="inline text-lg" /> Copyright{' '}
        {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
