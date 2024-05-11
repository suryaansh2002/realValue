import React from 'react'
import Image from 'next/image'
import { formatAmount, AmountWithCommas, EMICalcLite } from '@/app/utils'

import { toTitleCase } from '@/app/utils'

const FeaturedCard = ({ car }) => {
  return (
    <a href={`/buy/${car._id}`}>
      <div className="max-w-sm rounded-lg align-top overflow-hidden shadow-md  hover:scale-105  hover:shadow-xl  transition-transform duration-200 border-2 border-transparent">
        <Image
          className="w-full h-[20rem] object-contain"
          src={car.images[0]}
          width={300}
          height={300}
          alt={`${car.brand} ${car.model}`}
        />

        <div className="md:mb-0 md:pb-0 px-6 py-4 align-top  justify-between">
          <div className="font-bold text-xl mb-2 text-black  w-[80%] inline-block">
            {car.brand} {car.model}
            <span className="text-gray-900 xs:text-sm ml-2  inline-block font-light text-base ">
              {car.variant}
            </span>
          </div>
          <div className="text-gray-700 font-semibold text-base inline-block">
            {car.year}
          </div>
        </div>

        <div className="px-6 pt-2 pb-4 flex flex-wrap">
          <span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {car.kmDriven}km
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {car.fuelType}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {toTitleCase(car.transmissionType)}
          </span>
        </div>

        <div className="mb-2 flex justify-between mx-7">
          <div className="text-gray-800 font-black text-lg mb-2">
            {formatAmount(car.price)}
          </div>
          <div className="text-green-600 translate-0 text-md  inline-block">
            ₹{AmountWithCommas(EMICalcLite(car.price, 10, 36))}
            /month
          </div>
        </div>
      </div>
    </a>
  )
}

export default FeaturedCard
