import React from 'react'
import { FaWhatsapp, FaUsers, FaInstagram, FaFacebook } from 'react-icons/fa'
import { TbDeviceLandlinePhone } from 'react-icons/tb'

import Link from 'next/link'

const ContactUsPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900 max-w-9xl">
      <div className="container px-4 py-8 lg:px-12">
        <div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 md:text-4xl dark:text-white">
            Get in touch
          </h1>

          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            We would love to hear from you.
          </p>
        </div>

        <div
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
          }}
          className="lg:grid flex flex-col gap-12 mt-12"
        >
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <span className="inline-block p-3 text-yellow-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-xl font-medium text-gray-800 dark:text-white">
                Email
              </h2>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Drop a mail for any queries.
              </p>
              <div className="space-y-2">
                <p className="mt-2 text-base text-yellow-500">
                  poddarranchi@gmail.com
                </p>
                <p className="mt-2 text-base text-yellow-500">
                  info@poddarmotors.com
                </p>
                <p className="mt-2 text-base text-yellow-500">
                  contact@poddarmotors.com
                </p>
              </div>
            </div>

            <div>
              <span className="inline-block p-3 text-yellow-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-xl font-medium text-gray-800 dark:text-white">
                Phone
              </h2>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Everyday from 9:30am to 7pm.
              </p>
              <div className="space-y-2">
                <div className="mt-2 flex items-center justify-start">
                  <FaWhatsapp
                    className="text-yellow-500 text-2xl mr-2"
                    size={20}
                  />
                  <p className="text-base text-yellow-500">+91 8102856301</p>
                </div>
                <div className="mt-2 flex items-center justify-start">
                  <TbDeviceLandlinePhone
                    className="text-yellow-500 text-2xl mr-2"
                    size={20}
                  />
                  <p className="text-base text-yellow-500">8873002702</p>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block p-3 text-yellow-500 rounded-full bg-blue-100/80 dark:bg-gray-800 mx-auto">
                <FaUsers className="text-yellow-500 text-2xl" size={20} />
              </span>

              <h2 className="mt-4 text-xl font-medium text-gray-800 dark:text-white">
                Socials
              </h2>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Follow us!
              </p>
              <div className="flex items-center justify-start space-x-6 mt-3">
                <Link
                  href="https://www.facebook.com/RealValueRanchi/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaInstagram className="text-yellow-500 text-2xl" size={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/pmplrealvalue/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaFacebook className="text-yellow-500 text-2xl" size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block p-3 text-yellow-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-xl font-medium text-gray-800 dark:text-white">
              Showrooms
            </h2>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              Browse our exquisite collection of cars.
            </p>
            <div className="space-y-2">
              <p className="mt-2 mb-4 text-base text-yellow-500">
                1. (Poddar Automart) Real Value, Kokar Industrial Area, Kokar,
                Ranchi - 834001 Landmark: Electricity Sub Station
              </p>
              <p className="mt-2 mb-4 text-base text-yellow-500">
                2. (Poddar Motors) Poddar Motors Pvt. Ltd. , Kokar Industrial
                Area, Kokar , Ranchi -834001 Landmark: Beside moreish bread
              </p>
              <p className="mt-2 mb-4 text-base text-yellow-500">
                3. (Tirupati Engicon) Real Value, Kokar Chowk, Kokar, Ranchi -
                834001 Landmark: Kokar Chowk - Kantatoli road
              </p>
              <p className="mt-2 mb-4 text-base text-yellow-500">
                4. Real Value, Hazaribagh Road ,Mesra , Ranchi - 834001
                Landmark: Near BIT Mesra campus
              </p>
            </div>
            <div className="overflow-hidden rounded-lg h-80 lg:h-50 mt-12">
              <iframe
                width="100%"
                height="100%"
                title="map"
                style={{ border: 0, marginLeft: 'auto', marginRight: 'auto' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.466933990794!2d85.3504478093273!3d23.371319578842947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e17d184b0973%3A0xbc6d6be675cca0f0!2sREAL%20VALUE!5e0!3m2!1sen!2sin!4v1714636151144!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsPage
