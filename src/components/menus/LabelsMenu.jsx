import Menu from './Menu';

const LabelsMenu = ({ title, showMenu, labels }) => {
//   const [selectedLabels, setShowLabelsMenu] = useState([]);

  return (
    <Menu title={title} showMenu={showMenu}>
      <div className='flex flex-col'>
        {labels.map((curLabel) => (
          <div key={curLabel.id} className='flex flex-row items-center mb-1.5'>
            <input
                name={curLabel.id}
              type='checkbox'
              className='mr-2'
              id={`lable-${curLabel.id}`}
            //   onChange={handleLabelChange}
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
    </Menu>
  );
};

export default LabelsMenu;
