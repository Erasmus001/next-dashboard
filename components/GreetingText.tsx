import React from 'react';

const GreetingText = () => {
  return (
    <div className='flex flex-col gap-1 w-fit'>
      <h3 className='text-2xl'>Welcome back, <span className='font-semibold'>Erasmus!</span></h3>
      <p className='text-[14px] text-gray-500'>Here&apos;s your task overview</p>
    </div>
  );
};

export default GreetingText;