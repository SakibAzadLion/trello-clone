import Card from './Card';

const ListBody = ({ listId, cards, onDragStart, onDragOver }) => {
  const cardsMarkup = cards.map((card, idx) => {
    return (
      <Card
        key={card.id}
        index={idx}
        listId={listId}
        card={card}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
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
