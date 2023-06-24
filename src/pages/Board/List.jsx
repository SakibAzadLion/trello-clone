import ListHeader from './ListHeader';
import ListFooter from './ListFooter';
import ListBody from './ListBody';

const List = ({
  light,
  listId,
  title,
  cards,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDragLeave,
  onDrop,
}) => {
  const handleDragDrop = (e) => {
    console.log('Drag drop...');
    console.log(e.target);
    onDrop(listId);
  };

  return (
    <div
      className='flex flex-col w-64 rounded-xl'
      style={{
        backgroundColor: light.listBackground,
        color: light.listText,
      }}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={handleDragDrop}
    >
      <ListHeader title={title} />

      <ListBody listId={listId} cards={cards} onDragStart={onDragStart} />

      <ListFooter />
    </div>
  );
};

export default List;
