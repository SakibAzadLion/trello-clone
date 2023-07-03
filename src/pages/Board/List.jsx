import ListHeader from './ListHeader';
import ListFooter from './ListFooter';
import ListBody from './ListBody';

const List = ({
  light,
  listId,
  title,
  cards,
  onDragStart,
  updateStateOnDrop,
}) => {
  const handleDragDrop = (e) => {
    let elem = e.target.closest('#card');

    if (!elem) {
      elem = e.target.closest('#list');
    }

    const elemOffsetMid = elem.offsetTop + Math.abs(elem.offsetHeight / 2);
    let dropCardIndex = Number;

    if (e.clientY <= elemOffsetMid) {
      dropCardIndex = elem.dataset.index ? Number(elem.dataset.index) : 0;
    } else {
      dropCardIndex = elem.dataset.index
        ? Number(elem.dataset.index) + 1
        : cards.length;
    }

    console.log('Drag drop...');
    updateStateOnDrop(listId, dropCardIndex);
  };
  return (
    <div
      id='list'
      className='flex flex-col w-64 rounded-xl'
      style={{
        backgroundColor: light.listBackground,
        color: light.listText,
      }}
      onDrop={handleDragDrop}
    >
      <ListHeader title={title} />

      <ListBody listId={listId} cards={cards} onDragStart={onDragStart} />

      <ListFooter />
    </div>
  );
};

export default List;
