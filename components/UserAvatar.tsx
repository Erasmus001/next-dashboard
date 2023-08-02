import Link from 'next/link';
import React from 'react';

const UserAvatar = () => {
  return (
    <Link href={'/profile'} className='flex items-center justify-center gap-3'>
      <div className="h-9 w-9 rounded-full bg-gray-500"></div>
      <div className='flex items-start justify-start flex-col'>
        <h4 className='text-[14px] text-gray-100'>Erasmus Mensah</h4>
        <small className='text-[12px] text-gray-400 font-semibold'>Frontend Dev</small>
      </div>
    </Link>
  );
};

export default UserAvatar;