'use client';
import Image from 'next/image';
import React from 'react';
import offer from '../../images/offer.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const Offers = () => {
  return (
    <section className='py-24 bg-yellow-50 text-black relative'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-5 z-10' style={{ zIndex: 20 }}>
            Our Current Offers
          </h2>
        </div>

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
        >
          <SwiperSlide>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <Image className='rounded-t-lg object-cover w-full' src={offer} alt='Offer image' />
              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Get 5% off on your first order!
                  </h5>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <Image className='rounded-t-lg object-cover w-full' src={offer} alt='Offer image' />
              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Get 5% off using HDFC credit card!
                  </h5>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <Image className='rounded-t-lg object-cover w-full' src={offer} alt='Offer image' />
              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    ₹0 surcharge on car tax.
                  </h5>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <Image className='rounded-t-lg object-cover w-full' src={offer} alt='Offer image' />
              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Get a free car wash with every service!
                  </h5>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='section-line-container'>
        <div className='section-line-shape'></div>
        <div className='section-line-shape'></div>
        <div className='section-line-shape'></div>
        <div className='section-line-shape'></div>
        <div className='section-line-shape'></div>
        <div className='section-line-shape'></div>
        <div className='section-line-shape'></div>
      </div>
    </section>
  );
};

export default Offers;
