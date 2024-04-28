import React from 'react';
import Image from 'next/image';
import logo from '../../images/logo.png';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-4'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center'>
        <div className='flex items-center mb-4 lg:mb-0'>
          <Image src={logo} alt='Logo' className='w-20 h-20 mr-2' />
          <div>
            <p className='font-bold'>Real Value</p>
            <p>Poddar Motors, Ranchi, Jharkhand</p>
            <p>India</p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center'>
          <p className='mr-0 lg:mr-4 mb-2 lg:mb-0'>Phone: +91 8873002702</p>
          <p className='mr-0 lg:mr-4'>Email: aman@poddarmotors.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
