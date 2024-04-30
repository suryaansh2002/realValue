'use client'
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import axios from 'axios'
// import 'swiper/swiper-bundle.css';
import user from '../../images/user.jpg'
import Image from 'next/image'

const Testimonials = () => {
  const [loading, setLoading] = useState(false)
  const [testimonials, setTestimonials] = useState(false)
  let url = 'https://real-value-server.vercel.app/'
  // url = 'http://localhost:5000/'

  const fetchTestimonials = async () => {
    try {
      setLoading(false)
      const response = await axios.get(url + 'api/testimonials')
      setTestimonials(response.data)
      setLoading(false)
    } catch (e) {
      console.log(e.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTestimonials()
  }, [])

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-5">
            Don't believe us?
          </h2>
          <span className="text-lg text-gray-500 font-medium block mb-2">
            Testimonials from our happy customers!
          </span>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : testimonials.length ? (
          <div>
            <Swiper
              modules={[Navigation, Pagination]}
              className="mySwiper"
              slidesPerView={1}
              spaceBetween={32}
              navigation
              scrollbar={{ draggable: true }}
              loop={true}
              centeredSlides={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 32 },
                768: { slidesPerView: 2, spaceBetween: 32 },
                1024: { slidesPerView: 3, spaceBetween: 32 },
              }}
              style={{
                height: 'auto',
                '--swiper-pagination-bullet-inactive-color': '#999999',
              }}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item._id} style={{ paddingBottom: '30px' }}>
                  <div className="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2 flex flex-col h-full">
                    <p className="text-black flex-grow h-[10rem]">
                      {item.text}
                    </p>
                    <div className="mt-5 flex items-center">
                      <div className="ml-3">
                        <h3 className="font-semibold text-gray-600">
                          {item.name ? item.name : 'Anonymous'}
                        </h3>
                        {/* <p className="text-gray-500"> Software Engineer </p> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <p>No Testimonials to show...</p>
        )}
      </div>
    </section>
  )
}

export default Testimonials
