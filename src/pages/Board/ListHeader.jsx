import { BsThreeDots } from 'react-icons/bs';

const ListHeader = ({ title }) => {
  return (
    <div className='relative flex flex-row justify-between items-center px-2.5 pt-2 pb-2.5'>
      <h4 className='text-sm font-medium ml-2.5'>{title}</h4>
      <button className='w-6 h-6'>
        <span className='flex flex-row justify-center items-center w-full h-full hover:bg-gray-300 transition duration-200 rounded'>
          <BsThreeDots style={{ fill: '#172b4d' }} />
        </span>
      </button>

      {/* <div className='absolute -top-5 right-[-210px] w-60 bg-white shadow-lg rounded z-40'>
          <div className='flex flex-col w-full'>
            <div className='grid grid-cols-5 items-center px-3 py-2.5 rounded border-b-[1px]'>
              <span className='col-start-2 col-span-3 text-xs text-center'>
                List Actions
              </span>
              <BsXLg className='justify-self-end text-sm cursor-pointer' />
            </div>

            <div className='flex flex-col py-1'>
              <div className='hover:bg-gray-200 transition duration-200 cursor-pointer'>
                <div className='px-3 py-1'>
                  <span className='text-xs text-center'>Add card...</span>
                </div>
              </div>

              <div className='hover:bg-gray-200 transition duration-200 cursor-pointer'>
                <div className='px-3 py-1'>
                  <span className='text-xs text-center'>Copy list...</span>
                </div>
              </div>

              <div className='hover:bg-gray-200 transition duration-200 cursor-pointer'>
                <div className='px-3 py-1'>
                  <span className='text-xs text-center'>Move list...</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default ListHeader;
