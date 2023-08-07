import { useContext, useState } from 'react';
import { BsPlusLg, BsXLg } from 'react-icons/bs';

import { ListContext } from '../../context/ListContext';
import { CardMethodsContext } from '../../context/CardContext';

const ListFooter = ({ listIdx }) => {
  const { lists, setLists } = useContext(ListContext);
  const { createCard } = useContext(CardMethodsContext);

  const [desc, setDesc] = useState('');
  const [toggleAddCard, setToggleAddCard] = useState(false);

  const handleOnClick = () => setToggleAddCard(!toggleAddCard);
  const updateDesc = (e) => setDesc(e.target.value);

  const addNewCard = async (listIdx, desc) => {
    const newCard = await createCard(desc);

    const newList = JSON.parse(JSON.stringify(lists));
    newList[listIdx].cards.splice(newList.length, 0, newCard.id);

    setLists(newList);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      addNewCard(listIdx, desc);

      setDesc('');
      setToggleAddCard(false);
    }
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    addNewCard(listIdx, desc);

    setDesc('');
    setToggleAddCard(false);
  };

  return (
    <div className='px-2.5 pt-1.5 pb-2'>
      {toggleAddCard ? (
        <form onSubmit={handleAddCard}>
          <div className='flex flex-col'>
            <textarea
              className='bg-white w-full h-15 px-2.5 py-2 text-xs resize-none overflow-hidden rounded-lg outline-none shadow-sm'
              placeholder='Enter a title for this card...'
              autoFocus
              value={desc}
              onChange={updateDesc}
              onKeyDown={handleKeyDown}
            ></textarea>

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
                onClick={handleOnClick}
              />
            </div>
          </div>
        </form>
      ) : (
        <button
          className='flex flex-row w-full items-center px-2 py-1.5 hover:bg-gray-300 transition duration-200 rounded-md'
          onClick={handleOnClick}
        >
          <BsPlusLg />
          <span className='text-xs mx-1.5'>Add a card</span>
        </button>
      )}
    </div>
  );
};

export default ListFooter;
