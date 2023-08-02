import { Task } from '@/types';
import { useRouter } from 'next/router';

type ColumnCardProp = {
  task: Task;
  isDraggingOver?: boolean;
};


const ColumnCard = ({ task }: ColumnCardProp) => {
  const router = useRouter();
  const { query: { projectId } } = router;

  return (
    <div
      onClick={() => router.push(`/projects/${projectId}/tasks/${task.taskId}`)}
      className={`w-full bg-white p-3 py-4.5 rounded-md shadow-md cursor-pointer gap-3 ease-in-out`}
      draggable
    >
      {/* Task Title */}
      <div className='w-full flex items-start justify-start flex-col gap-2'>
        <div className='h-28 w-full rounded-sm bg-gray-200'></div>
        <h4 className='text-base font-semibold'>{task.title}</h4>
        <p className='text-sm truncate max-h-10 max-w-[200px] flex-wrap'>
          {task.desc || 'Task description goes here...'}
        </p>
      </div>
      {/* Tags */}
      {/* <div className='w-full flex items-start justify-start leading-normal mt-2 gap-1'>
        {task?.tags?.length}
      </div> */}
      <div className='w-full flex items-start justify-start flex-col leading-relaxed mt-2'>
        <h4 className='text-[13px] font-normal mb-2 text-gray-600'>
          Due date: 20th Jan, 2025
        </h4>
        <div className='w-full flex items-center justify-start -gap-x-4.5'>
          <div className='h-8 w-8 rounded-full bg-gray-200'></div>
          <div className='h-8 w-8 rounded-full bg-gray-200'></div>
          <div className='h-8 w-8 rounded-full bg-gray-200'></div>
        </div>
      </div>
      {/* <ContextMenu model={menu} ref={cm} breakpoint='767px' /> */}
    </div>
  );
};

export default ColumnCard;
