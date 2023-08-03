import { useRouter } from 'next/router';
// import { CommentType } from '@/types';
import Tasks from './tasks';
import ProjectPreview from '@/components/ProjectPreview';
import Head from 'next/head';

const TaskDetail = () => {
  const { query } = useRouter();
  const { projectId } = query;

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Dashboard | Project {projectId}</title>
      </Head>
      <section className='h-full w-full flex items-start justify-start flex-col'>
        {/* Left Side */}
        <div className='w-full h-[calc(100vh-64px)] flex items-start justify-start flex-col'>
          <header className='h-16 border-b border-gray-300 w-full flex items-center justify-start px-8 gap-4'>
            <button
              className='text-black text-sm py-1.5 px-4 hover:bg-gray-50 rounded-md'
              onClick={() => router.back()}
            >
              Back
            </button>
            <div className='text-[13px]'>
              Viewing Task Details for Project: {' '}
              <span className='p-1.5 px-3 rounded-sm bg-gray-100 font-semibold'>
                #{projectId}
              </span>
            </div>
          </header>

          {/* Details */}
          <div className='w-full h-[calc(100%-64px)] flex items-start justify-start flex-col pb-3'>
            <div className='overflow-y-auto w-full h-full flex items-start justify-start flex-col gap-3'>
              {/* Title */}
              <ProjectPreview />
              <Tasks />
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default TaskDetail;
