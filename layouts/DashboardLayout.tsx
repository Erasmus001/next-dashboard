import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { NextPage } from 'next';
import React, { ReactElement } from 'react';

type DashboardLayoutProp = {
  children: ReactElement;
};

const DashboardLayout: NextPage<DashboardLayoutProp> = ({ children }) => {
  return (
    <div className='h-screen w-screen flex items-start justify-start'>
      <Sidebar />
      <section className='w-full h-screen flex flex-col items-start justify-start'>
        <Header />
        <div className='h-full w-full'>
          {children}
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;