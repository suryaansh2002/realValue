'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import 'swiper/swiper-bundle.css';
import user from '../../images/user.jpg';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className='py-24 bg-gray-900 text-white'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mb-16'>
          <h2 className='text-4xl font-bold text-white mb-5'>Don't believe us?</h2>
          <span className='text-lg text-gray-500 font-medium block mb-2'>
            Testimonials from our happy customers!
          </span>
        </div>

        <div>
          <Swiper
            modules={[Navigation, Pagination]}
            className='mySwiper'
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
            style={{ height: 'auto', '--swiper-pagination-bullet-inactive-color': '#999999' }}
          >
            <SwiperSlide style={{ paddingBottom: '30px' }}>
              <div className='max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2 flex flex-col h-full'>
                <p className='text-black flex-grow'>
                  Poddar Motors helped me buy our first second hand car at the age of 25! Highly
                  recommend
                </p>
                <div className='mt-5 flex items-center'>
                  <div className='ml-3'>
                    <h3 className='font-semibold text-gray-600'> Raju Sharma</h3>
                    <p className='text-gray-500'> Software Engineer </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ paddingBottom: '30px' }}>
              <div className='max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2 flex flex-col h-full'>
                <p className='text-black flex-grow'>
                  Real Value is truly real! Can't recommend enough! The team is very helpful.
                </p>
                <div className='mt-5 flex items-center'>
                  <div className='ml-3'>
                    <h3 className='font-semibold text-gray-600'> Suryaansh Rathinam </h3>
                    <p className='text-gray-500'> Student </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ paddingBottom: '30px' }}>
              <div className='max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2 flex flex-col h-full'>
                <p className='text-black flex-grow'>
                  Amazing service! I sold my car to Poddar Motors and I couldn't be happier!
                </p>
                <div className='mt-5 flex items-center'>
                  <div className='ml-3'>
                    <h3 className='font-semibold text-gray-600'> Jay Varma </h3>
                    <p className='text-gray-500'> Lawyer </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ paddingBottom: '30px' }}>
              <div className='max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2 flex flex-col h-full'>
                <p className='text-black flex-grow'>
                  It is truly fantastic! Best car dealership in Ranchi. I would definitely visit
                  again.
                </p>
                <div className='mt-5 flex items-center'>
                  <div className='ml-3'>
                    <h3 className='font-semibold text-gray-600'> Piyush Sharma </h3>
                    <p className='text-gray-500'> Architect </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
