import { useState } from 'react';
import { Editor, EditorTextChangeEvent } from 'primereact/editor';

const TaskForm = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  return (
    <form className='w-full flex flex-col gap-2 items-start justify-start bg-gray-200'>
      <div className='w-full flex flex-col items-start justify-start'>
        <input
          type='text'
          id='title'
          name='title'
          placeholder='Issue title'
          required
          value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
          className='w-full text-lg font-semibold text-black border-0 focus:ring-0 focus:border-0 placeholder:text-md placeholder:font-semibold placeholder:text-gray-600 first-letter:capitalize'
        />
        <div className='w-full'>
          <Editor
            value={description}
            placeholder='Add description...'
            onTextChange={(e: EditorTextChangeEvent) =>
              setDescription(e.textValue)
            }
            style={{ height: '320px' }}
            autoCorrect='true'
            enterKeyHint='enter'
          />
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
