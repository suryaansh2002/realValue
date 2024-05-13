import Features from '../Features'
import { FaCoins, FaClipboardCheck, FaMoneyCheckAlt } from 'react-icons/fa'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import why1 from '@/images/sell/why1.jpeg'
import why2 from '@/images/sell/why2.jpeg'
import why3 from '@/images/sell/why3.jpeg'
import Image from 'next/image'

const AboutUs = () => {
  const whySellToUs = [
    {
      title: 'Best Price',
      image: why1,
    },
    {
      title: 'Hassle Free',
      image: why2,
    },
    {
      title: 'Instant Payment',
      image: why3,
    },
  ]
  return (
    <>
      <div className="">
        <div className="container mx-auto max-w-screen-xl">
          <h1 className="text-3xl font-semibold text-left px-4 my-8">About Us</h1>
          <div className="p-6 bg-white rounded-lg shadow-md mb-8">
            <p className="text-gray-700">
              With over 30 years of experience, Poddar Motors Real Value has
              been a trusted name in the pre-owned vehicle market since its
              inception in 1992. Our commitment to excellence and customer
              satisfaction has made us a one-stop solution for individuals
              seeking high-quality used vehicles.
            </p>
            <p className="mt-4">
              Google Ratings: 4.7
              <FaStar className="text-[#ffd700] inline -translate-y-0.5 ml-1" />
              <FaStar className="text-[#ffd700] inline -translate-y-0.5 mx-0.5" />
              <FaStar className="text-[#ffd700] inline -translate-y-0.5 mx-0.5" />
              <FaStar className="text-[#ffd700] inline -translate-y-0.5 mx-0.5" />
              <FaStarHalf className="text-[#ffd700] inline -translate-y-0.5 mx-0.5" />
            </p>
          </div>
        </div>
        <div className="container max-w-screen-xl mx-auto">
          <div className="pt-0 bg-white">
            <div>
              <div className="md:inline-block block mr-8 rounded-md shadow-md py-2 px-4 md:my-4 my-12 text-center">
                <div className="text-5xl font-bold mb-2">30+</div>
                <div className="text-sm font-semibold">Years of Experience</div>
              </div>
              <div className="md:inline-block block mr-8 rounded-md shadow-md py-2 px-4 md:my-4 my-12 text-center">
                <div className="text-5xl font-bold mb-2">10+</div>
                <div className="text-sm font-semibold">Finance Partners</div>
              </div>
              <div className="md:inline-block block mr-8 rounded-md shadow-md py-2 px-4 md:my-4 my-12 text-center">
                <div className="text-5xl font-bold mb-2">40,000+</div>
                <div className="text-sm font-semibold">Satisfied Customers</div>
              </div>
              <div className="md:inline-block block mr-8 rounded-md shadow-md py-2 px-4 md:my-4 my-12 text-center">
                <div className="text-5xl font-bold mb-2">4</div>
                <div className="text-sm font-semibold">Showrooms in Ranchi</div>
              </div>
              <div className="md:inline-block block align-top mx-4 md:w-[12rem]  rounded-md shadow-md py-2 md:px-4 px-12 md:my-4 my-12 text-center">
                <div className="text-2xl font-semibold py-2">
                  Post Sales Servicing
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-screen-xl mx-auto">
          <div className="md:text-3xl text-2xl  pl-4 font-bold mt-8 mb-4">
            Our Vision
          </div>

          <div>{/* Vision */}</div>
        </div>
        <div className="container max-w-screen-xl mx-auto">
          <div className="md:text-3xl text-2xl pl-4 font-bold mt-8 mb-4">
            Our Team
          </div>
          <div>{/* Vision */}</div>
        </div>
        <Features />
        <div className="mt-20 max-w-screen-xl mx-auto">
        <div className="font-semibold text-3xl my-8 md:px-0 px-4">
          Why Sell Your Car To Us
        </div>
        <div className="">
          {whySellToUs.map((step, index) => (
            <div
              key={index}
              className="
            md:inline-block block  w-[20rem]
             bg-white p-4 rounded-lg shadow-md 
             align-top mr-8 md:my-2 my-4 
             hover:scale-105  hover:shadow-xl  transition-transform duration-200 
            md:ml-0 md:translate-x-0 
            ml-[50%] -translate-x-[50%]
            "
            >
              <Image src={step.image} />
            </div>
          ))}
        </div>
      </div>
        {/* <div className="w-[100vw] block md:inline-block md:pl-8 align-top py-8 bg-gray-900 text-white">
          <div className="font-semibold text-3xl my-8 ml-4 md:ml-12">
            Why Sell Your Car To Us?
          </div>
          <ul className="space-y-4 ml-6 md:ml-14">
            <li className="flex items-center py-2">
              <span className="flex-shrink-0 mr-4">
                <FaCoins className="text-green-500 text-lg" />
              </span>
              <span className="text-lg">Best price</span>
            </li>
            <li className="flex items-center py-2">
              <span className="flex-shrink-0 mr-4">
                <FaClipboardCheck className="text-blue-500 text-lg" />
              </span>
              <span className="text-lg">Hassle-free documentation</span>
            </li>
            <li className="flex items-center py-2">
              <span className="flex-shrink-0 mr-4">
                <FaMoneyCheckAlt className="text-yellow-500 text-lg" />
              </span>
              <span className="text-lg">Instant Payment</span>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  )
}

export default AboutUs
