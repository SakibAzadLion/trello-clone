const CardFloat = ({ mousePosition, floatCard }) => {
  return (
    <div
      className={`absolute w-[236px] z-50 pointer-events-none duration-100 transition-transform`}
      style={{
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`,
        transform: `translate(-50%, -50%) skewY(1deg)`,
      }}
    >
      <a
        className='flex flex-col mb-1.5 rounded-md bg-white shadow-sm cursor-grab'
        draggable='true'
      >
        <div className='px-2.5 py-2'>
          <p className='text-xs'>{floatCard.desc}</p>
        </div>
      </a>
    </div>
  );
};

export default CardFloat;
