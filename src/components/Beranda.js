/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import image from '../assets/img/1.png';
import { Link } from 'react-router-dom';

const Beranda = () => {
  return (
    <div>
      <div className='relative'>
        <img src={ image } className="w-full h-96 object-cover"></img>
        <h1 className='absolute inset-x-0 bottom-0 text-white h-16 text-center text-2xl font-semibold uppercase'>Dana anggaran Kementerian Keuangan</h1>
      </div>

      <div className='flex justify-center py-16'>
        <div className='border border-solid p-10 drop-shadow-lg bg-orange-400'>
          <div className='text-center pb-10'>
            <i className="fa-solid fa-book-open fa-2xl h-6 fill-current"></i>
          </div>
          <div className='font-semibold text-lg'>
            <Link to='/list-anggaran'>Lihat Dana Anggaran</Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Beranda