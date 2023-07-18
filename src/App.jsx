import Board from './pages/Board';
import Modal from './components/Modal';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path='/' element={<Board />}>
          <Route path='/modal/:id' element={<Modal />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path='/modal/:id' element={<Modal />} />
        </Routes>
      )}
    </>
  );
}

export default App;
