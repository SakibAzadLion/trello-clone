import { useRef, useState } from 'react';
// import { BsPlusLg, BsStopwatch, BsThreeDots, BsXLg } from 'react-icons/bs';

import Navbar from './Navbar';
import BoardTitle from './BoardTitle';
import List from './List';
// import Modal from './Modal';
import ListAdd from './ListAdd';
import CardFloat from './CardFloat';

const themes = {
  light: {
    textColor: '#44546f',
    navbarBg: '#FAFBFC',
    navbarBtnHoverd: 'rgba(255, 255, 255, 0.3)',
    listBackground: '#f1f2f4',
    listText: '#172b4d',
  },
  dark: {
    textColor: '#44546f',
  },
};

const listsTemplate = [
  {
    id: 0,
    title: 'Do',
    cards: [0, 1],
  },
  {
    id: 1,
    title: 'Did',
    cards: [2],
  },
  {
    id: 2,
    title: 'Done',
    cards: [],
  },
];

const cardsTemplate = [
  {
    id: -1,
    desc: '',
  },
  {
    id: 0,
    desc: 'card #0',
    labels: ['#fff'],
    cover: {
      color: null,
      image: null,
    },
  },
  {
    id: 1,
    desc: 'card #1',
    labels: ['#fff'],
    cover: {
      color: null,
      image: null,
    },
  },
  {
    id: 2,
    desc: 'card #2',
    labels: ['#fff'],
    cover: {
      color: null,
      image: null,
    },
  },
];

const Board = () => {
  const [lists, setLists] = useState([...listsTemplate]);
  const [cards, setCards] = useState([...cardsTemplate]);
  const [isDragging, setIsDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [dragCardPosition, setDragCardPosition] = useState({ top: 0, left: 0 });

  const dragItem = useRef(null);
  const dragItemNode = useRef(null);

  const handleDragStart = (e, item) => {
    console.log('Drag Started', item);
    dragItemNode.current = e.target;

    dragItemNode.current.addEventListener('dragend', handleDragEnd);

    dragItem.current = item;

    dragItemNode.current.style.opacity = '0';

    setTimeout(() => {
      setIsDragging(true);
      dragItemNode.current.style.opacity = '1';
    }, 0);
  };

  const handleDragEnter = (e, targetItem) => {
    console.log('Drag Entered', targetItem);

    if (dragItemNode.current !== e.target) {
      const newList = JSON.parse(JSON.stringify(lists));
      const curDragItem = newList[dragItem.current.listIdx].cards.splice(
        dragItem.current.cardIdx,
        1
      )[0];

      newList[targetItem.listIdx].cards.splice(
        targetItem.cardIdx,
        0,
        curDragItem
      );

      dragItem.current = targetItem;

      setLists(newList);
    }
  };

  const handleDragOver = (e) => {
    console.log('Dragging Over...', e);
    console.log(e.clientX, e.clientY);
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleDragEnd = () => {
    console.log('Drag Ended');
    setIsDragging(false);
    setMousePosition({ x: 0, y: 0 });

    dragItemNode.current.removeEventListener('dragend', handleDragEnd);

    dragItem.current = null;
    dragItemNode.current = null;
  };

  const getDragCard = () => {
    if (!isDragging) return null;

    const curDragItem = JSON.parse(JSON.stringify(lists));

    const dragCardId =
      curDragItem[dragItem.current.listIdx].cards[dragItem.current.cardIdx];

    return cards.find((card) => card.id === dragCardId);
  };

  const listsMarkup = lists.map((list, idx) => {
    const populatedCards = list.cards.map((cardId) => {
      const newCard = cards.find((card) => card.id === cardId);
      return { ...newCard };
    });

    return (
      <List
        key={list.id}
        listIdx={idx}
        title={list.title}
        cards={populatedCards}
        light={themes.light}
        isDragging={isDragging}
        dragItem={dragItem}
        handleDragStart={handleDragStart}
        handleDragEnter={handleDragEnter}
        handleDragEnd={handleDragEnd}
      />
    );
  });

  return (
    <>
      <div
        className='relative h-screen overflow-hidden'
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onDragOver={handleDragOver}
      >
        <Navbar {...themes} />

        <div id='boardMain'>
          <BoardTitle />

          <div className='px-10 py-4'>
            <div id='listBox' className='flex flex-row items-start [&>*]:mr-4'>
              {listsMarkup}

              <ListAdd />
            </div>
          </div>

          {/* <Modal {...themes} /> */}
        </div>

        {isDragging && (
          <CardFloat mousePosition={mousePosition} floatCard={getDragCard()} />
        )}
      </div>
    </>
  );
};

export default Board;
