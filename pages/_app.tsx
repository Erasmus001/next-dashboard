import DashboardLayout from '@/layouts/DashboardLayout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { PrimeReactProvider } from 'primereact/api';

//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';

//core
import 'primereact/resources/primereact.min.css';
import { Toaster } from 'react-hot-toast';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return getLayout(
		(
			<>
				<PrimeReactProvider>
					<DashboardLayout>
						{/* <DndContext collisionDetection={closestCenter}> */}
						<Component {...pageProps} />
						{/* </DndContext> */}
					</DashboardLayout>
					<Toaster />
				</PrimeReactProvider>
			</>
		)
	);
}