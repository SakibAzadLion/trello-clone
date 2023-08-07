import { useContext } from 'react';
import { CardContext, CardMethodsContext } from '../../context/CardContext';
import { colors, images } from '../../data';

import Menu from './Menu';
import { useParams } from 'react-router-dom';

const CoverMenu = ({ title, cover, showMenu }) => {
  const { cards, setCards } = useContext(CardContext);
  const { updateCover } = useContext(CardMethodsContext);

  const { id } = useParams();

  const handleCoverChange = (type, coverId) => {
    const newCards = cards.map((curCard) => {
      if (curCard.id != id) return curCard;

      let newCover = { color: null, image: null };

      if (type === 'color') {
        newCover = { color: coverId, image: null };
      } else {
        newCover = { image: coverId, color: null };
      }

      updateCover(curCard.id, newCover);

      return { ...curCard, cover: newCover };
    });

    setCards(newCards);
  };

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
                onClick={() => handleCoverChange('color', curColor.id)}
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
                onClick={() => handleCoverChange('image', curImage.id)}
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
