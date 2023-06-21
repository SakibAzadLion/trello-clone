import { BsChevronDown, BsCircleHalf, BsTrello } from 'react-icons/bs';

const Navbar = ({ light }) => {
  return (
    <nav
      className='flex flex-row items-center px-5 py-1.5 w-full border-b-[1px] border-[hsla(218,54%,19.6%,0.16)]'
      style={{
        backgroundColor: light.navbarBg,
        color: light.textColor,
      }}
    >
      <div className='flex flex-row items-center px-2.5 py-1 rounded hover:bg-gray-300 transition duration-200 cursor-pointer'>
        <BsTrello />
        <h1 className='text-xl font-extrabold tracking-wide ml-1.5'>Trello</h1>
      </div>
      <div className='flex flex-row items-center mx-1'>
        <button className='flex flex-row items-center px-2 py-2 rounded hover:bg-gray-300 transition duration-200 cursor-pointer'>
          <span className='text-sm mr-1.5'>Templates</span>
          <BsChevronDown style={{ fontSize: '12px' }} />
        </button>
      </div>
      <div className='flex flex-row items-center ml-auto mr-2'>
        <button className=''>
          <span className='flex justify-center items-center h-8 w-8 rounded-full hover:bg-gray-300 transition duration-200 cursor-pointer'>
            <BsCircleHalf />
          </span>
        </button>

        <button className='ml-2'>
          <span className='flex justify-center items-center h-8 w-8 rounded-full hover:bg-gray-300 transition duration-200 cursor-pointer'>
            <span className='flex justify-center items-center h-6 w-6 rounded-full bg-purple-700'>
              <span className='text-xs font-light text-white'>S</span>
            </span>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
