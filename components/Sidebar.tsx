import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
	return (
		<aside className='w-[270px] h-screen bg-white py-11 px-4 flex flex-col items-start justify-start gap-10'>
			{/* Logo */}
			<div className='w-full px-6'>
				<h3 className='text-2xl font-semibold text-blue-500'>Webbermill</h3>
			</div>

			{/* Navigations */}
			<div className='w-full flex items-start justify-start flex-col gap-5'>
				<div className='w-full flex items-start justify-start flex-col'>
					<Link href={'/'} className='w-full p-1.5 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Overview</Link>
					<Link href={'/tasks'} className='w-full p-1.5 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Tasks</Link>
					<Link href={'/projects'} className='w-full p-1.5 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Projects</Link>
					<Link href={'/calender'} className='w-full p-1.5 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Calender</Link>
				</div>
				<div className='w-full flex items-start justify-start flex-col'>
					<Link href={'/'} className='w-full p-1.5 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Overview</Link>
					<Link href={'/'} className='w-full p-1.5 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Tasks</Link>
					<Link href={'/'} className='w-full p-1.5 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Projects</Link>
					<Link href={'/'} className='w-full p-1.5 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>My Tasks</Link>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
