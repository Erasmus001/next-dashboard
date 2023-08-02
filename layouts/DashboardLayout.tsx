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
      <section className='w-full flex-1 h-screen bg-yellow-300 flex flex-col items-start justify-start'>
        <Header />
        <div className='w-full h-[calc(100%-64px)] overflow-y-auto bg-red-300'>
          {children}
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;