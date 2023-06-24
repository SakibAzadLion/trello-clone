import { useState } from 'react';
// import { BsPlusLg, BsStopwatch, BsThreeDots, BsXLg } from 'react-icons/bs';

import Navbar from './Navbar';
import BoardTitle from './BoardTitle';
import List from './List';
// import Modal from './Modal';
import ListAdd from './ListAdd';
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

  const handleDragStart = (cardId, listId) => {
    setDragCard(cardId);
    setDragStartList(listId);
  };
  const handleDragEnd = (e) => {
    // console.log(e); // here target is the element which we are dragging.
    setDragCard(null)
    setDragStartList(null);
    console.log('Drag end...');
  };

  // Continues firing after the drag is started
  const handleDragOver = (e) => {
    e.preventDefault();
    // console.log(e); // here target is the element over which we are dragging
    console.log('Drag over...');
  };

  // Fire every time we leave an element
  const handleDragLeave = (e) => {
    console.log(e); // here target is the element from which we leave while dragging
    console.log('Drag leave...');
  };
  const handleDrop = (dropListId) => {
    // console.log(e); // here target is the element above which the drag element is droped.
    const newList = lists.map((list) => {
      // Make a copy cards property
      const tempCards = [...list.cards];

      // Update cards list
      if (list.id === dragStartList) {
        console.log(dragStartList, dropListId, dragCard);
        const newCards = tempCards.filter((card) => card !== dragCard);
        return { ...list, cards: newCards };
      }

      if (list.id === dropListId) {
        return { ...list, cards: [...tempCards, dragCard] };
      }

      return list;
    });

    console.log(newList);
    setLists(newList);
  };

  const listsMarkup = lists.map((list) => {
    const populatedCards = cards.filter((card) => {
      if (list.cards.includes(card.id)) {
        return true;
      }

      return false;
    });

    return (
      <List
        key={list.id}
        listId={list.id}
        title={list.title}
        cards={populatedCards}
        light={themes.light}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      />
    );
  });

  return (
    <>
      <div
        className='h-screen'
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // backgroundColor: '#fff'
        }}
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
      </div>
    </>
  );
};

export default Board;
