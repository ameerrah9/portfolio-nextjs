import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] border-red-800'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src='/assets/navLogo.png' alt='/' width='100' height='10' />
      </div>
    </div>
  );
};

export default Navbar;
