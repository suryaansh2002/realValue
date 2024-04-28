'use client';
import React from 'react';
import carImage2 from '../images/car-image-2.jpg';
import Image from 'next/image';
import ButtonCloud from './components/ButtonCloud';
import honda from '../images/brands/Honda.png';
import hyundai from '../images/brands/hyundai.png';
import kia from '../images/brands/kia.png';
import mahindra from '../images/brands/mahindra.png';
import tata from '../images/brands/tata.png';
import maruti from '../images/brands/maruti.png';
import { Icon } from '@ant-design/icons';

import { CarOutlined } from '@ant-design/icons';

const models = [
  {
    label: 'Maruti',
    key: '1',
    // icon: <Icon component={() => <Image src={maruti} alt='maruti' width={30} height={30} />} />,
    icon: <CarOutlined />,
  },
  {
    label: 'Hyundai',
    key: '2',
    icon: <CarOutlined />,
  },
  {
    label: 'Honda',
    key: '3',
    icon: <CarOutlined />,
  },
];

const segments = [
  {
    label: 'SUV',
    key: '1',
  },
  {
    label: 'Sedan',
    key: '2',
  },
  {
    label: 'Hatchback',
    key: '3',
  },
  {
    label: 'MUV',
    key: '3',
  },
];

const budgets = [
  {
    label: '<4 Lakh',
    key: '1',
  },
  {
    label: '4-8 Lakh',
    key: '2',
  },
  {
    label: '>8 Lakh',
    key: '3',
  },
];

const Hero = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='grid max-w-screen-xl px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
            Real Value by Poddar Motors
          </h1>
          <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
            Your one-stop-shop for buying, selling, and financing cars. We offer the best prices and
            the best deals on all types of cars.
          </p>
          <a
            href='#'
            className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-gray-800 dark:border-gray-700 dark:bg-slate-300 dark:hover:bg-gray-400 dark:focus:ring-gray-800 mr-5'
          >
            Buy Car
          </a>
          <a
            href='#'
            className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
          >
            Sell Car
          </a>
        </div>
        <div className='mt-10 lg:mt-0 lg:col-span-5 lg:flex'>
          <Image src={carImage2} alt='Hero car image' />
        </div>
      </div>

      <div className='max-w-screen-xl px-4 py-10 mx-auto lg:pb-32 lg:pt-0'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <p
            className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'
            // style={{ marginTop: '-25px' }}
          >
            Or get started directly by,
          </p>
          <span className='mr-3'>
            <ButtonCloud options={models} label='Model' />
          </span>
          <span className='mr-3'>
            <ButtonCloud options={segments} label='Segment' />
          </span>
          <span className='mr-3 md:mt-9'>
            <ButtonCloud options={budgets} label='Budget' />
          </span>
          <span className='mr-3 md:mt-9'>
            <a
              href='#'
              className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mt-10'
            >
              Search
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
