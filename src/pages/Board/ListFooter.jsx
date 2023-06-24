import { BsPlusLg } from 'react-icons/bs';

const ListFooter = () => {
  return (
    <div className='px-2.5 pt-1.5 pb-2'>
      <div className='flex flex-row items-center px-2 py-1.5 hover:bg-gray-300 transition duration-200 rounded-md cursor-pointer'>
        <BsPlusLg />
        <span className='text-xs mx-1.5'>Add a card</span>
      </div>
      {/* <div className='flex flex-col'>
                    <textarea
                      className='bg-white w-full h-15 px-2.5 py-2 text-xs resize-none overflow-hidden rounded-lg outline-none shadow-sm'
                      placeholder='Enter a title for this card...'
                    ></textarea>

                    <div className='flex flex-row mt-2 items-center'>
                      <button className='bg-blue-600 mr-2 hover:bg-blue-700 text-xs text-white font-normal py-2 px-3 rounded'>
                        Add card
                      </button>
                      <BsXLg
                        style={{
                          fontSize: '18px',
                          cursor: 'pointer',
                          fill: themes.light.listText,
                        }}
                      />
                    </div>
                  </div> */}
    </div>
  );
};

export default ListFooter;
