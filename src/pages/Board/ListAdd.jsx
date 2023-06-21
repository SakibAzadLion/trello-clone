import { BsPlusLg } from 'react-icons/bs';

const ListAdd = () => {
  return (
    <div className='w-64'>
      <div className='flex flex-row items-center px-2 py-3 text-white bg-gray-100/40 hover:bg-gray-400/40 transition duration-200 rounded-md cursor-pointer'>
        <BsPlusLg className='fill-white' />
        <span className='text-xs mx-1.5'>Add a card</span>
      </div>
    </div>
  );
};

export default ListAdd;
