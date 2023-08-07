import { useContext, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { ListContext, ListMethodsContext } from '../../context/ListContext';
import { CardContext, CardMethodsContext } from '../../context/CardContext';

import Navbar from './Navbar';
import BoardTitle from './BoardTitle';
import List from './List';
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

const Board = () => {
  const { lists, setLists } = useContext(ListContext);
  const { cards } = useContext(CardContext);
  const { getLists, updateListsCards } = useContext(ListMethodsContext);
  const { getCards } = useContext(CardMethodsContext);

  const [isDragging, setIsDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const dragItem = useRef(null);
  const dragItemPrev = useRef(null);
  const dragItemNode = useRef(null);

  useEffect(() => {
    getCards();
    getLists();
  }, []);

  useEffect(() => {
    updateListsCards();
  }, [lists, updateListsCards]);

  const handleDragStart = (e, item) => {
    console.log('Drag Started', item);
    dragItemNode.current = e.target;

    dragItemNode.current.addEventListener('dragend', handleDragEnd);

    dragItem.current = item;
    dragItemPrev.current = item;

    dragItemNode.current.style.opacity = '0';

    setTimeout(() => {
      setIsDragging(true);
      dragItemNode.current.style.opacity = '1';
    }, 0);
  };

  const handleDragEnter = (e, targetItem) => {
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
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setMousePosition({ x: 0, y: 0 });

    dragItemNode.current.removeEventListener('dragend', handleDragEnd);

    dragItem.current = null;
    dragItemPrev.current = null;
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

      <div id='boardMain' className='h-[calc(100%-6.5rem)]'>
        <BoardTitle />

        <div className='px-10 py-4 h-full'>
          <div
            id='listBox'
            className='grid gap-x-4 items-start h-full overflow-auto'
            style={{
              gridTemplateColumns: `repeat(${lists.length + 1}, 256px)`,
            }}
          >
            {listsMarkup}

            <ListAdd />
          </div>
        </div>

        {/* <Modal {...themes} /> */}
        <Outlet />
      </div>

      {isDragging && (
        <CardFloat mousePosition={mousePosition} floatCard={getDragCard()} />
      )}
    </div>
  );
};

export default Board;
