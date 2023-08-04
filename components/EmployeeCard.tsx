import { EmployeeType } from '@/types';
import React, { useState } from 'react';
import Link from 'next/link';

type EmployeeProp = {
  data: EmployeeType;
};

const EmployeeCard = ({ data }: EmployeeProp) => {
  // const [selected, setSelected] = useState<number | string>('');
  const role = "Admin";

  return (
    <Link href={`/employees/${data.name}`} className='w-full bg-white overflow-hidden rounded-md p-5 px-4 shadow flex items-start justify-start flex-col gap-2 border max-[300px]'>
      {
        role === "Admin" && (
          <div className='space-x-4 flex items-center justify-end w-full'>
            <Link href={`/employees/${data.name}`} className='font-semibold'>Edit</Link>
            <button className='text-red-600 font-semibold' onClick={() => alert(data.name)}>Delete</button>
          </div>
        )
      }
      <div className='w-full flex items-center justify-center'>
        {
          data?.imgUrl ? (
            <div>
              <img src={data.imgUrl || ""} alt={data?.name} loading='lazy' />
            </div>
          ) : (
            <div className='w-20 bg-gray-200 h-20 rounded-full'></div>
          )
        }
      </div>

      <div className="w-full flex items-center justify-center flex-col gap-1">
        <h3 className='text-xl font-semibold text-gray-800 capitalize'>{data.name}</h3>
        {/* <p className='text-base text-gray-500 font-semibold'>Role</p> */}
      </div>

      <div className="border p-3 w-full flex items-start justify-start flex-col gap-3 rounded-md border-gray-100">
        <div className='w-full flex items-start justify-between'>
          <div className="w-fit">
            <h4 className='text-sm font-semibold text-gray-600'>Department</h4>
            <p className='text-sm font-normal text-gray-800'>Design Team</p>
          </div>
          <div className="w-fit">
            <h4 className='text-sm font-semibold text-gray-600'>Date Hired</h4>
            <p className='text-xs font-normal text-gray-800'>12/02/2024</p>
          </div>
        </div>
        {/* <div className="">
          <div className="">
            <h4 className='text-sm font-semibold text-gray-600'>test@test.com</h4>
            <p className='text-xs font-normal text-gray-600'>+233 2525 4548</p>
          </div>
        </div> */}
        <div>View profile</div>
      </div>
    </Link>
  );
};

export default EmployeeCard;