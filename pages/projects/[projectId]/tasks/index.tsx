import { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
// import CreateTaskButton from '@/components/CreateTaskButton';
import TaskForm from '@/components/TaskForm';
import ProjectPreview from '@/components/ProjectPreview';
import TaskColumn from '@/components/TaskColumn';
import { Column } from '@/types';

type CreateNewIssueButtonProp = {
  setVisible?: (val: boolean) => void;
};

const Tasks = () => {
  const isAdmin = true;
  const router = useRouter();
  const { query: { projectId } } = router;

  const [columns, setColumns] = useState<Column[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const fetchColumData = async () => {
    setIsLoading(true);
    const data = await fetch('/api/columns');
    const response = await data.json();
    setIsLoading(false);
    return response.data!;
  };

  useEffect(() => {
    const fetchDataAndSetColumns = async () => {
      const response = await fetchColumData();
      setColumns(response);
    };

    fetchDataAndSetColumns();
  }, []);


  const CreateTaskButton: FC<CreateNewIssueButtonProp> = () => {
    return (
      <Button
        label='New Task 1'
        size='small'
        className='bg-black text-white'
        onClick={() => router.push(`/projects/${projectId}/tasks/newTask`)}
      />
    );
  };

  return (
    <section className='h-full w-full overflow-y-auto'>
      <div className='h-full flex items-start justify-start flex-col gap-4'>
        {/* <ProjectPreview /> */}
        {isAdmin && (
          <div className='w-full flex items-end justify-end px-8'>
            <CreateTaskButton />
          </div>
        )}
        {/* Tasks Columns */}
        <div className='w-full flex items-start justify-start gap-3 px-8 h-[calc(100%-288px)]'>
          {columns?.map((column) => (
            <TaskColumn
              key={column.id}
              title={column.title}
              tasks={column.items}
              isLoading={isLoading}
              id={column.id}
            />
          ))}
        </div>
      </div>

      <Dialog
        header='New Issue'
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
    </section>
  );
};

export default Tasks;

import { Button } from 'primereact/button';
import { FC } from 'react';
import { useRouter } from 'next/router';


