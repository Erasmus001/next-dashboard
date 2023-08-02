import GreetingText from '@/components/GreetingText';
import HeaderStat from '@/components/HeaderStat';
import BarChart from '@/components/UI/BarChart';
import DoughnutData from '@/components/UI/Doughnut';
import WorkersStat from '@/components/UI/WorkersStat';
import { Inter } from 'next/font/google';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			<main
				className={`flex h-[calc(100vh-64px)] w-full flex-col text-white overflow-y-auto ${inter.className}`}
			>
				<div className='h-full w-full pb-10'>
					<div className='h-72 w-full bg-[#080d1a] px-8 pt-8 flex items-start justify-between'>
						<GreetingText />
						<HeaderStat />
					</div>

					{/* Cards */}
					<div className='-mt-32 w-full px-8 grid grid-cols-3 gap-6 h-[calc(100%-288px)]'>
						<div className='w-full flex items-center justify-center flex-col gap-3 bg-white rounded-md shadow-md p-8'>
							<h3 className='text-black font-semibold text-xl text-start'>Employees stat</h3>
							<WorkersStat />
						</div>
						<div className='w-full flex items-center justify-center flex-col gap-3 bg-white rounded-md shadow-md p-8'>
							<h3 className='text-black font-semibold text-xl text-start'>Income stat</h3>
							<DoughnutData />
						</div>
						<div className='h-72 w-full bg-white rounded-md shadow-md p-6'></div>
						<BarChart />
					</div>
				</div>
			</main>
		</>
	);
}
