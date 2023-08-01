import { useRouter } from 'next/router';
import { CommentType } from '@/types';
import Comment from '@/components/Comment';

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
    <section className='h-full w-full flex items-start justify-start'>
      {/* Left Side */}
      <div className='w-3/4 h-[calc(100%-64px)] flex items-start justify-start flex-col'>
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
        <div className='w-full h-[calc(100%-64px)] py-8 px-20 overflow-y-auto flex items-start justify-start flex-col gap-4'>
          {/* Title */}
          <div className='w-full rounded-sm py-3 px-2 bg-white'>
            <h2>Task Details</h2>
          </div>
          <div className='w-full rounded-sm bg-white py-4 px-2 min-h-52 h-56 xl:h-56  border-gray border-2'>
            <h2>Task Description....</h2>
          </div>

          {/* Comments */}
          <div className='w-full flex items-start justify-start flex-col gap-5'>
            <div className='w-full'>
              <h3 className=''>Comments</h3>
            </div>
            <div className='w-full flex items-start justify-start flex-col gap-2 p-3'>
              {comments?.map((comment) => (
                <Comment comment={comment} key={comment.userId} />
              ))}
            </div>
          </div>

          <div className='w-full border rounded-md shadow-md'>
            <form className='w-full flex items-start justify-start flex-col overflow-hidden'>
              <textarea
                name='comment'
                id=''
                className='w-full border-0 p-4 resize-none rounded-md focus:ring-0 text-sm'
                rows={5}
                placeholder='Leave a comment...'
              ></textarea>
              <div className='w-full flex items-end justify-end py-3 px-5'>
                <button className='text-sm border rounded-md cursor-pointer bg-gray-200 py-2 px-4'>
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Task Details + Title+ Desc + Comments + Comment Box + Sidebar */}
      <div className='flex flex-1 bg-white h-full flex-col gap-2 border-l'>
        {/* <h1>He</h1> */}
        {/* <header className='h-16 border-b border-gray-300 w-full flex items-center justify-start px-8'></header> */}

        <div className='w-full p-5 flex items-start justify-start flex-col gap-5'>
          <div className='w-full flex items-center justify-start'>
            <div className='w-28 text-sm'>Status</div>
            <div className='w-28 text-sm'>Todo</div>
          </div>
          <div className='w-full flex items-center justify-start'>
            <div className='w-28 text-sm'>Priority</div>
            <div className='w-28 text-sm'>Medium</div>
          </div>
          <div className='w-full flex items-center justify-start'>
            <div className='w-28 text-sm'>Assignees</div>
            <div className='w-28 text-sm'>Todo</div>
          </div>
          <div className='w-full flex items-center justify-start'>
            <div className='w-28 text-sm'>Label</div>
            <div className='w-28 text-sm'>Label</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskDetail;
