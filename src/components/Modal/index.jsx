import { useState } from 'react';
import { BsCardImage, BsTag, BsTrash, BsXLg } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import LabelsMenu from '../menus/LabelsMenu';
import CoverMenu from '../menus/CoverMenu';

const cardsTemplate = [
  {
    id: 0,
    desc: 'card #0',
    labels: [3],
    cover: {
      color: 3,
      image: null,
    },
  },
  {
    id: 1,
    desc: 'card #1',
    labels: [2, 4],
    cover: {
      color: null,
      image: null,
    },
  },
  {
    id: 2,
    desc: 'card #2',
    labels: [0, 1, 5],
    cover: {
      color: null,
      image: null,
    },
  },
];

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

const images = [
  {
    id: 0,
    imageUrl:
      'https://fastly.picsum.photos/id/688/600/400.jpg?hmac=M014VOlusw1Md_8vEx6Tk-GIDuv1VHvgcTTNGGzt4Ac',
  },
  {
    id: 1,
    imageUrl:
      'https://fastly.picsum.photos/id/459/600/400.jpg?hmac=n3Krd9fH0v3W0RCYNLw6IcI2A17urizqjxYLlv_Df3c',
  },
  {
    id: 2,
    imageUrl:
      'https://fastly.picsum.photos/id/311/600/400.jpg?hmac=cJ_Vez6d3h70x9AOCJJPy9ePkCmIRHJ12yyIWRB6zd0',
  },
  {
    id: 3,
    imageUrl:
      'https://fastly.picsum.photos/id/164/600/400.jpg?hmac=AeaV1BoMa0SBprKJm71cmlXO7mUuDsQU5t-n-xUZlus',
  },
  {
    id: 4,
    imageUrl:
      'https://fastly.picsum.photos/id/14/600/400.jpg?hmac=v4ezawdoSkP3qaSGMqEfoX7t_-tS_kb1Y8Q66ds-qcE',
  },
  {
    id: 5,
    imageUrl:
      'https://fastly.picsum.photos/id/660/600/400.jpg?hmac=-Xa17m6IaMAzxF5w6G72Zyd_tC-0dYMx3WNeCx9WekI',
  },
];

const Modal = () => {
  const [cards, setCards] = useState([...cardsTemplate]);
  const [showLabelsMenu, setShowLabelsMenu] = useState(false);
  const [showCoverMenu, setShowCoverMenu] = useState(false);

  console.log(cards);

  const navigate = useNavigate();
  const { id } = useParams();

  const card = cards.find((curCard) => curCard.id == id);

  const openLabelsMenu = () => setShowLabelsMenu(true);
  const openCoverMenu = () => setShowCoverMenu(true);

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

      return { ...curCard, labels: newLabels };
    });
    setCards(newCards);
  };

  const handleCoverChange = (type, coverId) => {
    const newCards = cards.map((curCard) => {
      if (curCard.id != id) return curCard;

      let newCover = null;

      if (type === 'color') {
        newCover = { color: coverId, image: null };
      } else {
        newCover = { image: coverId, color: null };
      }

      return { ...curCard, cover: newCover };
    });

    setCards(newCards);
  };

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
          {card.cover.image !== null && (
            <div className='h-32'>
              <img
                className='h-full w-full object-cover rounded-t'
                src={
                  images.find((curImage) => curImage.id === card.cover.image)
                    .imageUrl
                }
              />
            </div>
          )}

          {card.cover.color !== null && (
            <div className='h-20'>
              <div
                className='w-full h-full rounded-t'
                style={{
                  backgroundColor: labels.find(
                    (curLabel) => curLabel.id === card.cover.color
                  ).colorHex,
                }}
              ></div>
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
                        className='h-8 w-14 mr-1.5 rounded'
                        style={{
                          backgroundColor: labels.find(
                            (label) => label.id === curLabel
                          ).colorHex,
                        }}
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
                  <LabelsMenu
                    title='Label'
                    selectedLabels={card.labels}
                    showMenu={setShowLabelsMenu}
                    onLabelChange={handleLabelChange}
                  />
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
                  <CoverMenu
                    title='Cover'
                    cover={card.cover}
                    showMenu={setShowCoverMenu}
                    onCoverChange={handleCoverChange}
                  />
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
