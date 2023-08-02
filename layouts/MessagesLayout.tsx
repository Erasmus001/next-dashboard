import { MessagesSidebar } from '@/pages/messages';
import { NextPage } from 'next';
import React, { ReactElement } from 'react';

type MessagesLayoutProp = {
  children: ReactElement;
};

const MessagesLayout: NextPage<MessagesLayoutProp> = ({ children }) => {
  return (
    <div className='h-screen w-screen flex items-start justify-start'>
      <MessagesSidebar />
      <div className='h-full w-full'>
        {children}
      </div>
    </div>
  );
};

export default MessagesLayout;