import Menu from './Menu';

const colors = [
  {
    id: 0,
    colorHex: '#4bce97',
  },
  {
    id: 1,
    colorHex: '#3498db',
  },
  {
    id: 2,
    colorHex: '#9b59b6',
  },
  {
    id: 3,
    colorHex: '#f1c40f',
  },
  {
    id: 4,
    colorHex: '#e67e22',
  },
  {
    id: 5,
    colorHex: '#e74c3c',
  },
];

const images = [
  {
    id: 0,
    imageUrl:
      'https://fastly.picsum.photos/id/688/600/400.jpg?hmac=M014VOlusw1Md_8vEx6Tk-GIDuv1VHvgcTTNGGzt4Ac',
  },
  {
    id: 1,
    imageUrl:
      'https://fastly.picsum.photos/id/459/600/400.jpg?hmac=n3Krd9fH0v3W0RCYNLw6IcI2A17urizqjxYLlv_Df3c',
  },
  {
    id: 2,
    imageUrl:
      'https://fastly.picsum.photos/id/311/600/400.jpg?hmac=cJ_Vez6d3h70x9AOCJJPy9ePkCmIRHJ12yyIWRB6zd0',
  },
  {
    id: 3,
    imageUrl:
      'https://fastly.picsum.photos/id/164/600/400.jpg?hmac=AeaV1BoMa0SBprKJm71cmlXO7mUuDsQU5t-n-xUZlus',
  },
  {
    id: 4,
    imageUrl:
      'https://fastly.picsum.photos/id/14/600/400.jpg?hmac=v4ezawdoSkP3qaSGMqEfoX7t_-tS_kb1Y8Q66ds-qcE',
  },
  {
    id: 5,
    imageUrl:
      'https://fastly.picsum.photos/id/660/600/400.jpg?hmac=-Xa17m6IaMAzxF5w6G72Zyd_tC-0dYMx3WNeCx9WekI',
  },
];

const CoverMenu = ({ title, cover, showMenu, onCoverChange }) => {
  const getColorStyles = (colorId, curColorId) => {
    if (colorId === null || colorId !== curColorId) return 'w-full h-8 rounded';

    return 'active-cover w-full h-8 rounded';
  };

  const getImageStyles = (imageId, curImageId) => {
    if (imageId === null || imageId !== curImageId)
      return 'object-cover w-full h-full rounded';

    return 'active-cover object-cover w-full h-full rounded';
  };

  return (
    <Menu title={title} showMenu={showMenu}>
      <div className='flex flex-col py-2 px-3'>
        <span className='text-xs mb-2'>Colors</span>
        <div className='flex flex-col'>
          <div className='grid grid-cols-4 gap-2'>
            {colors.map((curColor) => (
              <div
                key={curColor.id}
                className={getColorStyles(cover.color, curColor.id)}
                style={{
                  backgroundColor: curColor.colorHex,
                }}
                onClick={() => onCoverChange('color', curColor.id)}
              ></div>
            ))}
          </div>
        </div>

        <span className='text-xs mb-2 mt-4'>Photos</span>
        <div className='flex flex-col'>
          <div className='grid grid-cols-3 gap-1.5'>
            {images.map((curImage) => (
              <div
                key={curImage.id}
                className='relative w-full h-12'
                onClick={() => onCoverChange('image', curImage.id)}
              >
                <img
                  src={curImage.imageUrl}
                  className={getImageStyles(cover.image, curImage.id)}
                />
                <div className='absolute top-0 left-0 w-full h-full bg-black/20 hover:bg-black/30 transition duration-200 rounded'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default CoverMenu;
