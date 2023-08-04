import { Button } from 'primereact/button';
import { FC } from 'react';
import { useRouter } from 'next/router';

type CreateNewIssueButtonProp = {
  setVisible?: (val: boolean) => void;
};

const CreateTaskButton: FC<CreateNewIssueButtonProp> = () => {
  const router = useRouter();

  return (
    <Button
      label='New Task'
      size='small'
      className='bg-black text-white'
      onClick={() => router.push(`/${''}`)}
      // color='red'

    />
  );
};

export default CreateTaskButton;
