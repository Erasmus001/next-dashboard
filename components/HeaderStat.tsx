const HeaderStat = () => {
  return (
    <div className='w-fit flex items-center justify-between gap-8'>
      <div className='flex items-start justify-start gap-4'>
        {/* Stat Image */}
        <div className='h-16 w-16 bg-gray-800 rounded-lg'></div>
        <div className='flex items-start justify-start flex-col gap-1'>
          <h3 className="text-gray-400 font-semibold">Ongoing Projects</h3>
          <h2 className="text-white text-3xl font-bold">4</h2>
        </div>
      </div>
      <div className='flex items-start justify-start gap-4'>
        {/* Stat Image */}
        <div className='h-16 w-16 bg-gray-800 rounded-lg'></div>
        <div className='flex items-start justify-start flex-col gap-1'>
          <h3 className="text-gray-400 font-semibold">Project Teams</h3>
          <h2 className="text-white text-3xl font-bold">3</h2>
        </div>
      </div>
      <div className='flex items-start justify-start gap-4'>
        {/* Stat Image */}
        <div className='h-16 w-16 bg-gray-800 rounded-lg'></div>
        <div className='flex items-start justify-start flex-col gap-1'>
          <h3 className="text-gray-400 font-semibold">Completed Courses</h3>
          <h2 className="text-white text-3xl font-bold">40</h2>
        </div>
      </div>
    </div>
  );
};

export default HeaderStat;
