import React, { ReactElement, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { toast } from 'react-hot-toast';

type Prop = {
  children?: ReactElement;
  title?: string;
};

const Modal = ({ children, title }: Prop) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleCreateProject = () => {
    toast.success('Project created successfully.');
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  const handleCancelProject = () => {
    toast.error('Project creation cancelled.');
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  const ModalFooter = () => {
    return (
      <div>
        <button className='p-2 px-6 text-sm rounded-md bg-gray-200 text-black' onClick={handleCancelProject}>Cancel</button>
        <button className='p-2 px-6 text-sm rounded-md bg-blue-500 text-white' onClick={handleCreateProject}>Create</button>
      </div>
    );
  };

  return (
    <div className='card flex justify-content-center'>
      <Button
        label='New project'
        onClick={() => setVisible(true)}
        size='small'
      />
      <Dialog
        header={title || "Modal Header"}
        visible={visible}
        style={{ width: '50vw' }}
        onHide={() => setVisible(false)}
        blockScroll
        closeOnEscape
        draggable={false}
        maximizable
        dismissableMask
        focusOnShow={false}
        footer={<ModalFooter />}
      >
        <p className='m-0'>
          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad." || children}
        </p>
      </Dialog>
    </div>
  );
};

export default Modal;


