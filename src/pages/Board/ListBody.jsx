import Card from './Card';

const ListBody = ({ listIdx, cards, isDragging, dragItem, handleDragStart, handleDragEnter, handleDragEnd }) => {
  const cardsMarkup = cards.map((card, idx) => {
    return (
      <Card
        key={card.id}
        cardIdx={idx}
        listIdx={listIdx}
        card={card}
        isDragging={isDragging}
        dragItem={dragItem}
        handleDragStart={handleDragStart}
        handleDragEnter={handleDragEnter}
        handleDragEnd={handleDragEnd}
      />
    );
  });

  return (
    <div className='px-2.5'>
      <div className='flex flex-col'>{cardsMarkup}</div>
    </div>
  );
};

export default ListBody;
