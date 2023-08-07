import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CardContext, CardMethodsContext } from '../../context/CardContext';
import { labels } from '../../data';

import Menu from './Menu';

const LabelsMenu = ({ title, selectedLabels, showMenu }) => {
  const { cards, setCards } = useContext(CardContext);
  const { updateLabels } = useContext(CardMethodsContext);

  const { id } = useParams();

  const handleLabelChange = (e, labelId) => {
    const newCards = cards.map((curCard) => {
      if (curCard.id != id) return curCard;

      const isChecked = e.target.checked;
      const newLabels = curCard.labels.filter(
        (curLabel) => curLabel !== labelId
      );

      if (isChecked) {
        newLabels.push(labelId);
        newLabels.sort();
      }

      updateLabels(curCard.id, newLabels);

      return { ...curCard, labels: newLabels };
    });

    setCards(newCards);
  };

  return (
    <Menu title={title} showMenu={showMenu}>
      <div className='flex flex-col py-1.5 px-3'>
        <span className='text-xs mb-2'>{title}s</span>

        <div className='flex flex-col'>
          {labels.map((curLabel) => (
            <div
              key={curLabel.id}
              className='flex flex-row items-center mb-1.5'
            >
              <input
                name={curLabel.id}
                type='checkbox'
                className='mr-2'
                id={`lable-${curLabel.id}`}
                value={true}
                checked={selectedLabels.includes(curLabel.id) ? true : false}
                onChange={(e) => handleLabelChange(e, curLabel.id)}
              />
              <label
                htmlFor={`lable-${curLabel.id}`}
                className='block relative w-full h-7'
              >
                <div
                  className='w-full h-full rounded-sm'
                  style={{ backgroundColor: curLabel.colorHex }}
                ></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </Menu>
  );
};

export default LabelsMenu;
