// import { BsPlusLg, BsStopwatch, BsThreeDots, BsXLg } from 'react-icons/bs';

import Navbar from './Navbar';
import BoardTitle from './BoardTitle';
import List from './List';
// import Modal from './Modal';
import ListAdd from './ListAdd';

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

const Board = () => {
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
            <div className='flex flex-row [&>*]:mr-4'>
              <List {...themes} />
              <List {...themes} />
              <List {...themes} />

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
