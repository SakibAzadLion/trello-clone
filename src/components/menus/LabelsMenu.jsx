import Menu from './Menu';

const labels = [
  {
    id: 0,
    colorHex: '#4bce97',
  },
  {
    id: 1,
    colorHex: '#3498db',
  },
  {
    id: 2,
    colorHex: '#9b59b6',
  },
  {
    id: 3,
    colorHex: '#f1c40f',
  },
  {
    id: 4,
    colorHex: '#e67e22',
  },
  {
    id: 5,
    colorHex: '#e74c3c',
  },
];

const LabelsMenu = ({ title, selectedLabels, showMenu, onLabelChange }) => {
  // const [selectedLabels, setShowLabelsMenu] = useState([]);

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
                onChange={(e) => onLabelChange(e, curLabel.id)}
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
