import React from 'react'
import { FaPhone } from 'react-icons/fa'
import Link from 'next/link'

const PhoneButton = () => {
  const phoneNumber = '8873002702'
  return (
    <Link
      href={`tel:${phoneNumber}`}
      className="fixed bottom-4 right-4 z-10 bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
    >
      <FaPhone className="inline-block mr-2" />
      Call Us
    </Link>
  )
}

export default PhoneButton
