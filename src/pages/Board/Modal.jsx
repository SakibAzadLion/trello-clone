import {
  BsCardImage,
  BsChevronDown,
  BsClock,
  BsTag,
  BsTrash,
  BsXLg,
} from 'react-icons/bs';

const Modal = ({ light }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-black/40'>
      <div
        className='relative w-3/6 mx-auto rounded-md mt-20'
        style={{
          backgroundColor: light.listBackground,
          color: light.listText,
        }}
      >
        <div className='absolute right-3 top-2 flex justify-center items-center w-10 h-10 hover:bg-gray-200 transition duration-200 rounded-full cursor-pointer'>
          <BsXLg style={{ fontSize: '15px' }} />
        </div>

        {/* Cover */}
        <div>
          {/* <div className='h-32'>
                  <img src='https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI' className='h-full w-full object-cover rounded-t' />
                </div> */}

          <div className='h-20'>
            <div className='w-full h-full bg-yellow-700 rounded-t'></div>
          </div>
        </div>

        <div className='grid grid-cols-3 px-5 py-8'>
          <div className='col-span-2'>
            <div className='mb-8'>
              <h1 className='text-lg font-semibold'>Board title</h1>
            </div>

            <div className='flex flex-col'>
              <div className='flex flex-col mb-5'>
                <span className='text-xs mb-2'>Labels</span>
                <div className='flex flex-row'>
                  <div className='h-8 w-14 bg-red-800 mr-1.5 rounded'></div>
                  <div className='h-8 w-14 bg-red-800 mr-1.5 rounded'></div>
                  <div className='h-8 w-14 bg-red-800 mr-1.5 rounded'></div>
                  <div className='h-8 w-14 bg-red-800 mr-1.5 rounded'></div>
                  <div className='h-8 w-14 bg-red-800 mr-1.5 rounded'></div>
                </div>
              </div>

              <div className='flex flex-col'>
                <span className='text-xs mb-2'>Due Date</span>
                <button className='flex flex-row items-center w-fit bg-gray-200 px-3 py-2 mb-1.5 rounded hover:bg-gray-300 transition duration-200'>
                  <span className='text-xs mr-2'>10 June 2010</span>
                  <BsChevronDown style={{ fontSize: '12px' }} />
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-5'>
            <span className='text-xs mb-2'>Add to card</span>
            <div className='flex flex-col'>
              <div className='relative'>
                <button className='flex flex-row items-center w-full bg-gray-200 px-2.5 py-2 mb-1.5 rounded hover:bg-gray-300 transition duration-200'>
                  <BsTag />
                  <span className='text-xs ml-2'>Labels</span>
                </button>

                {/* <div className='absolute -top-5 right-[-210px] w-60 bg-white shadow-lg rounded'>
                        <div className='flex flex-col w-full'>
                          <div className='grid grid-cols-5 items-center px-3 py-2.5 rounded border-b-[1px]'>
                            <span className='col-start-2 col-span-3 text-xs text-center'>
                              Labels
                            </span>
                            <BsXLg className='justify-self-end text-sm cursor-pointer' />
                          </div>

                          <div className='flex flex-col py-1.5 px-3'>
                            <span className='text-xs mb-2'>Labels</span>
                            <div className='flex flex-col'>
                              <div className='flex flex-row items-center mb-1.5'>
                                <input
                                  type='checkbox'
                                  className='mr-2'
                                  id='label-1'
                                />
                                <label
                                  htmlFor='label-1'
                                  className='block relative w-full h-7'
                                >
                                  <div className='w-full h-full bg-green-500 rounded-sm'></div>
                                </label>
                              </div>
                              <div className='flex flex-row items-center mb-1.5'>
                                <input
                                  type='checkbox'
                                  className='mr-2'
                                  id='label-2'
                                />
                                <label
                                  htmlFor='label-2'
                                  className='block relative w-full h-7'
                                >
                                  <div className='w-full h-full bg-green-500 rounded-sm'></div>
                                </label>
                              </div>
                              <div className='flex flex-row items-center mb-1.5'>
                                <input
                                  type='checkbox'
                                  className='mr-2'
                                  id='label-3'
                                />
                                <label
                                  htmlFor='label-3'
                                  className='block relative w-full h-7'
                                >
                                  <div className='w-full h-full bg-green-500 rounded-sm'></div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
              </div>

              <div className='relative'>
                <button className='flex flex-row items-center w-full bg-gray-200 px-2.5 py-2 mb-1.5 rounded hover:bg-gray-300 transition duration-200'>
                  <BsCardImage className='text-[14px]' />
                  <span className='text-xs ml-2'>Cover</span>
                </button>

                <div className='absolute -top-5 right-[-210px] w-72 bg-white shadow-lg rounded'>
                  <div className='flex flex-col w-full'>
                    <div className='grid grid-cols-5 items-center px-3 py-2.5 rounded border-b-[1px]'>
                      <span className='col-start-2 col-span-3 text-xs text-center'>
                        Labels
                      </span>
                      <BsXLg className='justify-self-end text-sm cursor-pointer' />
                    </div>

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
                  </div>
                </div>
              </div>

              <button className='flex flex-row items-center bg-gray-200 px-2.5 py-2 mb-1.5 rounded hover:bg-gray-300 transition duration-200'>
                <BsClock className='text-[14px]' />
                <span className='text-xs ml-2'>Dates</span>
              </button>

              <button className='flex flex-row items-center bg-red-200 px-2.5 py-2 mb-1.5 rounded hover:bg-red-300 transition duration-200'>
                <BsTrash className='text-[14px]' />
                <span className='text-xs ml-2'>Delete card</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
