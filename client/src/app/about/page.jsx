import Features from '../Features'
import { FaCoins, FaClipboardCheck, FaMoneyCheckAlt } from 'react-icons/fa'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import why1 from '@/images/sell/why1.jpeg'
import why2 from '@/images/sell/why2.jpeg'
import why3 from '@/images/sell/why3.jpeg'
import Image from 'next/image'
import about from '@/images/about.jpeg'
import founder from '@/images/founder.jpeg'

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
          <h1 className="text-3xl font-semibold text-left px-4 my-8">
            About Us
          </h1>
          <div className="p-6 bg-white rounded-lg shadow-md mb-8">
            <p className="text-gray-700">
              At Real Value, we believe in transforming the used car market to
              provide our customers with the highest quality vehicles at the
              best prices. With three strategically located showrooms in Ranchi,
              we are here to serve you with dedication and integrity.
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
              <div className="md:inline-block block mr-8 rounded-md shadow-md py-2 px-4 md:my-4 md:w-auto w-[100vw]  my-12 text-center">
                <div className="text-5xl font-bold mb-2">30+</div>
                <div className="text-sm font-semibold">Years of Experience</div>
              </div>
              <div className="md:inline-block block mr-8 rounded-md shadow-md py-2 px-4 md:my-4 md:w-auto w-[100vw]   my-12 text-center">
                <div className="text-5xl font-bold mb-2">10+</div>
                <div className="text-sm font-semibold">Finance Partners</div>
              </div>
              <div className="md:inline-block block mr-8 rounded-md shadow-md py-2 px-4 md:my-4 md:w-auto w-[100vw]  my-12 text-center">
                <div className="text-5xl font-bold mb-2">40,000+</div>
                <div className="text-sm font-semibold">Satisfied Customers</div>
              </div>
              <div className="md:inline-block block mr-8 rounded-md shadow-md py-2 px-4 md:my-4 md:w-auto w-[100vw]   my-12 text-center">
                <div className="text-5xl font-bold mb-2">4</div>
                <div className="text-sm font-semibold">Showrooms in Ranchi</div>
              </div>
              <div className="md:inline-block block align-top mr-4 md:w-[12rem]  rounded-md shadow-md py-2 w-[100vw]   md:px-4 px-12 md:my-4 my-12 text-center">
                <div className="text-2xl font-semibold py-2">
                  Post Sales Servicing
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-screen-xl">
          <div className="p-6 bg-white rounded-lg shadow-md mb-8">
            <div className="text-xl font-bold mb-4">Our Journey</div>
            <div className="">
              At Real Value, we believe in transforming the used car market to
              provide our customers with the highest quality vehicles at the
              best prices. With three strategically located showrooms in Ranchi,
              we are here to serve you with dedication and integrity.
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-screen-xl">
          <div className="p-6 bg-white rounded-lg shadow-md mb-8">
            <div className="text-xl font-bold mb-4">Our Mission</div>
            <div className="">
              Our mission is simple: to organise the used cars market in Ranchi
              and offer the best cars to our customers at the most competitive
              prices. We strive to ensure that every customer finds their
              perfect vehicle and enjoys a seamless buying or selling
              experience.
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-screen-xl">
          <div className="p-6 bg-white rounded-lg shadow-md mb-8">
            <div className="text-xl font-bold mb-4">Our Values</div>
            <div className="">
              At Real Value, we hold honesty, customer service, and quality in
              the highest regard. These values guide everything we do, from the
              cars we select to the way we interact with our customers. We
              believe in creating lasting relationships based on trust and
              transparency.
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-screen-xl">
          <div className="p-6 bg-white rounded-lg shadow-md mb-8">
            <div className="text-xl font-bold mb-4">Our Services</div>
            <div className="md:inline-block md:w-[65%]">
              We offer a comprehensive range of services to meet all your
              automotive needs:
              <br />
              <br />
              <ul>
                <li>
                  <b>Buying</b>: Find your next car from our extensive inventory
                  of quality used vehicles.
                </li>
                <br />
                <li>
                  <b>Selling</b>: Sell your car to us with confidence, knowing
                  you're getting a fair deal.
                </li>
                <br />

                <li>
                  <b>Financing</b>: Take advantage of our financing options to
                  make your purchase more affordable.
                </li>
              </ul>
            </div>
            <div className="md:inline-block md:w-[35%] align-top">
              <Image src={about} className="mx-auto w-[80%] md:mt-0 mt-4" />
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-screen-xl">
          <div className="p-6 bg-white rounded-lg shadow-md mb-8">
            <div className="text-xl font-bold mb-4">Why Choose Real Value?</div>
            <div className="">
              <ul>
                <li>
                  <b>Experience and Trust:</b> With 30 years in the business and
                  over 20,000 satisfied customers, we have the experience and
                  trust you can rely on.
                </li>
                <br />
                <li>
                  <b>Comprehensive Service:</b> From buying and selling to
                  financing, we provide a full suite of services under one roof.
                </li>
                <br />
                <li>
                  <b>Quality Assurance:</b> Every car we sell goes through a
                  rigorous inspection to ensure it meets our high standards of
                  quality.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-screen-xl">
          <div className="p-6 bg-white rounded-lg shadow-md mb-8">
            <div className="text-xl font-bold mb-4">Meet Our Founder</div>
            <div className="md:inline-block md:w-[50%] align-top">
              Milan Poddar, our CEO and Founder, has been the driving force
              behind Real Value. His vision and dedication have shaped our
              company into what it is today—a leader in the used car market in
              Ranchi.
            </div>
            <div className="md:inline-block md:w-[45%]">
              <Image src={founder} className="mx-auto md:w-[40%]" />
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-screen-xl">
          <div className="p-6 bg-white rounded-lg shadow-md mb-8">
            <div className="text-xl font-bold mb-4">Our Future</div>
            <div className="">
              Our goal is to become the largest used car dealer in East India.
              We are constantly expanding our inventory, improving our services,
              and exploring new ways to better serve our customers.
              <br />
              Thank you for choosing Real Value. We look forward to helping you
              find the perfect car!
            </div>
          </div>
        </div>
        <Features />
        <div className="mt-20 max-w-screen-xl mx-auto mb-12">
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
