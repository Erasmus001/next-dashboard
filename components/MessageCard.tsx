import Link from 'next/link';
import React from 'react';

type MessageProp = {
  data?: Object;
};

type Message = {
  id: string | number;
  msgText: string;
  sender: string;
  date: Date | string;
};

type MessageCardProp = MessageProp & {
  title: string;
  message?: Message;
};

const MessageCard = ({ title, message, data }: MessageCardProp) => {
  return (
    <Link href={`/messages/${data}`} className='w-full flex items-start justify-start bg-white p-4 hover:bg-gray-200 ease-linear cursor-pointer border-b'>
      <h4 className='text-sm'>{title}</h4>
    </Link>
  );
};

export default MessageCard;