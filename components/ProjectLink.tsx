import { ProjectType } from '@/types';
import Link from 'next/link';
import React from 'react';

type ProjectLinkProp = {
  project: ProjectType;
};

const ProjectLink = ({ project }: ProjectLinkProp) => {
  const { desc, id, title } = project;
  return (
    <Link href={`/projects/${id}`} className='bg-white rounded-md w-full flex items-start justify-start flex-col gap-3 shadow-sm h-fit overflow-hidden border ease-linear'>
      <div className="h-32 w-full bg-gray-200"></div>
      <div className='w-full px-3 pb-5'>
        <h3 className='font-semibold text-lg'>{title || `Project ${id} title`}</h3>
        <p className='text-[16px] text-gray-500 truncate'>{desc || "Description...."}</p>
        <p className='text-[16px] text-gray-500 truncate'>{desc || "Description...."}</p>
        <p className='text-[16px] text-gray-500 truncate'>{desc || "Description...."}</p>
      </div>
    </Link>
  );
};

export default ProjectLink;