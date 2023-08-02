import { Inter } from 'next/font/google';
import Head from 'next/head';
import { ReactElement } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>Dashboard</Head>
			<main className={`flex h-full w-full text-white ${inter.className}`}>
				<h2>Main Dashboard</h2>
			</main>
		</>
	);
}