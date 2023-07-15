import ListHeader from './ListHeader';
import ListFooter from './ListFooter';
import ListBody from './ListBody';

const List = ({
  light,
  listIdx,
  title,
  cards,
  isDragging,
  dragItem,
  handleDragStart,
  handleDragEnter,
  handleDragEnd,
}) => {
  return (
    <div
      id='list'
      className='flex flex-col w-64 rounded-xl'
      style={{
        backgroundColor: light.listBackground,
        color: light.listText,
      }}
      onDragEnter={
        isDragging && !cards.length
          ? (e) => handleDragEnter(e, { listIdx, cardIdx: 0 })
          : null
      }
    >
      <ListHeader title={title} />

      <ListBody
        listIdx={listIdx}
        cards={cards}
        isDragging={isDragging}
        dragItem={dragItem}
        handleDragStart={handleDragStart}
        handleDragEnter={handleDragEnter}
        handleDragEnd={handleDragEnd}
      />

      <ListFooter />
    </div>
  );
};

export default List;
