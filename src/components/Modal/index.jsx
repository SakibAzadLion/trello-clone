import { useState } from 'react';
import {
  BsCardImage,
  BsChevronDown,
  BsClock,
  BsTag,
  BsTrash,
  BsXLg,
} from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../menus/Menu';
import LabelsMenu from '../menus/LabelsMenu';
import CoverMenu from '../menus/CoverMenu';

const cardsTemplate = [
  {
    id: -1,
    desc: '',
  },
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

const labelsTemplate = [
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
]

const Modal = () => {
  const [cards, setCards] = useState([...cardsTemplate]);
  const [labels, setLables] = useState([...labelsTemplate]);
  const [showLabelsMenu, setShowLabelsMenu] = useState(false);
  const [showCoverMenu, setShowCoverMenu] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const card = cards.find((curCard) => curCard.id == id);

  const openLabelsMenu = () => setShowLabelsMenu(true);
  const openCoverMenu = () => setShowCoverMenu(true);

  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-black/40 transition duration-150'>
      <div className='relative w-3/6 mx-auto bg-gray-100 rounded-md mt-20'>
        <div
          className='absolute right-3 top-2 flex justify-center items-center w-10 h-10 hover:bg-gray-200 transition duration-200 rounded-full cursor-pointer'
          onClick={() => navigate(-1)}
        >
          <BsXLg style={{ fontSize: '15px' }} />
        </div>

        {/* Cover */}
        <div>
          {card.cover.image && (
            <div className='h-32'>
              <img
                src='https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI'
                className='h-full w-full object-cover rounded-t'
              />
            </div>
          )}

          {card.cover.color && (
            <div className='h-20'>
              <div className='w-full h-full bg-yellow-700 rounded-t'></div>
            </div>
          )}
        </div>

        <div className='grid grid-cols-3 px-5 py-8'>
          <div className='col-span-2'>
            <div className='mb-8'>
              <h1 className='text-lg font-semibold'>Board title</h1>
            </div>

            <div className='flex flex-col'>
              <div className='flex flex-col mb-5'>
                <span className='text-xs mb-2'>Labels</span>
                <div className='flex flex-row'>
                  {card.labels.length > 0 &&
                    card.labels.map((curLabel, idx) => (
                      <div
                        key={idx}
                        className='h-8 w-14 bg-red-800 mr-1.5 rounded'
                      ></div>
                    ))}
                </div>
              </div>

              {/* <div className='flex flex-col'>
                <span className='text-xs mb-2'>Due Date</span>
                <button className='flex flex-row items-center w-fit bg-gray-200 px-3 py-2 mb-1.5 rounded hover:bg-gray-300 transition duration-200'>
                  <span className='text-xs mr-2'>10 June 2010</span>
                  <BsChevronDown style={{ fontSize: '12px' }} />
                </button>
              </div> */}
            </div>
          </div>
          <div className='flex flex-col mt-5'>
            <span className='text-xs mb-2'>Add to card</span>
            <div className='flex flex-col'>
              <div className='relative'>
                <button
                  className='flex flex-row items-center w-full bg-gray-200 px-2.5 py-2 mb-1.5 rounded hover:bg-gray-300 transition duration-200'
                  onClick={openLabelsMenu}
                >
                  <BsTag />
                  <span className='text-xs ml-2'>Labels</span>
                </button>
                {showLabelsMenu && (
                  <LabelsMenu title='Label' showMenu={setShowLabelsMenu} labels={labels} />
                )}
              </div>

              <div className='relative'>
                <button
                  className='flex flex-row items-center w-full bg-gray-200 px-2.5 py-2 mb-1.5 rounded hover:bg-gray-300 transition duration-200'
                  onClick={openCoverMenu}
                >
                  <BsCardImage className='text-[14px]' />
                  <span className='text-xs ml-2'>Cover</span>
                </button>

                {showCoverMenu && (
                  <CoverMenu title='Cover' showMenu={setShowCoverMenu} />
                )}
              </div>

              {/* <button className='flex flex-row items-center bg-gray-200 px-2.5 py-2 mb-1.5 rounded hover:bg-gray-300 transition duration-200'>
                <BsClock className='text-[14px]' />
                <span className='text-xs ml-2'>Dates</span>
              </button> */}

              <button className='flex flex-row items-center bg-red-200 px-2.5 py-2 mb-1.5 rounded hover:bg-red-300 transition duration-200'>
                <BsTrash className='text-[14px]' />
                <span className='text-xs ml-2'>Delete card</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
