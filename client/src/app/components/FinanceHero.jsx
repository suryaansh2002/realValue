import React from 'react'
// import { TypewriterEffectSmooth } from '@/app/components/ui/typewriter-effect'
import Image from 'next/image'
import carImage2 from '@/images/car-image-2.jpg'

const FinanceHero = () => {
  return (
    <section className="bg-black">
      <div className="grid max-w-screen-xl px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl lg:text-2xl font-extrabold tracking-tight leading-10 md:text-5xl xl:text-5xl text-white">
            Get Quick and Hassle Free USED CARS LOAN
          </h1>
        </div>
        <div className="mt-10 lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={carImage2} alt="Hero car image" priority />
        </div>
      </div>
    </section>
  )
}

export default FinanceHero
