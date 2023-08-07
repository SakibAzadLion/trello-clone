import { useContext, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CardContext, CardMethodsContext } from '../../context/CardContext';

const CardTitle = ({ desc }) => {
  const { cards, setCards } = useContext(CardContext);
  const { updateDesc } = useContext(CardMethodsContext);

  const [text, setText] = useState(desc);
  const [isEditing, setIsEditing] = useState(false);

  const textRef = useRef(null);

  const { id } = useParams();

  const updateCardDesc = (text) => {
    const newCards = cards.map((curCard) => {
      if (curCard.id != id) return curCard;

      updateDesc(curCard.id, text);

      return { ...curCard, desc: text };
    });

    setCards(newCards);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsEditing(false);
    }
  };

  const handleTextChange = (e) => {
    const textarea = textRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';

    setText(e.target.value);
  };

  const handleFocusOut = () => {
    updateCardDesc(text);
    setIsEditing(false);
  };

  const getStyle = (editing) => {
    if (editing) return 'card-title-edit  is-editing';

    return 'card-title-edit';
  };

  return (
    <div className='relative'>
      <textarea
        className={getStyle(isEditing)}
        autoFocus
        value={text}
        rows={1}
        readOnly={!isEditing ? true : false}
        ref={textRef}
        onKeyDown={handleKeyDown}
        onBlur={handleFocusOut}
        onClick={() => setIsEditing(true)}
        onChange={handleTextChange}
      >
        {text}
      </textarea>
      <h1 className='mr-4 text-lg font-semibold leading-5 hidden'>{text}</h1>
    </div>
  );
};

export default CardTitle;
