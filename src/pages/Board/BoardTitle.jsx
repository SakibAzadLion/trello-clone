import { useState } from 'react';

const BoardTitle = () => {
  const [title, setTitle] = useState('To Do App');
  const [isTitleEditable, setIsTitleEditable] = useState(false);

  const handleInputChange = (e) => setTitle(e.target.value);
  
  return (
    <div className='flex flex-row items-center px-5 py-2 w-full bg-black/20 backdrop-blur-sm'>
      {isTitleEditable ? (
        <form
          className='ml-3'
          onBlur={() => setIsTitleEditable(!isTitleEditable)}
        >
          <input
            className='h-[36px] px-2.5 py-1 text-lg font-bold tracking-wide bg-white rounded outline-none border-2 border-blue-500'
            value={title}
            style={{
              width: `${title.length * 9.6 + 24}px`,
            }}
            autoFocus
            onChange={handleInputChange}
            onFocus={(e) => e.target.select()}
          />
        </form>
      ) : (
        <button
          className='flex flex-row items-center px-3 py-1 ml-3 rounded hover:bg-gray-500 transition duration-200'
          onClick={() => setIsTitleEditable(!isTitleEditable)}
        >
          <h1 className='text-lg font-bold text-white tracking-wide'>
            {title}
          </h1>
        </button>
      )}
    </div>
  );
};

export default BoardTitle;
