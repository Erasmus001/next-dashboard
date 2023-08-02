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
						<Component {...pageProps} />
					</DashboardLayout>
					<Toaster />
				</PrimeReactProvider>
			</>
		)
	);
}
