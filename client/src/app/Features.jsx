import React from 'react';
import { FaAward, FaHandshake, FaRecycle, FaCar, FaRupeeSign } from 'react-icons/fa';
import { BiHappyBeaming } from 'react-icons/bi';

import {
  CheckOutlined,
  UserAddOutlined,
  CarOutlined,
  DollarCircleOutlined,
  SmileOutlined,
  ToolOutlined,
} from '@ant-design/icons';

const Features = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='max-w-screen-md mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Features offered by us
          </h2>
          <p className='text-gray-500 sm:text-xl dark:text-gray-400'>
            Why we stand out from the rest
          </p>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <FaAward color='white' size={50} style={{ marginTop: '5px' }} />
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>Quality Selection</h3>
          </div>
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <FaRupeeSign color='white' size={50} style={{ marginBottom: '5px' }} />
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>Competitive Pricing</h3>
          </div>
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <FaCar color='white' size={50} />
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>Certified Pre-Owned Program </h3>
          </div>
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <FaHandshake color='white' size={50} />
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>Easy Financing Options</h3>
          </div>
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <BiHappyBeaming color='white' size={50} />
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>Customer Satisfaction</h3>
          </div>
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <FaRecycle color='white' size={50} />
            </div>

            <h3 className='mb-2 text-xl font-bold dark:text-white'>Refurbished to the best</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
