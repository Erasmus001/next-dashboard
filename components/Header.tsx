import Link from 'next/link';
import React from 'react';
import { FiBell, FiMail } from 'react-icons/fi';
import UserAvatar from './UserAvatar';

const Header = () => {
  return (
    <header className='w-full flex items-start justify-end h-16 bg-[#080d1a] border-b border-gray-900 border-0'>
      <div className='w-full h-full flex items-center justify-end px-6 gap-3'>
        <Link href={'/messages'} className='rounded-full transparent border-gray-700 border-2 p-2'>
          <FiMail size={16} className='text-gray-400' />
        </Link>
        <Link href={'/messages'} className='rounded-full transparent border-gray-700 border-2 p-2'>
          <FiBell size={16} className='text-gray-400' />
        </Link>
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;