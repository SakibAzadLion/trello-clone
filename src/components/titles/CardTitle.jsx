import { useRef, useState } from 'react';

const CardTitle = ({ desc, onDescChange }) => {
  const [text, setText] = useState(desc);
  const [isEditing, setIsEditing] = useState(false);

  const textRef = useRef(null);

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
    onDescChange(text);
    setIsEditing(false);
  };

  const getStyle = (editing) => {
    if (editing) {
      return 'card-title-edit  is-editing';
    }

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
