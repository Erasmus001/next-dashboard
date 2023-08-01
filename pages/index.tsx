import GreetingText from '@/components/GreetingText';
import HeaderStat from '@/components/HeaderStat';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { ReactElement } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			<main className={`flex h-full w-full flex-col text-white ${inter.className}`}>
				{/* <h2 className='text-2xl text-black'>Main Dashboard</h2> */}
				<div className="h-72 w-full bg-[#080d1a] px-8 pt-8 flex items-start justify-between">
					<GreetingText />
					<HeaderStat />
				</div>

				{/* Cards */}
				<div className="-mt-40 w-full px-8">
					<div className='h-80 w-96 bg-white rounded-md shadow-md'></div>
				</div>
			</main>
		</>
	);
}