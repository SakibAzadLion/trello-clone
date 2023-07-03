import { useState } from 'react';
// import { BsPlusLg, BsStopwatch, BsThreeDots, BsXLg } from 'react-icons/bs';

import Navbar from './Navbar';
import BoardTitle from './BoardTitle';
import List from './List';
// import Modal from './Modal';
import ListAdd from './ListAdd';
import CardFloat from './CardFloat';
import { list } from 'postcss';

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
  const [dragCard, setDragCard] = useState(null);
  const [dragStartList, setDragStartList] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dragCardPosition, setDragCardPosition] = useState({ top: 0, left: 0 });

  // console.log(dragCardPosition);
  // console.log(mousePosition, dragCardPosition);

  const handleDragStart = (cardId, listId, dragCardPosition) => {
    setDragCard(cardId);
    setDragStartList(listId);
    setDragCardPosition(dragCardPosition);
  };

  const handleDragEnd = (e) => {
    // console.log(e); // here target is the element which we are dragging.
    e.target.style.opacity = '1';

    setDragCard(null);
    setDragStartList(null);
    console.log('Drag end...');
  };

  // Continues firing after the drag is started
  const handleDragOver = (e) => {
    e.preventDefault();
    

    const newPosition = {
      x: e.clientX,
      y: e.clientY,
    };

    setMousePosition(newPosition);
    console.log('Drag over...');
  };

  // Fire every time we leave an element
  const handleDragLeave = (e) => {
    e.preventDefault();
    console.log('Drag leave...');
  };

  const updateStateOnDrop = (dropListId, dropCardIndex) => {
    // console.log(e); // here target is the element above which the drag element is droped.
    setDragCard(null);
    setDragStartList(null);

    const newList = lists.map((list) => {
      // Return if dropped at the same list
      if (dragStartList === dropListId) {
        return list;
      }

      // Make a copy cards property
      const tempCards = [...list.cards];

      // Update cards list
      if (list.id === dragStartList) {
        const newCards = tempCards.filter((card) => card !== dragCard);
        return { ...list, cards: newCards };
      }

      if (list.id === dropListId) {
        if (dropCardIndex === null) {
          return { ...list, cards: [...tempCards, dragCard] };
        }

        return {
          ...list,
          cards: [
            ...tempCards.slice(0, dropCardIndex),
            dragCard,
            ...tempCards.slice(dropCardIndex),
          ],
        };
      }

      return list;
    });

    // console.log(newList);
    setLists(newList);
  };

  // const handleDragDrop = (e) => {
  //   let listElem = e.target.closest('#list');
  //   console.log(listElem);

  //   if (!listElem) return;

  //   let elem = e.target.closest('#card');

  //   if (!elem) {
  //     elem = e.target.closest('#list');
  //   }

  //   const elemOffsetMid = elem.offsetTop + Math.abs(elem.offsetHeight / 2);
  //   let dropCardIndex = Number;

  //   if (e.clientY <= elemOffsetMid) {
  //     dropCardIndex = elem.dataset.index ? Number(elem.dataset.index) : 0;
  //   } else {
  //     dropCardIndex = elem.dataset.index
  //       ? Number(elem.dataset.index) + 1
  //       : cards.length;
  //   }

  //   console.log('Drag drop...');
  //   updateStateOnDrop(0, dropCardIndex);
  // };

  const listsMarkup = lists.map((list) => {
    const populatedCards = list.cards.map((cardId) => {
      const newCard = cards.find((card) => card.id === cardId);
      return { ...newCard };
    });

    return (
      <List
        key={list.id}
        listId={list.id}
        title={list.title}
        cards={populatedCards}
        light={themes.light}
        onDragStart={handleDragStart}
        updateStateOnDrop={updateStateOnDrop}
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
          // backgroundColor: '#fff'
        }}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        // onDrop={() => {

        // }}
      >
        <Navbar {...themes} />

        {/* Board Main */}
        <div>
          {/* Board Title */}
          <BoardTitle />

          {/* Board List */}
          <div className='px-10 py-4'>
            <div id='listBox' className='flex flex-row items-start [&>*]:mr-4'>
              {listsMarkup}

              <ListAdd />
            </div>
          </div>

          {/* Modal */}
          {/* <Modal {...themes} /> */}
        </div>

        {dragCard !== null && (
          <CardFloat
            mousePosition={mousePosition}
            dragCardPosition={dragCardPosition}
          >
            <a
              id='card'
              className='flex flex-col mb-1.5 rounded-md bg-white shadow-sm cursor-grab'
              draggable='true'
            >
              <div className='px-2.5 py-2'>
                <p className='text-xs'>{cards[dragCard].desc}</p>
              </div>
            </a>
          </CardFloat>
        )}
      </div>
    </>
  );
};

export default Board;
