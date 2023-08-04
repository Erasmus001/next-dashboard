import { FormEvent, useState } from 'react';
import { Editor, EditorTextChangeEvent } from 'primereact/editor';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import Head from 'next/head';


interface StatusProp {
  backlog: string;
  todo: string;
  inProgress: string;
  completed: string;
}

const NewTask = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<StatusProp | null>(null);

  const router = useRouter();

  const handleCreateTask = (event: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    event.preventDefault();

    if (!title || !description) {
      toast.error('Please provide input values');
      return;
    } else {
      console.log('====================================');
      console.log({ title, description });
      console.log('====================================');
      toast.success('Task created successfully');

      setTitle('');
      setDescription('');

      setTimeout(() => {
        router.back();
      }, 2000);
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard | Create New Task</title>
      </Head>
      <section className='w-full flex items-start justify-start flex-col h-[calc(100vh-64px)]'>
        <header className='h-16 w-full flex items-center justify-between px-8 text-white shadow-sm gap-4 border-b'>
          <button
            className='text-black text-sm py-1.5 px-4 hover:bg-gray-50 rounded-md'
            onClick={() => router.back()}
          >
            Back
          </button>
          <div className='flex items-center justify-center'>
            <div className='w-full ml-96'>
              <button
                type='button'
                onClick={handleCreateTask}
                className='text-white p-1.5 px-3 bg-blue-400 rounded-md hover:bg-blue-500 ease-in-out'
              >
                Create task
              </button>
            </div>
          </div>
          <div className='flex items-center justify-center'>
          </div>
          {/* <h3 className='text-black text-base font-normal'>Create New Task</h3> */}
        </header>
        <div className='w-full flex items-start justify-start h-[calc(100%-64px)]'>
          <div className='w-[70%] flex items-center justify-center flex-col px-14 overflow-auto h-full py-10'>
            {/* Form */}
            <form
              className='w-full h-full flex flex-col gap-2 items-start justify-start pb-10'
              onSubmit={handleCreateTask}
            >
              <div className='w-full flex flex-col items-start justify-start gap-3'>
                <input
                  type='text'
                  id='title'
                  name='title'
                  placeholder='Task title'
                  // required
                  value={title}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setTitle(event.target.value)
                  }
                  className='w-full text-3xl font-semibold text-black border-0 focus:ring-transparent focus:border-0 placeholder:text-md placeholder:font-semibold placeholder:text-gray-300 first-letter:capitalize focus:outline-0'
                  minLength={10}
                // maxLength={45}
                />
                <div className='w-full'>
                  <Editor
                    value={description}
                    placeholder='Add description...'
                    onTextChange={(e: EditorTextChangeEvent) =>
                      setDescription(e?.textValue)
                    }
                    style={{ height: '420px' }}
                    autoCorrect='true'
                    enterKeyHint='done'
                  // required
                  />
                </div>
              </div>
            </form>
          </div>

          <div className='flex flex-1 bg-gray-50 h-full flex-col gap-2 border-l'>
            <div className='w-full p-5 flex items-start justify-start flex-col gap-5'>
              <div className='w-full flex items-center justify-start'>
                <div className='w-28 text-sm'>Status:</div>
                {/* <div className='w-28 text-sm'>Todo</div> */}
                <Dropdown
                  value={selectedStatus}
                  onChange={(e: DropdownChangeEvent) =>
                    setSelectedStatus(e.value)
                  }
                  // options={''}
                  optionLabel='Status'
                  size={1}
                  placeholder='Select a status'
                  className='w-full md:w-14rem'
                />
              </div>
              <div className='w-full flex items-center justify-start'>
                <div className='w-28 text-sm'>Priority</div>
                <Dropdown
                  value={selectedStatus}
                  onChange={(e: DropdownChangeEvent) =>
                    setSelectedStatus(e.value)
                  }
                  // options={''}
                  optionLabel='Priority'
                  size={1}
                  placeholder='Set priority'
                  className='w-full md:w-14rem'
                />
              </div>
              <div className='w-full flex items-center justify-start'>
                <div className='w-28 text-sm'>Assignees</div>
                <div className='w-28 text-sm'>Todo</div>
              </div>
              <div className='w-full flex items-center justify-start'>
                <div className='w-28 text-sm'>Label</div>
                <Dropdown
                  value={selectedStatus}
                  onChange={(e: DropdownChangeEvent) =>
                    setSelectedStatus(e.value)
                  }
                  // options={''}
                  optionLabel='Label'
                  size={1}
                  placeholder='Select a label'
                  clearIcon
                  className='w-full md:w-14rem'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default NewTask;
