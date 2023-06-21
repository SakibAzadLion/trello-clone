const BoardTitle = () => {
  return (
    <div className='flex flex-row items-center px-5 py-2 w-full bg-black/20 backdrop-blur-sm'>
      <div className='flex flex-row items-center px-3 py-1 ml-3 rounded hover:bg-gray-500 transition duration-200 cursor-pointer'>
        {/* <input className='text-xl font-bold tracking-wide bg-transparent text-white w-100' defaultValue='Work' /> */}
        <h1 className='text-lg font-bold text-white tracking-wide'>Work</h1>
      </div>
    </div>
  );
};

export default BoardTitle;
