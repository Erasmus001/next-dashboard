import { useRouter } from 'next/router';
import { CommentType } from '@/types';
import Tasks from './tasks';

const TaskDetail = () => {
  const { query } = useRouter();
  const { projectId } = query;

  const router = useRouter();

  const comments: CommentType[] = [
    {
      userId: '#WEB_10001',
      date: '15th May, 2023',
      comment: 'My very first comment',
    },
    {
      userId: '#WEB_10002',
      date: '15th May, 2023',
      comment: 'My very first comment',
    },
    {
      userId: '#WEB_10003',
      date: '15th May, 2023',
      comment: 'My very first comment',
    },
  ];

  return (
    <section className='h-full w-full flex items-start justify-start flex-col'>
      {/* Left Side */}
      <div className='w-full h-[calc(100vh-64px)] flex items-start justify-start flex-col gap-5'>
        <header className='h-16 border-b border-gray-300 w-full flex items-center justify-start px-8 gap-4'>
          <button
            className='text-black text-sm py-1.5 px-4 hover:bg-gray-50 rounded-md'
            onClick={() => router.back()}
          >
            Back
          </button>
          <div className='text-[13px]'>
            Viewing Task Details for task:{' '}
            <span className='p-1.5 px-3 rounded-sm bg-gray-100 font-semibold'>
              #{projectId}
            </span>
          </div>
        </header>

        {/* Details */}
        <div className='w-full h-[calc(100%-64px)] overflow-y-auto flex items-start justify-start flex-col'>
          {/* Title */}
          <Tasks />
        </div>
      </div>
    </section>
  );
};

export default TaskDetail;
