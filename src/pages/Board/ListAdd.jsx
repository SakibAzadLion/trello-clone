import { useContext, useRef, useState } from 'react';
import { BsPlusLg, BsXLg } from 'react-icons/bs';

import { ListMethodsContext } from '../../context/ListContext';

const ListAdd = () => {
  const { getLists, createList } = useContext(ListMethodsContext);

  const [listTitle, setListTitle] = useState('');
  const [toggleAddList, setToggleAddList] = useState(false);

  const addListNode = useRef(null);

  const updateListTitle = (e) => setListTitle(e.target.value);

  const handleToggle = () => {
    if (!toggleAddList) {
      setToggleAddList(true);
    } else {
      addListNode.current.classList.remove('animate-add-list-forward');

      setTimeout(() => {
        addListNode.current.classList.add('animate-add-list-backward');
      }, 0);

      setTimeout(() => {
        setToggleAddList(false);
      }, 200);
    }
  };

  const addNewList = (title) => {
    // const newList = {
    //   id: Number(Date.now().toString().slice(10)),
    //   title,
    //   cards: [],
    // };
    // const newLists = [...lists, newList];
    // setLists(newLists);
    createList(title);
    getLists();
  };

  const handleAddList = (e) => {
    e.preventDefault();

    addNewList(listTitle);

    setListTitle('');
    setToggleAddList(false);
  };

  return (
    <div className='w-64'>
      {toggleAddList ? (
        <form onSubmit={handleAddList}>
          <div
            className='animate-add-list-forward flex flex-col px-2 py-3 bg-gray-100 rounded-xl'
            ref={addListNode}
          >
            <input
              className='bg-white w-full h-15 px-2.5 py-2 text-xs overflow-hidden rounded-md outline-none border-2 border-blue-600'
              placeholder='Enter a title for this card...'
              autoFocus
              value={listTitle}
              onChange={updateListTitle}
            ></input>

            <div className='flex flex-row mt-2 items-center'>
              <button className='bg-blue-600 mr-2 hover:bg-blue-700 text-xs text-white font-normal py-2 px-3 rounded'>
                Add card
              </button>
              <BsXLg
                style={{
                  fontSize: '18px',
                  cursor: 'pointer',
                  fill: '#172b4d',
                }}
                onClick={handleToggle}
              />
            </div>
          </div>
        </form>
      ) : (
        <button
          className='flex flex-row w-full items-center px-2 py-3 text-white bg-gray-100/40 hover:bg-gray-400/40 transition duration-200 rounded-md'
          onClick={handleToggle}
        >
          <BsPlusLg className='fill-white text-white' />
          <span className='text-xs mx-1.5'>Add a card</span>
        </button>
      )}
    </div>
  );
};

export default ListAdd;
