import ColumnCardLoader from './ColumnCardLoader';
import ColumnCard from './ColumnCard';
import { Task } from '@/types';

type TaskColumnProp = {
  title: string;
  id: string | number;
  tasks: Task[];
  isLoading: boolean;
};

const TaskColumn = ({ title, tasks, isLoading, id }: TaskColumnProp) => {
  return (
    <div className={`border rounded-md w-full bg-gray-50 overflow-hidden`} onDragEnd={() => alert(`Item placed on ${title}`)}>
      {/* Column Head */}
      <div className='w-full flex items-start justify-between p-3 bg-white shadow-sm'>
        <h4 className='text-sm font-semibold'>{title}</h4>
        <span className='py-1 px-3 text-black text-sm rounded-md border'>
          {tasks.length}
        </span>
      </div>
      {/* Column Tasks */}
      <div className='w-full h-full'>
        {isLoading &&
          tasks.map((task) => <ColumnCardLoader key={task.taskId} />)}
        <div className='w-full h-full flex items-start justify-start flex-col gap-2 p-2 overflow-y-auto max-h-[650px]'>
          {tasks?.map((task) => (
            <div
              key={task.taskId}
              className='w-full'
            >
              <ColumnCard
                task={task}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskColumn;
