import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
	return (
		<aside className='w-[270px] h-screen bg-white pt-11 pb-5 px-4 flex flex-col items-start justify-start gap-10 border-r border-0 border-gray-100'>
			{/* Logo */}
			<div className='w-full px-6'>
				<h3 className='text-2xl font-semibold text-blue-500'>Webbermill</h3>
			</div>

			{/* Navigations */}
			<div className='w-full flex items-start justify-start flex-col gap-2 flex-1'>
				<div className='w-full flex items-start justify-start flex-col flex-1'>
					<Link href={'/'} className='w-full p-2 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Overview</Link>
					<Link href={'/messages'} className='w-full p-2 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Messages</Link>
					<Link href={'/messages'} className='w-full p-2 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Notifications</Link>
					<Link href={'/projects'} className='w-full p-2 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Projects</Link>
					<Link href={'/messages'} className='w-full p-2 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Teams</Link>
				</div>
				{/* <div className='w-full flex items-start justify-start flex-col'>
					<Link href={'/messages'} className='w-full p-2 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Meetings</Link>
					<Link href={'/messages'} className='w-full p-2 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Documents</Link>
					<Link href={'/'} className='w-full p-2 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Projects</Link>
					<Link href={'/'} className='w-full p-2 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>My Tasks</Link>
				</div> */}
			</div>

			<div className="w-full flex items-start justify-start flex-col">
				<Link href={'/settings'} className='w-full p-2 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50'>Settings</Link>
				<button className='w-full p-2 px-5 text-black cursor-pointer text-[14px] hover:bg-gray-50 flex justify-start'>Sign out</button>
			</div>
		</aside>
	);
};

export default Sidebar;
