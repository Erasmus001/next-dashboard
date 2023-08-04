import EmployeeCard from '@/components/EmployeeCard';
import TaskForm from '@/components/TaskForm';
import { EmployeeType } from '@/types';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import React, { useState } from 'react';
import Head from 'next/head';

const Employees = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const Employees: EmployeeType[] = [
    {
      name: 'User 1',
      id: '0021',
      imgUrl: ''
    },
    {
      name: 'User 2',
      id: '0022',
      imgUrl: ''
    },
    {
      name: 'User 3',
      id: '0023',
      imgUrl: ''
    },
    {
      name: 'User 4',
      id: '0024',
      imgUrl: ''
    },
    {
      name: 'User 5',
      id: '0025',
      imgUrl: ''
    },
    {
      name: 'User 6',
      id: '0026',
      imgUrl: ''
    },
    {
      name: 'User 7',
      id: '0027',
      imgUrl: ''
    },
    {
      name: 'User 8',
      id: '0028',
      imgUrl: ''
    },
  ];

  return (
    <>
      <Head>
        <title>
          Dashboard | {visible ? "New Employee" : "Employees"}
        </title>
      </Head>
      <div className='bg-gray-100 h-[calc(100vh-64px)] overflow-y-auto px-8 pt-8 w-full flex items-start justify-start flex-col gap-10 pb-10'>
        <div className='flex items-center justify-between w-full'>
          <h3 className='text-3xl font-bold'>Employees Lists</h3>
          <Button label='+ Create Employee' size='small' onClick={() => setVisible(true)} />
        </div>

        <div className='max-2xl:grid max-2xl:grid-cols-5 md:gap-2 max-2xl:gap-4 w-full md:grid md:grid-cols-4'>
          {
            Employees.map((employee) => <EmployeeCard data={employee} key={employee.id} />)
          }
        </div>

        {/* New Employee Modal */}
        <Dialog
          header='Create Employee'
          visible={visible}
          style={{ width: '50vw' }}
          onHide={() => setVisible(false)}
          closeOnEscape
          baseZIndex={5}
          draggable={false}
          dismissableMask
          focusOnShow={false}
        >
          <TaskForm />
        </Dialog>
      </div>
    </>
  );
};

export default Employees;