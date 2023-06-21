import { BsPlusLg, BsStopwatch, BsThreeDots, BsXLg } from 'react-icons/bs';

const List = ({ light }) => {
  return (
    <div
      className='flex flex-col w-64 rounded-xl'
      style={{
        backgroundColor: light.listBackground,
        color: light.listText,
      }}
    >
      <div className='relative flex flex-row justify-between items-center px-2.5 pt-2 pb-2.5'>
        <h4 className='text-sm font-medium ml-2.5'>To Do</h4>
        <button className='w-6 h-6'>
          <span className='flex flex-row justify-center items-center w-full h-full hover:bg-gray-300 transition duration-200 rounded'>
            <BsThreeDots style={{ fill: light.listText }} />
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

      {/* List */}
      <div className='px-2.5'>
        <div className='flex flex-col'>
          <div className='flex flex-col mb-1.5 rounded-md bg-white shadow-sm'>
            <div className=''>
              {/* <div className='h-15 w-full'>
                          <img
                            src='https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI'
                            className='rounded-t-md object-cover object-center'
                          />
                        </div> */}

              <div className='h-8 w-full bg-yellow-700 rounded-t-md'></div>
            </div>

            <div className='grid grid-cols-5 gap-x-1 gap-y-[3px] px-2.5 pt-3'>
              <div className='h-1.5 w-full bg-green-700 rounded'></div>
              <div className='h-1.5 w-full bg-green-700 rounded'></div>
              <div className='h-1.5 w-full bg-green-700 rounded'></div>
              <div className='h-1.5 w-full bg-green-700 rounded'></div>
              <div className='h-1.5 w-full bg-green-700 rounded'></div>
              <div className='h-1.5 w-full bg-green-700 rounded'></div>
              <div className='h-1.5 w-full bg-green-700 rounded'></div>
            </div>

            <div className='px-2.5 py-2'>
              <p className='text-xs'>This is me sakib azad lion</p>
            </div>

            <div className='flex px-2.5 pb-2'>
              <div className='flex flex-row items-center px-1 py-1.5 bg-yellow-500 rounded'>
                <BsStopwatch
                  className='mr-[2px] fill-current text-gray-700'
                  style={{ fontSize: '12px' }}
                />
                <span className='text-[11px] text-gray-700 leading-none'>
                  Jun 19
                </span>
              </div>
            </div>
          </div>

          <div className='flex flex-col rounded-md bg-white shadow-sm'>
            <div className='px-2.5 py-2'>
              <p className='text-xs'>This is me sakib azad lion</p>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default List;
