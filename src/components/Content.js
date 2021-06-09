import React from 'react';
import ImageOne from '../images/bacon-burger-2-5.jpg';
import ImageTwo from '../images/burger-salad-8503388-March-30-2019.jpg';

const Content = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
        <img src={ImageOne} alt='egg' className='h-full rounded mb-10 shadow' />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl mb-2 '>Burger</h2>
          <p className='mb-2'>Cripsy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
        <img src={ImageTwo} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Burger Salad</h2>
          <p className='mb-2'>Cripsy, delicious, and nutritious</p>
          <span>$18</span>
        </div>
      </div>
    </>
  );
};

export default Content;
