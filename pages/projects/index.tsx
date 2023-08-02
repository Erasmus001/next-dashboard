import Modal from '@/components/Modal';
import ProjectLink from '@/components/ProjectLink';
import { ProjectsData } from '@/data';
import Head from 'next/head';
import { Button } from 'primereact/button';
import { useState } from 'react';

const Projects = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Dashboard | Projects</title>
      </Head>
      <section className='w-full h-[calc(100vh-64px)] bg-gray-50'>
        <div className='w-full h-full flex items-start justify-start flex-col gap-5 px-8 overflow-y-auto pb-5'>
          <div className='w-full pt-8 flex items-start justify-between'>
            <h2 className='font-semibold text-2xl'>Projects</h2>
            <Modal />
          </div>

          {/* Projects List */}
          <div className='grid grid-cols-4 gap-5 w-full'>
            {
              ProjectsData?.map((project) => (
                <ProjectLink project={project} key={project.id} />
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

// <ProjectLink title='First Project' desc='My first project description' id={index} key={index} />