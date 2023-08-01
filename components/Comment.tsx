import { CommentType } from "@/types";

type CommentProp = {
  comment: CommentType;
};

const Comment = ({ comment }: CommentProp) => {
  return (
    <div className='w-full flex items-center justify-start gap-4'>
      <div className='flex items-center justify-start gap-4'>
        <div className='w-8 rounded-full bg-gray-200 h-8'></div>
      </div>
      <div>
        <small className='text-[11px]'>{comment.date}</small>
        <h4 className='text-[12px]'>{comment.comment}</h4>
      </div>
    </div>
  );
};

export default Comment;