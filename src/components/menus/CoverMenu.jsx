import Menu from './Menu';

const CoverMenu = ({ title, showMenu }) => {
  return (
    <Menu title={title} showMenu={showMenu}>
      <div className='flex flex-col py-2 px-3'>
        <span className='text-xs mb-2'>Colors</span>
        <div className='flex flex-col'>
          <div className='grid grid-cols-5 gap-1.5'>
            <div className='w-full h-8 bg-yellow-500 rounded'></div>
            <div className='w-full h-8 bg-yellow-500 rounded'></div>
            <div className='w-full h-8 bg-yellow-500 rounded'></div>
            <div className='w-full h-8 bg-yellow-500 rounded'></div>
            <div className='w-full h-8 bg-yellow-500 rounded'></div>
            <div className='w-full h-8 bg-yellow-500 rounded'></div>
            <div className='w-full h-8 bg-yellow-500 rounded'></div>
            <div className='w-full h-8 bg-yellow-500 rounded'></div>
            <div className='w-full h-8 bg-yellow-500 rounded'></div>
          </div>
        </div>

        <span className='text-xs mb-2 mt-4'>Photos</span>
        <div className='flex flex-col'>
          <div className='grid grid-cols-3 gap-1.5'>
            <div className='relative w-full h-12'>
              <img
                src='https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI'
                className='object-cover w-full h-full rounded'
              />
              <div className='absolute top-0 left-0 w-full h-full bg-black/20 hover:bg-black/30 transition duration-200 rounded'></div>
            </div>
            <div className='relative w-full h-12'>
              <img
                src='https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI'
                className='object-cover w-full h-full rounded'
              />
              <div className='absolute top-0 left-0 w-full h-full bg-black/20 hover:bg-black/30 transition duration-200 rounded'></div>
            </div>
            <div className='relative w-full h-12'>
              <img
                src='https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI'
                className='object-cover w-full h-full rounded'
              />
              <div className='absolute top-0 left-0 w-full h-full bg-black/10 hover:bg-black/20 transition duration-200 rounded'></div>
            </div>
            <div className='relative w-full h-12'>
              <img
                src='https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI'
                className='object-cover w-full h-full rounded'
              />
              <div className='absolute top-0 left-0 w-full h-full bg-black/20 hover:bg-black/30 transition duration-200 rounded'></div>
            </div>
            <div className='relative w-full h-12'>
              <img
                src='https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI'
                className='object-cover w-full h-full rounded'
              />
              <div className='absolute top-0 left-0 w-full h-full bg-black/20 hover:bg-black/30 transition duration-200 rounded'></div>
            </div>
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default CoverMenu;
