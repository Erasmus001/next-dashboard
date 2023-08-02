const ProjectPreview = () => {
  return (
    <section className='w-full flex flex-col gap-4 items-start justify-start py-12 px-10 bg-black h-72'>
      {/* Title */}
      <div className='w-full flex items-start justify-start flex-col gap-5'>
        <h2 className='text-4xl font-bold text-white'>Marketing Website</h2>
      </div>
      {/* Info */}
      <div className='flex w-fit flex-col gap-2'>
        <div className='flex items-start justify-start gap-12 w-96'>
          <h4 className='text-white text-[13px] w-20'>Priority:</h4>
          <h4 className='text-white text-[13px] text-start w-28'>High</h4>
        </div>
        <div className='flex items-start justify-start gap-12 w-96'>
          <h4 className='text-white text-[13px] w-20'>Assignees:</h4>
          <h4 className='text-white text-[13px] text-start w-28'>
            Erasmus, Micky
          </h4>
        </div>
        <div className='flex items-start justify-start gap-12 w-96'>
          <h4 className='text-white text-[13px] w-20'>Deadline:</h4>
          <h4 className='text-white text-[13px] text-start w-28'>
            24th June, 2025
          </h4>
        </div>
        <div className='flex items-start justify-start gap-12 w-96'>
          <h4 className='text-white text-[13px] w-20'>Tags:</h4>
          <h4 className='text-white text-[13px] text-start w-28'>Designs</h4>
        </div>
      </div>
    </section>
  );
};

export default ProjectPreview;
