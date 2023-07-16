const Card = ({
  index,
  cardIdx,
  listIdx,
  card,
  isDragging,
  dragItem,
  handleDragStart,
  handleDragEnter,
}) => {
  const getStyle = () => {
    if (
      dragItem.current.listIdx === listIdx &&
      dragItem.current.cardIdx === cardIdx
    ) {
      return 'current drag-item';
    }

    return 'drag-item';
  };

  return (
    <a
      id='card'
      className={isDragging ? getStyle() : 'drag-item'}
      draggable='true'
      data-index={index}
      onDragStart={(e) => handleDragStart(e, { listIdx, cardIdx })}
      onDragEnter={(e) => handleDragEnter(e, { listIdx, cardIdx })}
    >
      {/* <div className=''>
        <div className='h-15 w-full'>
          <img
            src='https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI'
            className='rounded-t-md object-cover object-center'
          />
        </div>

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
      </div> */}

      <div className='px-2.5 py-2'>
        <p className='text-xs'>{card.desc}</p>
      </div>


      {/* <div className='flex px-2.5 pb-2'>
        <div className='flex flex-row items-center px-1 py-1.5 bg-yellow-500 rounded'>
          <BsStopwatch
            className='mr-[2px] fill-current text-gray-700'
            style={{ fontSize: '12px' }}
          />
          <span className='text-[11px] text-gray-700 leading-none'>Jun 19</span>
        </div>
      </div> */}
    </a>
  );
};

export default Card;
