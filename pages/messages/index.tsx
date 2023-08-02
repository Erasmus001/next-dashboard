import MessageCard from '@/components/MessageCard';
import React, { ReactElement } from 'react';

const Messages = () => {
  return (
    <section className='w-full flex h-[calc(100vh-64px)] items-start justify-start'>
      {/* <MessagesSidebar /> */}
      <h3>Main Message</h3>
    </section>
  );
};

Messages.getLayout = (page: ReactElement) => {
  return (
    <div className='w-full flex items-start justify-start'>
      <MessagesSidebar />
      {page}
    </div>
  );
};

export default Messages;

const MessagesSidebar = () => {
  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <nav className='w-80 h-full bg-white border-r'>
      <div className='w-full flex items-center justify-start h-14 bg-gray-50 px-4'>
        <h3 className='text-xl font-semibold text-slate-900'>Messages</h3>
      </div>
      <div className="w-full h-full overflow-y-auto">
        {
          originalArray.map((index) => {
            return (
              <div key={index}>
                <MessageCard key={index} data={index} title={`My ${index} message`} />
              </div>
            );
          })
        }
      </div>
    </nav>
  );
};
