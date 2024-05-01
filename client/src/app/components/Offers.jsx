'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import offer from '../../images/offer.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import axios from 'axios'
const Offers = () => {
  const [loading, setLoading] = useState(true)
  const [offers, setOffers] = useState([])
  let url = 'https://real-value-server.vercel.app/'
  // url = 'http://localhost:5000/'

  const fetchOffers = async () => {
    try {
      setLoading(true)

      const response = await axios.get(url + 'api/offers')
      setOffers(response.data)
      if (response.data) {
        setLoading(false)
      }
    } catch (e) {
      setLoading(false)
      console.log(e.message)
    }
  }
  useEffect(() => {
    fetchOffers()
  }, [])
  return (
    <section className="py-24 bg-white-50 text-black relative">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2
            className="text-4xl font-bold text-gray-900 mb-5 z-10"
            style={{ zIndex: 20 }}
          >
            Our Current Offers
          </h2>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : offers.length ? (
          <Swiper
            modules={[Navigation, Pagination]}
            className="myOfferSwiper"
            slidesPerView={1}
            spaceBetween={32}
            navigation
            scrollbar={{ draggable: true }}
            loop={true}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 32 },
              768: { slidesPerView: 2, spaceBetween: 32 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer._id} style={{ paddingBottom: '40px' }}>
                <div className="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800">
                  <Image
                    className="rounded-t-lg object-cover w-full"
                    src={offer.image}
                    alt="Offer image"
                    width={300}
                    height={300}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-semibold text-lg -mt-4">No offers to show...</p>
        )}
      </div>
    </section>
  )
}

export default Offers
