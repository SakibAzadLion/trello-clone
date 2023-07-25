import { useEffect, useRef } from 'react';
import { BsXLg } from 'react-icons/bs';

const Menu = ({ title, showMenu, children }) => {
  const menuRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener('click', checkClickOutside);
    }, 0);

    return () => {
      document.removeEventListener('click', checkClickOutside);
    };
  }, []);

  const checkClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      showMenu(false);
    }
  };

  const handleMenuClose = () => showMenu(false);

  return (
    <div
      className='absolute -top-5 right-[-210px] w-60 bg-white shadow-lg rounded z-50'
      ref={menuRef}
    >
      <div className='flex flex-col w-full'>
        <div className='grid grid-cols-5 items-center px-3 py-2.5 rounded border-b-[1px]'>
          <span className='col-start-2 col-span-3 text-xs text-center'>
            {title}
          </span>

          <div
            className='justify-self-end cursor-pointer'
            onClick={handleMenuClose}
          >
            <BsXLg className=' text-sm ' />
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Menu;
