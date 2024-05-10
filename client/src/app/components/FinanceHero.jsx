import React from 'react'
// import { TypewriterEffectSmooth } from '@/app/components/ui/typewriter-effect'
import Image from 'next/image'
import carImage2 from '@/images/car-image-2.jpg'
import { TypewriterEffectSmooth } from '@/app/components/ui/typewriter-effect'

const FinanceHero = () => {
  return (
    <section className="bg-black">
      <div className="flex flex-col lg:flex-row max-w-screen-xl px-4 py-12 mx-auto lg:gap-8 lg:py-16 lg:px-6">
        <div className="mr-auto place-self-center lg:col-span-7">
          <TypewriterEffectSmooth
            words={'Quick and Easy Car Loans'.split(' ').map((word) => {
              return {
                text: word,
                className:
                  'mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-white',
              }
            })}
          />
          {/* <h1 className="max-w-2xl mb-4 text-4xl lg:text-4xl font-extrabold tracking-tight leading-10 md:text-5xl xl:text-5xl text-white">
            Quick and Easy Used Car Loans
          </h1> */}
        </div>
        <div className="mt-10 lg:mt-0 lg:col-span-5">
          <Image src={carImage2} alt="Hero car image" priority width={500} />
        </div>
      </div>
    </section>
  )
}

export default FinanceHero
